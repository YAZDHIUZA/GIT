import { NextResponse } from 'next/server';

// 1. THIS IS CRITICAL: Forces Next.js to never cache this route or its environment variables
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_TOKEN || !CHAT_ID) {
      console.error("Missing Telegram keys in environment variables!");
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 });
    }

    // 2. CHANGED TO HTML: Telegram Markdown breaks easily if a user types a special character (like "-" or "_") in their address. HTML is 100x safer.
    const message = `
🔔 <b>طلب جديد</b>
--------------------------
👤 <b>الاسم:</b> ${body.name}
📞 <b>الهاتف:</b> ${body.phone}
🏙️ <b>المدينة:</b> ${body.city}
🏠 <b>العنوان:</b> ${body.address}
--------------------------
📦 <b>المنتج:</b> ${body.product}
⚖️ <b>العرض:</b> ${body.package}
💰 <b>المجموع:</b> ${body.total}
    `;

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML', // Switched to HTML
      }),
    });

    // Parse the response so we can see EXACTLY what Telegram says if it fails
    const data = await response.json();

    if (response.ok) {
      return NextResponse.json({ success: true });
    } 
    
    // 3. ADVANCED LOGGING: If it fails, this prints the exact Telegram error inside your Vercel Logs
    console.error("Telegram API Rejected the Request:", data);
    return NextResponse.json({ success: false, error: data.description || "Telegram API Error" }, { status: 400 });

  } catch (error: any) {
    console.error("Server Error:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
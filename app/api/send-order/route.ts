import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // SECURE WAY: Pulling from Vercel's Environment Variables
    const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    // Safety check to ensure the variables exist
    if (!TELEGRAM_TOKEN || !CHAT_ID) {
      console.error("Missing Telegram keys in environment variables!");
      return NextResponse.json({ success: false, error: "Server configuration error" }, { status: 500 });
    }

    const message = `
🔔 **طلب جديد**
--------------------------
👤 **الاسم:** ${body.name}
📞 **الهاتف:** ${body.phone}
🏙️ **المدينة:** ${body.city}
🏠 **العنوان:** ${body.address}
--------------------------
📦 **المنتج:** ${body.product}
⚖️ **العرض:** ${body.package}
💰 **المجموع:** ${body.total}
    `;

    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } 
    
    return NextResponse.json({ success: false, error: "Telegram API Error" }, { status: 400 });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

import React from 'react';
// If you have a globals.css file for Tailwind, uncomment the line below:
// import '../globals.css'; 

export const metadata = {
  title: 'Roujola ENERGY | الطاقة الطبيعية للحياة',
  description: 'منتج طبيعي متميز لدعم الحيوية والصحة العامة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-sans text-gray-800 bg-gray-50">
        {children}
      </body>
    </html>
  );
}
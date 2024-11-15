import React from 'react';
import  Poppins  from 'next/font/google';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-gray-50 overflow-hidden'>
        {children}
    </div>
  );
}
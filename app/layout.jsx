"use client";
import "./globals.css";
import React from "react";

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
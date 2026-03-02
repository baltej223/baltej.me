import "./globals.css";
import React from "react";

export const metadata = {
  title:
    "Baltej Singh | CSE @ Thapar University",
  description:
    "Computer Science student at Thapar University building scalable software systems and solving real-world problems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}

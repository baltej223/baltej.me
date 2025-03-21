import "@/app/globals.css";

export const metadata = {
  title: "Baltej Singh",
  description: "With with love and passion by Baltej Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

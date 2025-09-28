import "@/app/globals.css";

export const metadata = {
  title: "About Me | Baltej Singh",
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

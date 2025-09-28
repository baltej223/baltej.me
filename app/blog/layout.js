import "@/app/globals.css";

export const metadata = {
  title: "Baltej Singh | Passionate Developer | Creative Thinker | Student At TIET",
  description: "With love and passion by Baltej Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

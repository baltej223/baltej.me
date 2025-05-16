import "@/app/globals.css";

export const metadata = {
  title: "Early Warning Signs of Placement Struggle | baltej.me",
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

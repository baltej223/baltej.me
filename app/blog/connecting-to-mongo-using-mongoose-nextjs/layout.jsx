import "@/app/globals.css";

export const metadata = {
  title: "Connecting MongoDB using mongoose in NextJS | Baltej Singh",
  description: "Establishing a connection to MongoDB using mongoose.js in NextJS and how is it diffrent from Express.js | NextJS serverless",
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

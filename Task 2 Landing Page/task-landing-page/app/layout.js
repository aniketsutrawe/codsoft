import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-full h-full" >
      <body className="w-full h-full">{children}</body>
    </html>
  );
}

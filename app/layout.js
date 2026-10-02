import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "StoneyApes",
  description: "A stone-cut crew of apes. Search, save, and inspect the gallery.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="nav">
            <Link className="brand" href="/">
              StoneyApes
            </Link>
            <nav className="links">
              <Link href="/">Home</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/about">About</Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}

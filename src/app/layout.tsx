import './globals.css';
import Link from 'next/link';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <header>
          <h1>Piercer Go</h1>
          <nav>
          <Link href="/">Home</Link>
            <Link href="/eventos/">Eventos</Link>
            <a href="/score">Score Piercing</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2025 Piercer Go</p>
        </footer>
      </body>
    </html>
  );
}

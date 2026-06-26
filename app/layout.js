import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}

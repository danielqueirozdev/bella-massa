import './globals.css'

export const metadata = {
  title: 'Bella Massa — Autêntica Culinária Italiana',
  description: 'Massas artesanais preparadas com tradição e ingredientes selecionados.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

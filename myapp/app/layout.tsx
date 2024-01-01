import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Home - Arthur',
  description: 'Seja bem vindo ao meu portifólio, venha conhecer alguns dos meu projetos e sobre meus conhecimentos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}

import './globals.scss'

export const metadata = {
  title: 'Resume',
  description: 'Resume by Zhulinskiy Danil',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}

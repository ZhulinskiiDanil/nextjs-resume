import { CursorChaser } from '@/entities/cursorChaser/ui/CursorChaser'
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
      <body>
        <CursorChaser />
        { children }
      </body>
    </html>
  )
}

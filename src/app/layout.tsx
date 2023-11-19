import { CursorChaser } from '@/entities/cursorChaser/ui/CursorChaser'
import './globals.scss'

export const metadata = {
  title: 'Zhulinskiy Danil',
  description: 'My personal web site about me and my job, welcome :3'
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

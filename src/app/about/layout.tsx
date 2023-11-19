import { CursorChaser } from '@/entities/cursorChaser/ui/CursorChaser'

export const metadata = {
  title: 'Zhulinskiy / About',
  description: 'About me',
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return <>
    <CursorChaser />
    { children }
  </>
}

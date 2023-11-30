import { NextResponse } from 'next/server';
import TGBot from '@/app/telegram-bot'

const message = `:date\nАктивный пользователь:\n\n`

export async function GET(req: Request) {
  let res: string[] = []
  req.headers.forEach((value, key) => res.push(`${key}: ${value}`))

  const date = new Date()
  const localeDate = date.toLocaleDateString()
  const localeTime = date.toLocaleTimeString()

  TGBot.sendMessage(1221111560, (
    message
      .replaceAll(':date', `${localeDate} ${localeTime}`)
      + res.join('\n')
  ));
  
  return NextResponse.json("Hello world")
}
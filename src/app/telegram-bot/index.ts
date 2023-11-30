import TelegramBot from 'node-telegram-bot-api'

const token = '6496767357:AAHIjgODn0qqR_cUHQU5zJhI4D-LDBAPUwc';
const TGBot = new TelegramBot(token, { polling: true });

export default TGBot
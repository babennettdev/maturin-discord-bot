import 'dotenv/config'
export const COMMAND_PREFIX = process.env.COMMAND_PREFIX ? String(process.env.COMMAND_PREFIX) : '!';
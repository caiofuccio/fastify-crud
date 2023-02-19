import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  PORT: z.string().default('8080'),
  DATABASE_URL: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error(
    '⚠ Missing or invalid environment variable',
    _env.error.format(),
  )

  throw new Error('Missing or invalid environment variables')
}

export const env = _env.data

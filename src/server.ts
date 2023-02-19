import fastify from 'fastify'
import { env } from './env'

const app = fastify()

app.get('/hello', () => {
  return 'Hello World'
})

app
  .listen({
    port: Number(env.PORT),
  })
  .then(() =>
    console.log(`HTTP ${env.NODE_ENV} server running on port ${env.PORT}`),
  )

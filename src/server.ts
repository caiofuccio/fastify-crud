import fastify from 'fastify'
import { env } from './env'
import { transactionsRoutes } from './routes'

const app = fastify()

app.register(transactionsRoutes, {
  prefix: 'transactions',
})

app
  .listen({
    port: Number(env.PORT),
  })
  .then(() =>
    console.log(`HTTP ${env.NODE_ENV} server running on port ${env.PORT}`),
  )

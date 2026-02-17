import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',

  datasource: {
    url: env('POSTGRES_URL'),
    directUrl: env('POSTGRES_URL_NON_POOLING'),
  },

  migrations: {
    path: 'prisma/migrations',
  },
})

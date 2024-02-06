import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { connectDB } from './db/connect'

dotenv.config()

if (!process.env.PORT) process.exit(1)

const PORT: number = parseInt(process.env.PORT as string, 10)  || 5000
const app = express()

// Middleware
app.use(helmet())
app.use(cors())
app.use(express.json())

// Start the Server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI as string)
    app.listen(PORT, () => {
      console.log(`Server started on port: ${ PORT }`)
    })
  }
  catch (error) {
    console.error(error)
  }
}

start()
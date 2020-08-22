import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

dotenv.config()

const PORT: number = parseInt(process.env.PORT as string, 10)

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

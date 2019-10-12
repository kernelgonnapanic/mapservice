import express from 'express'
import cors from 'cors'
import { connect } from './utils/db'
import mongoose from 'mongoose'

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.disable('x-powered-by')

app.use(cors())
app.use(express.json())

export const start = async () => {
  try {
    await connect()
    app.listen(port, (req, res) => {
      console.log(`Server running at ${port}`)
    })
  } catch (e) {
    console.log(e)
  }
}

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// })

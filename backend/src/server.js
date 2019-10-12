const express = require('express')
const cors = require('cors')
// const json = require('json')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.disable('x-powered-by')

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB Connected!'))
  .catch(err => {
    console.log(`DB Connection Error: ${err.message}`)
  })

app.listen(port, (req, res) => {
  console.log(`Server running at ${port}`)
})

import mongoose from 'mongoose'

export const connect = (uri = process.env.ATLAS_URI) => {
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
      console.log(`DB Connection Error: ${err.message}`)
    })
}

import mongoose from 'mongoose'

const uri =
  'mongodb+srv://michalstosio:<password>@webmap-p3yj9.mongodb.net/test?retryWrites=true&w=majority'

export const connect = (uri, opts = {}) => {
  return mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
}

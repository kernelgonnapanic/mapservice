import mongoose from 'mongoose'

const placeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30
  },
  status: {
    type: String,
    enum: ['opened', 'closed']
  },
  address: {
    street: String,
    city: {
      type: String,
      default: 'Siedlce'
    },
    number: Number
  },
  placeType: {
    type: 'String',
    enum: ['pizzeria', 'kebab']
  },
  image: String,
  phoneNumber: Number,
  description: String
})

placeSchema.index({ title: 1 }, { unique: true })

export const Place = mongoose.model('list', placeSchema)

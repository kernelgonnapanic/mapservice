import mongoose from 'mongoose'

const placeSchema = new mongoose.Schema({
  title: String,
  description: String
})

placeSchema.index({ user: 1, name: 1 }, { unique: true })

export const Place = mongoose.model('list', placeSchema)

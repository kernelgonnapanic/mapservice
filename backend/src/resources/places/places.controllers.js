import { Place } from './places.model'

export const getData = async (req, res) => {
  try {
    const places = await Place.find()
    res.json(places)
  } catch (err) {
    res.json({
      message: err
    })
  }
}

export const createPlace = async (req, res) => {
  const place = new Place({
    title: req.body.title,
    description: req.body.description
  })

  try {
    const savedPlace = await place.save()
    res.json(savedPlace)
  } catch (err) {
    res.json({
      message: err
    })
  }
}

export const getPlace = async (req, res) => {
  const id = req.params.id
  const place = await Place.findById(id)

  res.json(place)
}

import { Place } from './places.model'

export const getData = async (req, res) => {
	try {
		const places = await Place.find()
		res.json(places)
	} catch (err) {
		res.json({
			message: err,
		})
	}
}

export const middleWare = (req, res, next) => {
	console.log('I AM MIDDLEWARE')
	next()
}

export const createPlace = async (req, res) => {
	const place = new Place({
		title: req.body.title,
		address: {
			street: req.body.street,
			number: req.body.number,
		},
		coordinates: [
			{
				lat: req.body.lat,
				long: req.body.long,
			},
		],
		type: req.body.address,
		phoneNumber: req.body.phoneNumber,
		description: req.body.description,
	})

	try {
		const savedPlace = await place.save()

		res.json(savedPlace)
	} catch (err) {
		res.json({
			message: err,
		})
	}
}

export const getPlace = async (req, res) => {
	const id = req.params.id
	const place = await Place.findById(id)

	res.json(place)
}

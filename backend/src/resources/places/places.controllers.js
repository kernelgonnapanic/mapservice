import { Place } from './places.model'

export const getData = async (req, res) => {
	try {
		const places = await Place.find()
		res.json({ data: places })
	} catch (err) {
		res.json({
			message: err,
		})
	}
}

export const createPlace = async (req, res) => {
	const fullImageUrl = req.file
		? req.protocol + '://' + req.get('host') + '/' + req.file.path
		: ''

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
		city: req.body.city,
		placeType: req.body.placeType,
		placeImage: fullImageUrl,
	})

	try {
		const savedPlace = await place.save()

		res.status(200).json(savedPlace)
	} catch (err) {
		res.status(404).send({
			message: err,
		})
	}
}

export const getPlace = async (req, res) => {
	try {
		const id = req.params.id

		const sendError = () => {
			return res.status(404).end()
		}

		if (!id.match(/^[0-9a-fA-F]{24}$/)) {
			sendError()
		}

		const place = await Place.findById(id)

		if (!place) {
			sendError()
		}

		res.status(200).json({ data: place })
	} catch (err) {
		console.log(err)
	}
}

export const updatePlace = async (req, res) => {
	try {
		const id = req.params.id

		const updatedPlace = await Place.findOneAndUpdate(
			{
				_id: id,
			},
			{
				title: req.body.title,
			},
			{
				new: true,
			},
		)

		res.status(200).json({ data: updatedPlace })
	} catch (err) {
		console.log(err)
	}
}

export const getPlaceTypeOptions = async (req, res) => {
	try {
		const enums = await Place.schema.path('placeType').enumValues

		for (var i = 0; i < enums.length; i++) {
			if (enums[i] === 'no-category') {
				enums.splice(i, 1)
			}
		}

		res.status(200).json({ data: enums })
	} catch (err) {
		console.log(err)
	}
}

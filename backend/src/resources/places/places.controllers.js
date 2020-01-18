import { Place } from './places.model'

export const getData = async (req, res) => {
	const offset = parseInt(req.query.offset) || 0
	const per_page = parseInt(req.query.per_page) || 10

	const placesList = Place.find()
		.skip(offset)
		.limit(per_page)

	const placesCount = Place.count()

	const [places, count] = await Promise.all([placesList, placesCount])

	return res.status(200).json({ data: places, count })
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

	const savedPlace = await place.save()

	res.status(201).json(savedPlace)
}

export const getPlace = async (req, res, next) => {
	const id = req.params.id
	const isIdNotEqual = !id.match(/^[0-9a-fA-F]{24}$/)

	if (isIdNotEqual) next()

	const place = await Place.findById(id)

	if (!place) next()

	res.status(200).json({ data: place })
}

export const updatePlace = async (req, res, next) => {
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
		err => {
			if (err) next()
		},
	)

	res.status(200).json({ data: updatedPlace })
}

export const getPlaceTypeOptions = async (req, res) => {
	const enums = await Place.schema.path('placeType').enumValues

	if (!enums) next()

	for (var i = 0; i < enums.length; i++) {
		if (enums[i] === 'no-category') {
			enums.splice(i, 1)
		}
	}

	res.status(200).json({ data: enums })
}

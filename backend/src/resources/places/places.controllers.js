import { Place } from './places.model'


export const getData = async (req, res, next) => {
  const { type, search } = req.query
	const offset = parseInt(req.query.offset) || 0;
  const per_page = parseInt(req.query.per_page) || 20

  let query = {};

  if(search) query.title = { $regex: search || '' }

  if(type) query.placeType = type

  const searchValues =
    (search || type) ? query : null

  const placesList = Place.find(searchValues)
		.limit(per_page)
		.skip(offset * per_page)
		.sort({
			title: 'asc',
		})

  if (!placesList) next();

  const searchValue = search ? true : false

  const placesCount = Place.countDocuments(searchValues)

  const [places, count] = await Promise.all([placesList, placesCount])

  const numberOfPages = await placesCount / per_page;
  const currentPage = offset + 1

  const successResponse = {
    data: places,
    count,
    currentPage,
    numberOfPages: Math.ceil(numberOfPages),
    search: searchValue,
    byPlaceType: Boolean(type),
    placeType: type
  }

  return res
		.status(200)
    .json(successResponse)
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


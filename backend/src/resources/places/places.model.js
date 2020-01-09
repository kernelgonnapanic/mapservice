import mongoose from 'mongoose'

const placeSchema = new mongoose.Schema({
	id: mongoose.SchemaTypes.ObjectId,
	title: {
		type: String,
		required: true,
		trim: true,
		maxlength: 30,
	},
	status: {
		type: String,
		enum: ['opened', 'closed'],
	},
	address: {
		street: {
			type: String,
			required: true,
		},
		city: {
			type: String,
			default: 'Siedlce',
		},
		number: Number,
	},
	placeType: {
		type: String,
		enum: [
			'pizzeria',
			'kebab',
			'restaurant',
			'kino',
			'pomnik',
			'muzuem',
			'no-category',
		],
		default: 'no-category',
	},
	placeImage: String,
	phoneNumber: Number,
	description: String,
	coordinates: [
		{
			lat: {
				type: Number,
				required: true,
			},
			long: {
				type: Number,
				required: true,
			},
		},
	],
})

placeSchema.index({ title: 1 }, { unique: true })

export const Place = mongoose.model('list', placeSchema)

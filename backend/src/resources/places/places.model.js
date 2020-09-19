import mongoose from 'mongoose'

const placeSchema = new mongoose.Schema(
	{
		id: mongoose.SchemaTypes.ObjectId,
		title: {
			type: String,
			required: true,
			trim: true,
			maxlength: 30,
			unique: true,
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
				'cinema',
				'statue',
				'museum',
				'cafe',
				'club',
				'bar',
				'no-category',
			],
			default: 'no-category',
		},
		placeImage: String,
		phoneNumber: Number,
		description: String,
		workHours: {open: Number, close: Number},
		website: String,
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
	},
	{
		timestamps: true,
	},
)

placeSchema.index({ title: 1 }, { unique: true })

export const Place = mongoose.model('list', placeSchema)

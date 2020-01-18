import mongoose from 'moongoose'

const userSchema = new mongoose.Schema(
	{
		login: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true },
)

export const User = mongoose.model('user', userSchema)

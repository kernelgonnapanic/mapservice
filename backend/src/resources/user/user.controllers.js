import { User } from './user.model'

export const getUser = async (req, res, next) => {
	const userId = req.body.id

	if (!userId || !userId.match(/^[0-9a-fA-F]{24}$/)) {
		return res.status(404).send({ message: 'Wrong id' })
	}

	const user = await User.findById(userId)

	if (!user) {
		return res.status(404).send({ message: 'User not found' })
	}

	return res.status(200).json({ data: user })
}

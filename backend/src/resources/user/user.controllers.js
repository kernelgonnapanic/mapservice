import { User } from './user.model'

//REWRITE TO GET USER IF LOGGED
export const getUser = async (req, res, next) => {
	const user = req.user

	if (!user) {
		return res.status(404).send({ message: 'User not found' })
	}

	return res.status(200).json({ data: user })
}

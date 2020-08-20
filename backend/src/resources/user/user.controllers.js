import { User } from './user.model'
import {userNotFoundMessage} from "../../utils/messages";

//REWRITE TO GET USER IF LOGGED
export const getUser = async (req, res, next) => {
	const user = req.user

	if (!user) {
		return res.status(404).send({ message: userNotFoundMessage})
	}

	return res.status(200).json({ data: user })
}

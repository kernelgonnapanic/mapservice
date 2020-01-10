export function notFound(req, res, next) {
	const err = new Error('Not Found')
	err.status = 404

	next(err)
}

export function catchErrors(err, req, res, next) {
	res.status(err.status || 500)

	res.json({ message: err.message })
}

const sendError = res => {
	return res.status(404).end()
}

export { sendError }

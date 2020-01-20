export const config = {
	port: process.env.PORT || 5000,
	secrets: {
		jwt: 'learneverything',
		jwtExp: 60 * 60,
	},
}

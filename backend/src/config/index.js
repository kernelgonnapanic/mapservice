export const config = {
	port: process.env.PORT || 5000,
	secrets: {
		jwt: 'webmap-jwt',
		jwtExp: 60 * 60,
	},
}

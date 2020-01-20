module.exports = {
	testEnvironment: 'node',
	setupFilesAfterEnv: ['<rootDir>/test-db-setup.js'],
	testPathIgnorePatterns: ['dist/'],
	restoreMocks: true,
	verbose: true,
	testURL: 'http://localhost/',
}

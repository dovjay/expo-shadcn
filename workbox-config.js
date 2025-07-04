module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{css,js,ico,png,json,html}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
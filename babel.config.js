module.exports = function (api) {
	api.cache(true)

	return {
		plugins: [
			'jsx-event-modifiers',
		],
		presets: [
			['@vue/app', {
				useBuiltIns: 'entry'
			}]
		],
	};
}

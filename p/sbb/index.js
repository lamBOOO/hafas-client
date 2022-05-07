// todo: use import assertions once they're supported by Node.js & ESLint
// https://github.com/tc39/proposal-import-assertions
import {createRequire} from 'module'
const require = createRequire(import.meta.url)

const baseProfile = require('./base.json')
import {products} from './products.js'

const profile = {
	...baseProfile,
	locale: 'de-CH',
	timezone: 'Europe/Zurich',

	products: products,

	refreshJourneyUseOutReconL: true,
	trip: true,
	radar: true,
	reachableFrom: true,
}

const withLocale = (locale) => ({...profile, locale})

export {
	profile,
	withLocale,
}

'use strict'

module.exports = {
	id: '1|307|4|86|12102021',
	direction: 'CPH Lufthavn',
	currentLocation: {
		type: 'location',
		latitude: 56.482839,
		longitude: 9.95345,
	},
	line: {
		type: 'line',
		id: 'ic-71160',
		fahrtNr: '71160',
		name: 'IC 71160',
		public: true,
		adminCode: '000002',
		productName: 'IC',
		mode: 'train',
		product: 'national-train',
		operator: { type: 'operator', id: 'dsb', name: 'DSB' },
	},

	origin: {
		type: 'stop',
		id: '8600020',
		name: 'Aalborg St.',
		location: {
			type: 'location',
			id: '8600020',
			latitude: 57.043037,
			longitude: 9.917044,
		},
		products: {
			'national-train': true,
			'national-train-2': true,
			'local-train': true,
			o: false,
			's-tog': false,
		},
	},
	departure: '2021-10-12T16:06:00+02:00',
	plannedDeparture: '2021-10-12T16:06:00+02:00',
	departureDelay: null,
	departurePlatform: '3',
	plannedDeparturePlatform: '4',
	departurePrognosisType: 'prognosed',

	destination: {
		type: 'stop',
		id: '8600053',
		name: 'Aarhus H',
		location: {
			type: 'location',
			id: '8600053',
			latitude: 56.150444,
			longitude: 10.204761,
		},
		products: {
			'national-train': true,
			'national-train-2': true,
			'local-train': true,
			o: true,
			's-tog': false,
		},
	},
	arrival: '2021-10-12T17:38:00+02:00',
	plannedArrival: '2021-10-12T17:38:00+02:00',
	arrivalDelay: null,
	arrivalPlatform: '5',
	plannedArrivalPlatform: '5',
	arrivalPrognosisType: 'prognosed',

	remarks: [
		{ type: 'hint', code: 'RE', text: 'Reservierung empfohlen' },
		{ type: 'hint', code: 'TD', text: 'Mulighed for internet' },
	],

	stopovers: [
		{
			stop: {
				type: 'stop',
				id: '8600020',
				name: 'Aalborg St.',
				location: {
					type: 'location',
					id: '8600020',
					latitude: 57.043037,
					longitude: 9.917044,
				},
				products: {
					'national-train': true,
					'national-train-2': true,
					'local-train': true,
					o: false,
					's-tog': false,
				},
			},
			arrival: null,
			plannedArrival: null,
			arrivalDelay: null,
			arrivalPlatform: null,
			plannedArrivalPlatform: null,
			arrivalPrognosisType: null,
			departure: '2021-10-12T16:06:00+02:00',
			plannedDeparture: '2021-10-12T16:06:00+02:00',
			departureDelay: null,
			departurePlatform: '3',
			plannedDeparturePlatform: '4',
			departurePrognosisType: 'prognosed',
			remarks: [
				{
					type: 'status',
					code: 'text.realtime.stop.dep.platformChange',
					text: 'Abfahrt heute von Gleis 3',
				},
			],
		},
		{
			stop: {
				type: 'stop',
				id: '8600022',
				name: 'Skalborg St.',
				location: {
					type: 'location',
					id: '8600022',
					latitude: 57.008366,
					longitude: 9.898373,
				},
				products: {
					'national-train': true,
					'national-train-2': false,
					'local-train': true,
					o: false,
					's-tog': false,
				},
			},
			arrival: '2021-10-12T16:10:00+02:00',
			plannedArrival: '2021-10-12T16:09:00+02:00',
			arrivalDelay: 60,
			arrivalPlatform: '2',
			plannedArrivalPlatform: '2',
			arrivalPrognosisType: 'prognosed',
			departure: '2021-10-12T16:12:00+02:00',
			plannedDeparture: '2021-10-12T16:10:00+02:00',
			departureDelay: 120,
			departurePlatform: '2',
			plannedDeparturePlatform: '2',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '8600023',
				name: 'Svenstrup St. (Jylland)',
				location: {
					type: 'location',
					id: '8600023',
					latitude: 56.973092,
					longitude: 9.856294,
				},
				products: {
					'national-train': true,
					'national-train-2': false,
					'local-train': true,
					o: false,
					's-tog': false,
				},
			},
			arrival: '2021-10-12T16:14:00+02:00',
			plannedArrival: '2021-10-12T16:13:00+02:00',
			arrivalDelay: 60,
			arrivalPlatform: '2',
			plannedArrivalPlatform: '2',
			arrivalPrognosisType: 'prognosed',
			departure: '2021-10-12T16:17:00+02:00',
			plannedDeparture: '2021-10-12T16:14:00+02:00',
			departureDelay: 180,
			departurePlatform: '2',
			plannedDeparturePlatform: '2',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '8600026',
				name: 'Støvring St.',
				location: {
					type: 'location',
					id: '8600026',
					latitude: 56.890976,
					longitude: 9.843925,
				},
				products: {
					'national-train': true,
					'national-train-2': false,
					'local-train': true,
					o: false,
					's-tog': false,
				},
			},
			arrival: '2021-10-12T16:22:00+02:00',
			plannedArrival: '2021-10-12T16:21:00+02:00',
			arrivalDelay: 60,
			arrivalPlatform: '2',
			plannedArrivalPlatform: '2',
			arrivalPrognosisType: 'prognosed',
			departure: '2021-10-12T16:24:00+02:00',
			plannedDeparture: '2021-10-12T16:22:00+02:00',
			departureDelay: 120,
			departurePlatform: '2',
			plannedDeparturePlatform: '2',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '8600027',
				name: 'Skørping St.',
				location: {
					type: 'location',
					id: '8600027',
					latitude: 56.835719,
					longitude: 9.887361,
				},
				products: {
					'national-train': true,
					'national-train-2': false,
					'local-train': true,
					o: false,
					's-tog': false,
				},
			},
			arrival: '2021-10-12T16:28:00+02:00',
			plannedArrival: '2021-10-12T16:27:00+02:00',
			arrivalDelay: 60,
			arrivalPlatform: '3',
			plannedArrivalPlatform: '3',
			arrivalPrognosisType: 'prognosed',
			departure: '2021-10-12T16:29:00+02:00',
			plannedDeparture: '2021-10-12T16:28:00+02:00',
			departureDelay: 60,
			departurePlatform: '3',
			plannedDeparturePlatform: '3',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '8600029',
				name: 'Arden St.',
				location: {
					type: 'location',
					id: '8600029',
					latitude: 56.769729,
					longitude: 9.859926,
				},
				products: {
					'national-train': true,
					'national-train-2': true,
					'local-train': false,
					o: false,
					's-tog': false,
				},
			},
			arrival: '2021-10-12T16:36:00+02:00',
			plannedArrival: '2021-10-12T16:33:00+02:00',
			arrivalDelay: 180,
			arrivalPlatform: '1',
			plannedArrivalPlatform: '1',
			arrivalPrognosisType: 'prognosed',
			departure: '2021-10-12T16:37:00+02:00',
			plannedDeparture: '2021-10-12T16:34:00+02:00',
			departureDelay: 180,
			departurePlatform: '1',
			plannedDeparturePlatform: '1',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '8600032',
				name: 'Hobro St.',
				location: {
					type: 'location',
					id: '8600032',
					latitude: 56.643539,
					longitude: 9.78279,
				},
				products: {
					'national-train': true,
					'national-train-2': true,
					'local-train': false,
					o: false,
					's-tog': false,
				},
			},
			arrival: '2021-10-12T16:45:00+02:00',
			plannedArrival: '2021-10-12T16:43:00+02:00',
			arrivalDelay: 120,
			arrivalPlatform: '3',
			plannedArrivalPlatform: '3',
			arrivalPrognosisType: 'prognosed',
			departure: '2021-10-12T16:46:00+02:00',
			plannedDeparture: '2021-10-12T16:45:00+02:00',
			departureDelay: 60,
			departurePlatform: '3',
			plannedDeparturePlatform: '3',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '8600040',
				name: 'Randers St.',
				location: {
					type: 'location',
					id: '8600040',
					latitude: 56.461858,
					longitude: 10.022011,
				},
				products: {
					'national-train': true,
					'national-train-2': true,
					'local-train': false,
					o: false,
					's-tog': false,
				},
			},
			arrival: '2021-10-12T17:01:00+02:00',
			plannedArrival: '2021-10-12T16:59:00+02:00',
			arrivalDelay: 120,
			arrivalPlatform: '3',
			plannedArrivalPlatform: '3',
			arrivalPrognosisType: 'prognosed',
			departure: '2021-10-12T17:01:00+02:00',
			plannedDeparture: '2021-10-12T17:01:00+02:00',
			departureDelay: null,
			departurePlatform: '3',
			plannedDeparturePlatform: '3',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '8600044',
				name: 'Langå St.',
				location: {
					type: 'location',
					id: '8600044',
					latitude: 56.386393,
					longitude: 9.896144,
				},
				products: {
					'national-train': true,
					'national-train-2': false,
					'local-train': true,
					o: true,
					's-tog': false,
				},
			},
			arrival: '2021-10-12T17:09:00+02:00',
			plannedArrival: '2021-10-12T17:09:00+02:00',
			arrivalDelay: null,
			arrivalPlatform: '2',
			plannedArrivalPlatform: '2',
			arrivalPrognosisType: 'prognosed',
			departure: '2021-10-12T17:10:00+02:00',
			plannedDeparture: '2021-10-12T17:10:00+02:00',
			departureDelay: null,
			departurePlatform: '2',
			plannedDeparturePlatform: '2',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '8600047',
				name: 'Hadsten St.',
				location: {
					type: 'location',
					id: '8600047',
					latitude: 56.327496,
					longitude: 10.047234,
				},
				products: {
					'national-train': true,
					'national-train-2': false,
					'local-train': true,
					o: true,
					's-tog': false,
				},
			},
			arrival: '2021-10-12T17:17:00+02:00',
			plannedArrival: '2021-10-12T17:17:00+02:00',
			arrivalDelay: null,
			arrivalPlatform: '1',
			plannedArrivalPlatform: '1',
			arrivalPrognosisType: 'prognosed',
			departure: '2021-10-12T17:18:00+02:00',
			plannedDeparture: '2021-10-12T17:18:00+02:00',
			departureDelay: null,
			departurePlatform: '1',
			plannedDeparturePlatform: '1',
			departurePrognosisType: 'prognosed',
		},
		{
			stop: {
				type: 'stop',
				id: '8600053',
				name: 'Aarhus H',
				location: {
					type: 'location',
					id: '8600053',
					latitude: 56.150444,
					longitude: 10.204761,
				},
				products: {
					'national-train': true,
					'national-train-2': true,
					'local-train': true,
					o: true,
					's-tog': false,
				},
			},
			arrival: '2021-10-12T17:38:00+02:00',
			plannedArrival: '2021-10-12T17:38:00+02:00',
			arrivalDelay: null,
			arrivalPlatform: '5',
			plannedArrivalPlatform: '5',
			arrivalPrognosisType: 'prognosed',
			departure: null,
			plannedDeparture: null,
			departureDelay: null,
			departurePlatform: null,
			plannedDeparturePlatform: null,
			departurePrognosisType: null,
		},
	],
}

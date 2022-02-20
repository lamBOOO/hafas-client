'use strict'

module.exports = {
	tripId: '1|265947|0|80|1082020',
	stop: {
		type: 'stop',
		id: '8000050',
		name: 'Bremen Hbf',
		location: {
			type: 'location',
			id: '8000050',
			latitude: 53.083478,
			longitude: 8.813833,
		},
		products: {
			nationalExpress: true,
			national: true,
			regionalExpress: true,
			regional: true,
			suburban: true,
			bus: true,
			ferry: false,
			subway: false,
			tram: false,
			anrufSammelTaxi: false,
		},
		station: {
			type: 'station',
			id: '9013927',
			name: 'Bremen Hbf',
			location: {
				type: 'location',
				id: '9013927',
				latitude: 53.083478,
				longitude: 8.813833
			},
			products: {
				nationalExpress: true,
				national: true,
				regionalExpress: true,
				regional: true,
				suburban: true,
				bus: true,
				ferry: false,
				subway: false,
				tram: true,
				anrufSammelTaxi: true,
			},
			isMeta: true,
		}
	},
	when: '2020-08-01T18:42:00+02:00',
	plannedWhen: '2020-08-01T17:44:00+02:00',
	delay: 3480,
	platform: '8',
	plannedPlatform: '8',
	direction: 'Frankfurt(Main) Hbf',
	provenance: null,
	origin: null,
	destination: {
		type: 'stop',
		id: '8000105',
		name: 'Frankfurt(Main) Hbf',
		location: {
			type: 'location',
			id: '8000105',
			latitude: 50.107149,
			longitude: 8.663785,
		},
		products: {
			nationalExpress: true,
			national: true,
			regionalExpress: false,
			regional: true,
			suburban: true,
			bus: true,
			ferry: false,
			subway: false,
			tram: false,
			anrufSammelTaxi: false,
		},
	},
	line: {
		type: 'line',
		id: '80-30',
		fahrtNr: '2315',
		name: 'IC 2315',
		public: true,
		adminCode: '80____',
		productName: 'IC',
		mode: 'train',
		product: 'national',
		operator: {
			type: 'operator',
			id: 'db-fernverkehr',
			name: 'DB Fernverkehr',
		},
	},
	remarks: [],
}

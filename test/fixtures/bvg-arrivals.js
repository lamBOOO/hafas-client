'use strict'

const sLandsbergerAllee = {
	type: 'stop',
	id: '900000110004',
	stationDHID: 'de:11000:900110004',
	name: 'S Landsberger Allee',
	location: {
		type: 'location',
		id: '900110004',
		latitude: 52.528771,
		longitude: 13.455944,
	},
	products: {
		suburban: true,
		subway: false,
		tram: true,
		bus: true,
		ferry: false,
		express: false,
		regional: false,
	},
	lines: [{
		type: 'line',
		id: 's8',
		fahrtNr: null,
		name: 'S8',
		public: true,
		productName: 'S',
		mode: 'train',
		product: 'suburban',
	}, {
		type: 'line',
		id: 's41',
		fahrtNr: null,
		name: 'S41',
		public: true,
		productName: 'S',
		mode: 'train',
		product: 'suburban',
	}, {
		type: 'line',
		id: 's42',
		fahrtNr: null,
		name: 'S42',
		public: true,
		productName: 'S',
		mode: 'train',
		product: 'suburban',
	}, {
		type: 'line',
		id: 's85',
		fahrtNr: null,
		name: 'S85',
		public: true,
		productName: 'S',
		mode: 'train',
		product: 'suburban',
	}, {
		type: 'line',
		id: '56',
		fahrtNr: null,
		name: '56',
		public: true,
		productName: 'Tram',
		mode: 'train',
		product: 'tram',
	}, {
		type: 'line',
		id: 'm2',
		fahrtNr: null,
		name: 'M2',
		public: true,
		productName: 'Tram',
		mode: 'train',
		product: 'tram',
	}, {
		type: 'line',
		id: 'm5',
		fahrtNr: null,
		name: 'M5',
		public: true,
		productName: 'Tram',
		mode: 'train',
		product: 'tram',
	}, {
		type: 'line',
		id: 'm6',
		fahrtNr: null,
		name: 'M6',
		public: true,
		productName: 'Tram',
		mode: 'train',
		product: 'tram',
	}, {
		type: 'line',
		id: 'm8',
		fahrtNr: null,
		name: 'M8',
		public: true,
		productName: 'Tram',
		mode: 'train',
		product: 'tram',
	}, {
		type: 'line',
		id: 'm10',
		fahrtNr: null,
		name: 'M10',
		public: true,
		productName: 'Tram',
		mode: 'train',
		product: 'tram',
	}, {
		type: 'line',
		id: '156',
		fahrtNr: null,
		name: '156',
		public: true,
		productName: 'Bus',
		mode: 'bus',
		product: 'bus',
	}, {
		type: 'line',
		id: 'm6',
		fahrtNr: null,
		name: 'M6',
		public: true,
		productName: 'Bus',
		mode: 'bus',
		product: 'bus',
	}, {
		type: 'line',
		id: 's41',
		fahrtNr: null,
		name: 'S41',
		public: true,
		productName: 'Bus',
		mode: 'bus',
		product: 'bus',
	}, {
		type: 'line',
		id: 's42',
		fahrtNr: null,
		name: 'S42',
		public: true,
		productName: 'Bus',
		mode: 'bus',
		product: 'bus',
	}],
}

const achtungFalscheFahrplanauskünfte = {
	id: '140812',
	type: 'warning',
	summary: 'Achtung! Falsche Fahrplanauskünfte für S41, S42 für Do (28.10.)',
	text: 'Informationen zum Fahrplan finden Sie hier:\n' +
		'<a href="https://sbahn.berlin/fahren/fahrplanaenderungen" target="_blank" rel="noopener">sbahn.berlin</a>',
	icon: {type: 'HIM2', title: null},
	priority: 100,
	products: {
		suburban: true,
		subway: true,
		tram: true,
		bus: true,
		ferry: true,
		express: true,
		regional: true
	},
	company: 'VBB',
	categories: [2],
	validFrom: '2021-10-27T18:10:00+02:00',
	validUntil: '2021-10-29T02:00:00+02:00',
	modified: '2021-10-28T08:50:03+02:00',
}

const gemeinsamSicherUnterwegs = {
	id: '118634',
	type: 'warning',
	summary: 'Gemeinsam sicher unterwegs - mit Abstand und medizinischer Maske (in Berlin: FFP2)!',
	text: 'An Haltestellen und Bahnhöfen sowie in Fahrzeugen. Maskenmuffel riskieren mindestens 50 Euro.\n' +
		'<a href="https://www.vbb.de/corona" target="_blank" rel="noopener">Weitere Informationen</a>',
	icon: {type: 'HIM0', title: null},
	priority: 100,
	products: {
		suburban: true,
		subway: true,
		tram: true,
		bus: true,
		ferry: true,
		express: true,
		regional: true
	},
	company: 'VBB',
	categories: [0],
	validFrom: '2021-04-24T00:00:00+02:00',
	validUntil: '2022-12-31T00:00:00+01:00',
	modified: '2021-06-12T07:43:36+02:00',
}

const ausfallS8 = {
	id: '140655',
	type: 'warning',
	summary: 'Ausfall S8 zwischen Frankfurter Allee und Greifswalder Straße.',
	text: 'Bauzeitverlängerung: Weiterhin durchgehend bis zum 29.10.(Do), ca. 1:30 Uhr kein Zugverkehr zwischen Greifswalder Str. und Frankfurter Allee. Zwischen Greifswalder Straße und Ostkreuz ist Ersatzverkehr mit Bussen eingerichtet. Bitte steigen Sie zwischen der S-Bahn und dem Ersatzverkehr am Bahnhof Ostkreuz um, am Bahnhof Frankfurter Allee beträgt der Fußweg zwischen S-Bahnhof und der Haltestelle des Ersatzverkehrs in der Gürtelstraße ca. 300 Meter. Achtung eingeschränkte Fahrradmitnahme! Bitte informieren Sie sich frühzeitig über Ihre Fahrmöglichkeiten. Wir bitten um Entschuldigung.\n' +
		'<a href="https://sbahn.berlin/fahren/fahrplanaenderungen/detail/16829-sanierung-einer-stuetzmauer-an-der-bruecke-eldenaer-strasse-gleiserneuerung-aufbringen-einer-ge/" target="_blank" rel="noopener">S-Bahn Berlin</a>',
	icon: {type: 'HIM1', title: null},
	priority: 100,
	products: {
		suburban: true,
		subway: true,
		tram: true,
		bus: true,
		ferry: true,
		express: true,
		regional: true
	},
	company: 'S-Bahn Berlin',
	categories: [1],
	validFrom: '2021-10-28T02:00:00+02:00',
	validUntil: '2021-10-29T02:00:00+02:00',
	modified: '2021-10-27T09:58:25+02:00',
}

const ersatzlinieWegenBauarbeiten = {
	id: '140433',
	type: 'warning',
	summary: '.Ersatzlinie wegen Bauarbeiten',
	text: 'Tram 56: fährt als Ersatz für M6 Riesaer Str. - S Hackescher Markt, umgeleitet zwischen Blumberger Damm/Landsberger Allee - Hohenschönhauser Str. über Allee der Kosmonauten - S Springpfuhl - Herzbergstr. - Roederplatz - Weißenseer Weg. Die Züge M6 fahren Riesaer Str. - S Marzahn, Busse als Ersatzverkehr fahren über Landsberger Allee zwischen S Marzahn und Hohenschönhauser Str. bzw. im Nachtverkehr bis Landsberger Allee/Petersburger Str..',
	icon: {type: 'HIM1', title: null},
	priority: 100,
	products: {
		suburban: true,
		subway: true,
		tram: true,
		bus: true,
		ferry: true,
		express: true,
		regional: true
	},
	company: 'BVG',
	categories: [1],
	validFrom: '2021-10-25T02:00:00+02:00',
	validUntil: '2021-11-22T03:00:00+01:00',
	modified: '2021-10-22T23:39:21+02:00',
}

const fehlerImITSysem = {
	id: '140805',
	type: 'warning',
	summary: 'Information.',
	text: 'Aufgrund eines Fehlers in den IT-Systemen sind die Daten in der Fahrplanauskunft für die Fahrten der Linien S41 und S42 am Donnerstag, den 28.10.2021 fehlerhaft. Die Züge der Linien S41 und S42 fahren wie folgt: S41 - Frankfurter Allee &#62; Ostkreuz &#62; Südkreuz &#62; Westkreuz &#62; Gesundbrunnen &#62; Greifswalder Straße im 10-Minuten-Takt, zusätzliche Verstärkerzüge fahren Frankfurter Allee &#62; Ostkreuz &#62; Südkreuz &#62; Westkreuz &#62; Gesundbrunnen im 20-Minuten-Takt (von ca. 5 bis 21 Uhr); S42 - Greifswalder Straße &#62; Gesundbrunnen &#62; Westkreuz &#62; Südkreuz &#62; Ostkreuz &#62; Frankfurter Allee im 10-Minuten-Takt, zusätzliche Verstärkerzüge fahren Gesundbrunnen &#62; Westkreuz &#62; Südkreuz &#62; Ostkreuz &#62; Frankfurter Allee im 20-Minuten-Takt (von ca. 5 bis 21 Uhr)',
	icon: {type: 'HIM0', title: null},
	priority: 50,
	products: {
		suburban: true,
		subway: true,
		tram: true,
		bus: true,
		ferry: true,
		express: true,
		regional: true
	},
	company: 'VBB',
	categories: [0],
	validFrom: '2021-10-27T17:10:00+02:00',
	validUntil: '2021-10-29T02:00:00+02:00',
	modified: '2021-10-27T17:39:54+02:00',
}

const bauzeitverlängerung = {
	id: '140558',
	type: 'warning',
	summary: 'Bauarbeiten.',
	text: 'Bauzeitverlängerung: Weiterhin durchgehend bis zum 29.10.(Fr), ca. 1:30 Uhr kein Zugverkehr zwischen Greifswalder Str. und Frankfurter Allee. Zwischen Greifswalder Straße und Ostkreuz ist Ersatzverkehr mit Bussen eingerichtet. Bitte steigen Sie zwischen der S-Bahn und dem Ersatzverkehr am Bahnhof Ostkreuz um, am Bahnhof Frankfurter Allee beträgt der Fußweg zwischen S-Bahnhof und der Haltestelle des Ersatzverkehrs in der Gürtelstraße ca. 300 Meter.  Achtung eingeschränkte Fahrradmitnahme! Bitte informieren Sie sich frühzeitig über Ihre Fahrmöglichkeiten. Wir bitten um Entschuldigung.\n' +
		'<a href="https://sbahn.berlin/fahren/fahrplanaenderungen/detail/16829-sanierung-einer-stuetzmauer-an-der-bruecke-eldenaer-strasse-gleiserneuerung-aufbringen-einer-ge/" target="_blank" rel="noopener">Infos Bauzeitverlängerung</a>',
	icon: {type: 'HIM1', title: null},
	priority: 1,
	products: {
		suburban: true,
		subway: true,
		tram: true,
		bus: true,
		ferry: true,
		express: true,
		regional: true
	},
	company: 'VBB',
	categories: [1],
	validFrom: '2021-10-28T02:00:00+02:00',
	validUntil: '2021-10-29T01:30:00+02:00',
	modified: '2021-10-27T17:00:45+02:00',
}

module.exports = [
	{
		tripId: '1|18731|26|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:34:00+02:00',
		plannedWhen: '2021-10-28T10:30:00+02:00',
		delay: 240,
		platform: null,
		plannedPlatform: null,
		direction: null,
		provenance: 'Clara-Jaschke-Str.',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 'm5',
			fahrtNr: '2780',
			name: 'M5',
			public: true,
			adminCode: 'BVT',
			productName: 'Tram',
			mode: 'train',
			product: 'tram',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.529859, longitude: 13.460987}
	},
	{
		tripId: '1|19013|5|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:34:00+02:00',
		plannedWhen: '2021-10-28T10:33:00+02:00',
		delay: 60,
		platform: null,
		plannedPlatform: null,
		direction: null,
		provenance: 'Ahrensfelde/Stadtgrenze',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 'm8',
			fahrtNr: '3085',
			name: 'M8',
			public: true,
			adminCode: 'BVT',
			productName: 'Tram',
			mode: 'train',
			product: 'tram',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.527639, longitude: 13.452159}
	},
	{
		tripId: '1|19067|24|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:37:00+02:00',
		plannedWhen: '2021-10-28T10:33:00+02:00',
		delay: 240,
		platform: null,
		plannedPlatform: null,
		direction: null,
		provenance: 'Clara-Jaschke-Str.',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 'm8',
			fahrtNr: '3151',
			name: 'M8',
			public: true,
			adminCode: 'BVT',
			productName: 'Tram',
			mode: 'train',
			product: 'tram',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.525949, longitude: 13.446262}
	},
	{
		tripId: '1|17032|5|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:31:00+02:00',
		plannedWhen: '2021-10-28T10:34:00+02:00',
		delay: -180,
		platform: null,
		plannedPlatform: null,
		direction: null,
		provenance: 'Riesaer Str.',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: '56',
			fahrtNr: '3255',
			name: '56',
			public: true,
			adminCode: 'BVT',
			productName: 'Tram',
			mode: 'train',
			product: 'tram',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			ersatzlinieWegenBauarbeiten,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.524088, longitude: 13.439943}
	},
	{
		tripId: '1|24512|0|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:34:00+02:00',
		plannedWhen: '2021-10-28T10:34:00+02:00',
		delay: 0,
		platform: '2',
		plannedPlatform: '2',
		direction: null,
		provenance: 'S Grünau',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's8',
			fahrtNr: '25595',
			name: 'S8',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			ausfallS8,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.528915, longitude: 13.45536}
	},
	{
		tripId: '1|52562|17|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:34:00+02:00',
		plannedWhen: '2021-10-28T10:34:00+02:00',
		delay: 0,
		platform: '1',
		plannedPlatform: '1',
		direction: null,
		provenance: 'S Südkreuz',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's41',
			fahrtNr: '893',
			name: 'S41',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			fehlerImITSysem,
			bauzeitverlängerung,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.52638, longitude: 13.458002}
	},
	{
		tripId: '1|53738|6|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:35:00+02:00',
		plannedWhen: '2021-10-28T10:35:00+02:00',
		delay: null,
		platform: '2',
		plannedPlatform: '2',
		direction: null,
		provenance: 'S Südkreuz',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's42',
			fahrtNr: '1710',
			name: 'S42',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			fehlerImITSysem,
			bauzeitverlängerung,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.493426, longitude: 13.461283}
	},
	{
		tripId: '1|17078|26|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:37:00+02:00',
		plannedWhen: '2021-10-28T10:36:00+02:00',
		delay: 60,
		platform: null,
		plannedPlatform: null,
		direction: null,
		provenance: 'S Hackescher Markt',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: '56',
			fahrtNr: '3304',
			name: '56',
			public: true,
			adminCode: 'BVT',
			productName: 'Tram',
			mode: 'train',
			product: 'tram',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			ersatzlinieWegenBauarbeiten,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.525949, longitude: 13.446262}
	},
	{
		tripId: '1|53354|9|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:36:00+02:00',
		plannedWhen: '2021-10-28T10:36:00+02:00',
		delay: 0,
		platform: '2',
		plannedPlatform: '2',
		direction: null,
		provenance: 'S Südkreuz',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's42',
			fahrtNr: '1344',
			name: 'S42',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			fehlerImITSysem,
			bauzeitverlängerung,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.523513, longitude: 13.466003}
	},
	{
		tripId: '1|18606|6|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:38:00+02:00',
		plannedWhen: '2021-10-28T10:38:00+02:00',
		delay: 0,
		platform: null,
		plannedPlatform: null,
		direction: null,
		provenance: 'Scharnweberstr./Weichselstr.',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 'm5',
			fahrtNr: '2643',
			name: 'M5',
			public: true,
			adminCode: 'BVT',
			productName: 'Tram',
			mode: 'train',
			product: 'tram',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.530803, longitude: 13.461661}
	},
	{
		tripId: '1|52010|0|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:39:00+02:00',
		plannedWhen: '2021-10-28T10:39:00+02:00',
		delay: 0,
		platform: '1',
		plannedPlatform: '1',
		direction: null,
		provenance: 'S Südkreuz',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's41',
			fahrtNr: '654',
			name: 'S41',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.54479, longitude: 13.425884}
	},
	{
		tripId: '1|53328|1|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:40:00+02:00',
		plannedWhen: '2021-10-28T10:40:00+02:00',
		delay: null,
		platform: '2',
		plannedPlatform: '2',
		direction: null,
		provenance: 'S Südkreuz',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's42',
			fahrtNr: '1357',
			name: 'S42',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.492473, longitude: 13.460636}
	},
	{
		tripId: '1|18731|27|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:39:00+02:00',
		plannedWhen: '2021-10-28T10:40:00+02:00',
		delay: -60,
		platform: null,
		plannedPlatform: null,
		direction: null,
		provenance: 'Clara-Jaschke-Str.',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 'm5',
			fahrtNr: '2780',
			name: 'M5',
			public: true,
			adminCode: 'BVT',
			productName: 'Tram',
			mode: 'train',
			product: 'tram',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.524016, longitude: 13.439745}
	},
	{
		tripId: '1|24642|3|86|28102021',
		stop: sLandsbergerAllee,
		when: null,
		plannedWhen: '2021-10-28T10:41:00+02:00',
		prognosedWhen: null,
		delay: null,
		platform: null,
		plannedPlatform: null,
		prognosedPlatform: null,
		direction: null,
		provenance: 'S Birkenwerder',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's8',
			fahrtNr: '25467',
			name: 'S8',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			ausfallS8,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs,
			{
				type: 'status',
				code: 'text.realtime.journey.cancelled',
				text: 'S8: Fällt aus'
			},
			{
				type: 'status',
				code: 'text.realtime.stop.cancelled',
				text: 'Halt entfällt'
			}
		],
		cancelled: true
	},
	{
		tripId: '1|19013|6|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:46:00+02:00',
		plannedWhen: '2021-10-28T10:43:00+02:00',
		delay: 180,
		platform: null,
		plannedPlatform: null,
		direction: null,
		provenance: 'Ahrensfelde/Stadtgrenze',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 'm8',
			fahrtNr: '3085',
			name: 'M8',
			public: true,
			adminCode: 'BVT',
			productName: 'Tram',
			mode: 'train',
			product: 'tram',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.525499, longitude: 13.509529}
	},
	{
		tripId: '1|19067|25|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:42:00+02:00',
		plannedWhen: '2021-10-28T10:43:00+02:00',
		delay: -60,
		platform: null,
		plannedPlatform: null,
		direction: null,
		provenance: 'Clara-Jaschke-Str.',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 'm8',
			fahrtNr: '3151',
			name: 'M8',
			public: true,
			adminCode: 'BVT',
			productName: 'Tram',
			mode: 'train',
			product: 'tram',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.524385, longitude: 13.421965}
	},
	{
		tripId: '1|17032|6|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:47:00+02:00',
		plannedWhen: '2021-10-28T10:44:00+02:00',
		delay: 180,
		platform: null,
		plannedPlatform: null,
		direction: null,
		provenance: 'Riesaer Str.',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: '56',
			fahrtNr: '3255',
			name: '56',
			public: true,
			adminCode: 'BVT',
			productName: 'Tram',
			mode: 'train',
			product: 'tram',
			operator: {
				type: 'operator',
				id: 'berliner-verkehrsbetriebe',
				name: 'Berliner Verkehrsbetriebe'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			ersatzlinieWegenBauarbeiten,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.526749, longitude: 13.482327}
	},
	{
		tripId: '1|24781|1|86|28102021',
		stop: sLandsbergerAllee,
		when: null,
		plannedWhen: '2021-10-28T10:44:00+02:00',
		prognosedWhen: null,
		delay: null,
		platform: null,
		plannedPlatform: null,
		prognosedPlatform: null,
		direction: null,
		provenance: 'S Grünau',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's85',
			fahrtNr: '26542',
			name: 'S85',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			{
				id: '140567',
				type: 'warning',
				summary: 'Bauarbeiten.',
				text: 'Diese Fahrt fällt heute leider aus, bitte auf die Linie S8 ausweichen. Wegen Bauzeitverlängerung fahren keine Züge zwischen Frankfurter Allee und Greifswalder Straße, hier fahren Busse. Wir bitten um Entschuldigung\n' +
					'<a href="https://sbahn.berlin/fahren/fahrplanaenderungen/detail/16829-sanierung-einer-stuetzmauer-an-der-bruecke-eldenaer-strasse-gleiserneuerung-aufbringen-einer-ge/#con-22772" target="_blank" rel="noopener">Infos Bauzeitverlängerung</a>',
				icon: {type: 'HIM1', title: null},
				priority: 50,
				products: {
					suburban: true,
					subway: true,
					tram: true,
					bus: true,
					ferry: true,
					express: true,
					regional: true
				},
				company: 'VBB',
				categories: [1],
				validFrom: '2021-10-26T06:17:00+02:00',
				validUntil: '2021-10-29T02:00:00+02:00',
				modified: '2021-10-27T13:00:52+02:00'
			},
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs,
			{
				type: 'status',
				code: 'text.realtime.journey.cancelled',
				text: 'S85: Fällt aus'
			},
			{
				type: 'status',
				code: 'text.realtime.stop.cancelled',
				text: 'Halt entfällt'
			}
		],
		cancelled: true
	},
	{
		tripId: '1|52562|18|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:44:00+02:00',
		plannedWhen: '2021-10-28T10:44:00+02:00',
		delay: 0,
		platform: '1',
		plannedPlatform: '1',
		direction: null,
		provenance: 'S Südkreuz',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's41',
			fahrtNr: '889',
			name: 'S41',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			fehlerImITSysem,
			bauzeitverlängerung,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.548898, longitude: 13.386934}
	},
	{
		tripId: '1|53738|8|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T10:55:00+02:00',
		plannedWhen: '2021-10-28T10:55:00+02:00',
		delay: null,
		platform: '2',
		plannedPlatform: '2',
		direction: null,
		provenance: 'S Südkreuz',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's42',
			fahrtNr: '1706',
			name: 'S42',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			fehlerImITSysem,
			bauzeitverlängerung,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.48752, longitude: 13.459063}
	},
	{
		tripId: '1|53738|9|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T11:10:00+02:00',
		plannedWhen: '2021-10-28T11:10:00+02:00',
		delay: null,
		platform: '2',
		plannedPlatform: '2',
		direction: null,
		provenance: 'S Südkreuz',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's42',
			fahrtNr: '1704',
			name: 'S42',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			fehlerImITSysem,
			bauzeitverlängerung,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.471834, longitude: 13.37905}
	},
	{
		tripId: '1|53738|10|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T11:15:00+02:00',
		plannedWhen: '2021-10-28T11:15:00+02:00',
		delay: null,
		platform: '2',
		plannedPlatform: '2',
		direction: null,
		provenance: 'S Südkreuz',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's42',
			fahrtNr: '1702',
			name: 'S42',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			fehlerImITSysem,
			bauzeitverlängerung,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.480652, longitude: 13.45785}
	},
	{
		tripId: '1|53738|11|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T11:25:00+02:00',
		plannedWhen: '2021-10-28T11:25:00+02:00',
		delay: null,
		platform: '2',
		plannedPlatform: '2',
		direction: null,
		provenance: 'S Südkreuz',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's42',
			fahrtNr: '1700',
			name: 'S42',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			fehlerImITSysem,
			bauzeitverlängerung,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.477227, longitude: 13.457068}
	},
	{
		tripId: '1|53738|12|86|28102021',
		stop: sLandsbergerAllee,
		when: '2021-10-28T11:35:00+02:00',
		plannedWhen: '2021-10-28T11:35:00+02:00',
		delay: null,
		platform: '2',
		plannedPlatform: '2',
		direction: null,
		provenance: 'S Südkreuz',
		origin: null,
		destination: null,
		line: {
			type: 'line',
			id: 's42',
			fahrtNr: '1698',
			name: 'S42',
			public: true,
			adminCode: 'DBS',
			productName: 'S',
			mode: 'train',
			product: 'suburban',
			operator: {
				type: 'operator',
				id: 's-bahn-berlin-gmbh',
				name: 'S-Bahn Berlin GmbH'
			},
		},
		remarks: [
			{type: 'hint', code: 'bf', text: 'barrierefrei'},
			{type: 'hint', code: 'FB', text: 'Fahrradmitnahme möglich'},
			fehlerImITSysem,
			bauzeitverlängerung,
			achtungFalscheFahrplanauskünfte,
			gemeinsamSicherUnterwegs
		],
		currentTripPosition: {type: 'location', latitude: 52.473811, longitude: 13.456142},
	},
]

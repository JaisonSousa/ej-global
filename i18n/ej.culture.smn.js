ej.addCulture( "smn", {
	name: "smn",
	englishName: "Sami (Inari)",
	nativeName: "sämikielâ",
	language: "smn",
	numberFormat: {
		",": " ",
		".": ",",
		percent: {
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n $","n $"],
			",": " ",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["pasepeivi","vuossargâ","majebargâ","koskokko","tuorâstâh","vástuppeivi","lávurdâh"],
				namesAbbr: ["pas","vuo","maj","kos","tuo","vás","láv"],
				namesShort: ["p","v","m","k","t","v","l"]
			},
			months: {
				names: ["uđđâivemáánu","kuovâmáánu","njuhčâmáánu","cuáŋuimáánu","vyesimáánu","kesimáánu","syeinimáánu","porgemáánu","čohčâmáánu","roovvâdmáánu","skammâmáánu","juovlâmáánu",""],
				namesAbbr: ["uđiv","kuov","njuh","cuáŋ","vyes","kesi","syei","porg","čohč","roov","skam","juov",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d.M.yyyy",
				D: "MMMM d'. p. 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "MMMM d'. p. 'yyyy H:mm",
				F: "MMMM d'. p. 'yyyy H:mm:ss",
				M: "MMMM d'. p. '"
			}
		}
	}
});

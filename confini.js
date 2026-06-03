// DATABASE DEI CONFINI: METODO "PUZZLE"
var coloreRoma = "#cc0000"; // Rosso impero

var listaConfini = [
    {
        nome: "Repubblica Romana (Fase Iniziale)",
        colore: coloreRoma,
        annoInizio: -500, // Appare dal 500 a.C.
        annoFine: 476,
        geoData: {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[11.0, 42.5], [14.0, 42.5], [14.0, 41.0], [11.0, 41.0], [11.0, 42.5]]]
            },
            "properties": { "descrizione": "Il nucleo centrale di Roma e del Lazio." }
        }
    },
    {
        nome: "Conquista del Sud (Magna Grecia)",
        colore: coloreRoma,
        annoInizio: -270, // Appare nel 270 a.C. (dopo le guerre pirriche)
        annoFine: 476,
        geoData: {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[14.0, 41.0], [18.5, 40.0], [16.0, 38.0], [14.0, 39.5], [14.0, 41.0]]]
            },
            "properties": { "descrizione": "Annessione dei territori del sud Italia." }
        }
    },
    {
        nome: "Conquista del Nord (Gallia Cisalpina)",
        colore: coloreRoma,
        annoInizio: -190, // Appare nel 190 a.C.
        annoFine: 476,
        geoData: {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [[[7.5, 45.0], [13.5, 46.0], [14.0, 42.5], [11.0, 42.5], [7.5, 45.0]]]
            },
            "properties": { "descrizione": "Espansione verso il Nord Italia." }
        }
    }
];

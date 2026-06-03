// DATABASE DEI CONFINI ESATTI (GeoJSON semplificato)
var listaConfini = [
    {
        nome: "Repubblica/Impero Romano (Test)",
        colore: "#cc0000", // Rosso 
        annoInizio: -500,  // Appare nel 500 a.C.
        annoFine: 476,     // Scompare nel 476 d.C.
        geoData: {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                // Le coordinate sono invertite rispetto ai marker: prima Longitudine, poi Latitudine!
                "coordinates": [[
                    [7.5, 45.0],   // Nord-Ovest (Piemonte)
                    [13.5, 46.0],  // Nord-Est (Friuli)
                    [18.5, 40.0],  // Tacco (Puglia)
                    [16.0, 38.0],  // Punta (Calabria)
                    [12.0, 37.5],  // Sicilia ovest
                    [11.5, 42.0],  // Costa ovest (Toscana)
                    [7.5, 45.0]    // Ritorno al punto di partenza per chiudere il recinto
                ]]
            },
            "properties": {
                "descrizione": "Questo è un confine reale tracciato punto per punto. Visibile dal 500 a.C. al 476 d.C."
            }
        }
    }
];

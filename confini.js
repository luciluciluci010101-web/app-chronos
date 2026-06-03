// DATABASE CONFINI REALI - IMPERO ROMANO (Coordinate Costiere Ottimizzate)
var coloreRoma = "#cc0000"; 

var listaConfini = [
    {
        nome: "Repubblica Romana - Nucleo Italia",
        colore: coloreRoma,
        annoInizio: -500, // Appare nel 500 a.C.
        annoFine: 476,     // Scompare con la caduta dell'Impero
        geoData: {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                // Coordinate reali [Longitudine, Latitudine] che seguono la costa italiana
                "coordinates": [[
                    [7.5, 43.8],   // Ventimiglia (Confine Ovest)
                    [8.9, 44.4],   // Genova
                    [10.2, 44.0],  // La Spezia
                    [10.5, 42.8],  // Piombino / Toscana
                    [11.8, 42.2],  // Civitavecchia
                    [12.4, 41.8],  // Roma (Foce del Tevere)
                    [14.0, 41.0],  // Napoli / Gaeta
                    [15.0, 40.0],  // Salerno
                    [15.8, 38.3],  // Villa San Giovanni (Stretto di Messina)
                    [16.5, 37.9],  // Capo Spartivento (Punta dello stivale)
                    [17.2, 38.9],  // Catanzaro Lido
                    [17.2, 40.4],  // Taranto
                    [18.5, 39.8],  // Santa Maria di Leuca (Tacco)
                    [18.5, 40.4],  // Otranto
                    [16.8, 41.2],  // Bari
                    [16.2, 41.9],  // Vieste (Promontorio del Gargano)
                    [15.0, 42.1],  // Termoli
                    [13.5, 43.6],  // Ancona
                    [12.4, 44.9],  // Ravenna
                    [12.3, 45.4],  // Venezia
                    [13.6, 45.6],  // Trieste (Confine Est)
                    [12.5, 46.5],  // Alpi Orientali
                    [10.0, 46.5],  // Alpi Centrali
                    [7.0, 45.8],   // Alpi Occidentali
                    [7.5, 43.8]    // Chiusura del poligono su Ventimiglia
                ]]
            },
            "properties": {
                "descrizione": "I territori della Penisola Italiana sotto il controllo di Roma. I confini seguono la linea costiera reale."
            }
        }
    }
];

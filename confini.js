// DATABASE CONFINI STORICI REALI - REPUBBLICA ROMANA
var coloreRoma = "#cc0000"; 

var listaConfini = [
    {
        nome: "Roma e il Latium Vetus (Origini della Repubblica)",
        colore: coloreRoma,
        annoInizio: -500, // Attivo nel 500 a.C.
        annoFine: -340,   // Sostituito poi dalle successive espansioni delle guerre latine
        geoData: {
            "type": "Feature",
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    // 🌊 TRACCIATO AD ALTA PRECISIONE DELLA COSTA TIRRENICA
                    [11.79, 42.09],   // Civitavecchia (Punto Nord-Ovest)
                    [11.93, 42.00],   // Santa Severa
                    [12.11, 41.93],   // Ladispoli
                    [12.23, 41.79],   // Fregene
                    [12.24, 41.70],   // Ostia / Foce del Tevere
                    [12.39, 41.60],   // Torvaianica
                    [12.50, 41.49],   // Lavinio
                    [12.63, 41.44],   // Anzio
                    [12.72, 41.42],   // Nettuno
                    [12.90, 41.29],   // Sabaudia
                    [13.04, 41.22],   // San Felice Circeo (Giro dellaザ penisola)
                    [13.24, 41.28],   // Terracina
                    [13.43, 41.25],   // Sperlonga
                    [13.57, 41.21],   // Gaeta
                    [13.78, 41.23],   // Minturno (Limite Sud sulla foce del Garigliano)
                    
                    // ⛰️ LINEA DI CONFINE INTERNA (Entroterra e rilievi appenninici)
                    [13.90, 41.50],   // Area di Cassino
                    [13.60, 41.70],   // Sora
                    [13.35, 41.80],   // Fiuggi / Monti Ernici
                    [12.90, 41.90],   // Tivoli / Monti Tiburtini
                    [12.70, 42.10],   // Sabina
                    [12.30, 42.20],   // Civita Castellana
                    [11.95, 42.25],   // Area Etrusca interna (Tarquinia)
                    
                    [11.79, 42.09]    // Chiusura perfetta a Civitavecchia
                ]]
            },
            "properties": {
                "descrizione": "Il territorio originario di Roma repubblicana nel 500 a.C., limitato al Lazio antico prima dell'espansione nella penisola."
            }
        }
    }
];

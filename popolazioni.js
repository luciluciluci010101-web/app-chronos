// DATABASE DELLE POPOLAZIONI E DEGLI IMPERI
var listaPopolazioni = [
    {
        nome: "Impero Romano",
        colore: "#cc0000", // Rosso imperiale
        coordinate: [41.9028, 12.4964], // Centro (Roma)
        storia: [
            { anno: -753, raggio: 50000 },      // Nascita (50 km)
            { anno: -264, raggio: 300000 },     // Inizio guerre puniche
            { anno: 117, raggio: 2500000 },     // Massima espansione (2500 km)
            { anno: 395, raggio: 1500000 },     // Divisione dell'impero
            { anno: 476, raggio: 0 }            // Caduta
        ]
    },
    {
        nome: "Antico Egitto",
        colore: "#d4af37", // Oro egizio
        coordinate: [26.8206, 30.8025], // Centro (Nilo)
        storia: [
            { anno: -3100, raggio: 200000 },    // Unificazione
            { anno: -1400, raggio: 800000 },    // Massima espansione Nuovo Regno
            { anno: -30, raggio: 0 }            // Conquista romana
        ]
    }
];

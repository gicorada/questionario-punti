let risposte;

let pesi = [
    5,
    0,
    5,
    0,
    0,
    10,
    7,
    7,
    8,
    0,
    10,
    12,
    12,
    10,
    2,
    10,
    0,
    10,
    20,
    5,
    0,
    7,
    0,
    8,
    5,
    0,
    7,
    10,
    0,
    15,
    10,
    10
];
let domande = [
    "Hai entrambi i genitori?",
    "Quale ti manca?",
    "Hai problemi con i tuoi genitori?",
    "Con quale?",
    "Ho problemi perché...",
    "Hai pensieri sessuali con membri della tua famiglia?",
    "Hai problemi nel controllo della rabbia?",
    "Sei vegano o vegetariano?",
    "Hai traumi?",
    "Quali pensi siano?",
    "Durante l'erezione del tuo fallo, esso pende orizzontalmente in qualche direzione?",
    "Sei segretamente attratto da persone del tuo stesso sesso?",
    "Quando limoni, fai l'aspirapolvere?",
    "Hai moto o macchina?",
    "Puoi usarla/e?",
    "Hai fetish?",
    "Quale/i?",
    "I tuoi genitori (o anche solo uno) ti chiamano ogni cinque secondi?",
    "Sei maranza?",
    "Hai problemi di pronuncia?",
    "Sei dislessico, discalculico, confondi la destra con la sinistra?",
    "Hai problemi mentali certificati (BPD, ADHD, autismo ecc...)?",
    "Quali?",
    "Descrivi i tuoi hobby",
    "Ti piace la F1?",
    "Per chi tifi?",
    "Sei un maniaco del calcio?",
    "Ti piace leccare la barbagianna?",
    "Lo sai fare?",
    "Sei un maniaco di brawl stars?",
    "Hai mai avuto una relazione?",
    "Hai mai scopato?"
];

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const content = e.target.result;
            processFile(content);
            parseAnswers();
        };
        reader.readAsText(file);
    }
});

function processFile(content) {
    let i = 0;
    Papa.parse(content, {
        header: true,
        transformHeader: function(value) {
            return (i++) + " - " + value;
        },
        complete: function(results) {
            risposte = Object.values(results.data[0]);
        }
    });
}

function parseAnswers() {
    let punteggi = Array(32).fill(0);
    let dati = document.getElementById('dati');
    dati.innerHTML = "";

    //Hai entrambi i genitori?
    if (risposte[0] == "Sì") {
        punteggi[0] = pesi[0];
    }
    dati.innerHTML += `<p> ${domande[0]}: ${risposte[0]} (${punteggi[0]}/${pesi[0]})</p>`;

    //Quale ti manca?
    if(risposte[1] != "") {
        dati.innerHTML += `<p> ${domande[1]}: ${risposte[1]} (${punteggi[1]}/${pesi[1]})</p>`;
    }
    //Punteggio non assegnato

    //Hai problemi con i tuoi genitori?
    if (risposte[2] == "No") {
        punteggi[2] = pesi[2];
    }
    dati.innerHTML += `<p> ${domande[2]}: ${risposte[2]} (${punteggi[2]}/${pesi[2]})</p>`;

    //Con quale?
    if(risposte[3] != "") {
        dati.innerHTML += `<p> ${domande[3]}: ${risposte[3]} (${punteggi[3]}/${pesi[3]})</p>`;
    }
    //Punteggio non assegnato

    //Ho problemi perché...
    if(risposte[4] != "") {
        dati.innerHTML += `<p> ${domande[4]}: ${risposte[4]} (${punteggi[4]}/${pesi[4]})</p>`;
    }
    //Punteggio non assegnato

    //Hai pensieri sessuali con membri della tua famiglia?
    if (risposte[5] == "No") {
        punteggi[5] = pesi[5];
    }
    dati.innerHTML += `<p> ${domande[5]}: ${risposte[5]} (${punteggi[5]}/${pesi[5]})</p>`;

    //Hai problemi nel controllo della rabbia?
    if (risposte[6] == "No") {
        punteggi[6] = pesi[6];
    } else if (risposte[6] == "Sì, ma poco") {
        punteggi[6] = pesi[6] / 2;
    }
    dati.innerHTML += `<p> ${domande[6]}: ${risposte[6]} (${punteggi[6]}/${pesi[6]})</p>`;

    //Sei vegano o vegetariano?
    if (risposte[7] == "Nessuno di questi") {
        punteggi[7] = pesi[7];
    } else if (risposte[7] == "Vegetariano") {
        punteggi[7] = pesi[7]/2;
    } else {
        punteggi[7] = pesi[7]/10;
    }
    dati.innerHTML += `<p> ${domande[7]}: ${risposte[7]} (${punteggi[7]}/${pesi[7]})</p>`;

    //Hai traumi?
    if (risposte[8] == "No") {
        punteggi[8] = pesi[8];
    }
    dati.innerHTML += `<p> ${domande[8]}: ${risposte[8]} (${punteggi[8]}/${pesi[8]})</p>`;

    //Quali pensi siano?
    if(risposte[9] != "") {
        dati.innerHTML += `<p> ${domande[9]}: ${risposte[9]} (${punteggi[9]}/${pesi[9]})</p>`;
    }
    //Punteggio non assegnato

    //Durante l'erezione del tuo fallo, esso pende orizzontalmente in qualche direzione?
    if (risposte[10] == "No, è dritto") {
        punteggi[10] = pesi[10];
    }
    dati.innerHTML += `<p> ${domande[10]}: ${risposte[10]} (${punteggi[10]}/${pesi[10]})</p>`;

    //Sei segretamente attratto da persone del tuo stesso sesso?
    if (risposte[11] == "No") {
        punteggi[11] = pesi[11];
    } else {
        punteggi[11] = pesi[11]/2;
    }
    dati.innerHTML += `<p> ${domande[11]}: ${risposte[11]} (${punteggi[11]}/${pesi[11]})</p>`;

    //Quando limoni, fai l'aspirapolvere?
    if (risposte[12] == "No" || risposte[12] == "Non ho mai limonato") {
        punteggi[12] = pesi[12];
    }
    dati.innerHTML += `<p> ${domande[12]}: ${risposte[12]} (${punteggi[12]}/${pesi[12]})</p>`;

    //Hai moto o macchina?
    if (risposte[13] == "Moto" || risposte[13] == "Macchina") {
        punteggi[13] = pesi[13]/2;
    } else if (risposte[13] == "Macchina e moto") {
        punteggi[13] = pesi[13];
    }
    dati.innerHTML += `<p> ${domande[13]}: ${risposte[13]} (${punteggi[13]}/${pesi[13]})</p>`;

    //Puoi usarla/e?
    if (risposte[14] == "Sì") {
        punteggi[14] = pesi[14];
        dati.innerHTML += `<p> ${domande[14]}: ${risposte[14]} (${punteggi[14]}/${pesi[14]})</p>`;
    }

    //Hai fetish?
    if (risposte[15] == "Sono mentalmente aperto") {
        punteggi[15] = pesi[15];
    } else if(risposte[15] == "No") {
        punteggi[15] = pesi[15]/2;
    } else {
        punteggi[15] = pesi[15]/2;
    }
    dati.innerHTML += `<p> ${domande[15]}: ${risposte[15]} (${punteggi[15]}/${pesi[15]})</p>`;

    //Quale/i?
    if(risposte[16] != "") {
        dati.innerHTML += `<p> ${domande[16]}: ${risposte[16]} (${punteggi[16]}/${pesi[16]})</p>`;
    }
    //Punteggio non assegnato

    //I tuoi genitori (o anche solo uno) ti chiamano ogni cinque secondi?
    if (risposte[17] == "No") {
        punteggi[17] = pesi[17];
    }
    dati.innerHTML += `<p> ${domande[17]}: ${risposte[17]} (${punteggi[17]}/${pesi[17]})</p>`;

    //Sei maranza?
    if (risposte[18] == "No") {
        punteggi[18] = pesi[18];
    }
    dati.innerHTML += `<p> ${domande[18]}: ${risposte[18]} (${punteggi[18]}/${pesi[18]})</p>`;

    //Hai problemi di pronuncia?
    if (risposte[19] == "No") {
        punteggi[19] = pesi[19];
    }
    dati.innerHTML += `<p> ${domande[19]}: ${risposte[19]} (${punteggi[19]}/${pesi[19]})</p>`;

    //Sei dislessico, discalculico, confondi la destra con la sinistra?
    if (risposte[20] != "") {
        dati.innerHTML += `<p> ${domande[20]}: ${risposte[20]} (${punteggi[20]}/${pesi[20]})</p>`;
    }
    //Punteggio non assegnato

    //Hai problemi mentali certificati (BPD, ADHD, autismo ecc...)?
    if (risposte[21] == "No") {
        punteggi[21] = pesi[21];
    }
    dati.innerHTML += `<p> ${domande[21]}: ${risposte[21]} (${punteggi[21]}/${pesi[21]})</p>`;

    //Quali?
    if(risposte[22] != "") {
        dati.innerHTML += `<p> ${domande[22]}: ${risposte[22]} (${punteggi[22]}/${pesi[22]})</p>`;
    }
    //Punteggio non assegnato

    //Descrivi i tuoi hobby
    if (risposte[23] != "") {
        punteggi[23] = pesi[23];
    }
    dati.innerHTML += `<p> ${domande[23]}: ${risposte[23]} (${punteggi[23]}/${pesi[23]})</p>`;

    //Ti piace la F1?
    if (risposte[24] == "Sì" || risposte == "Sni") {
        punteggi[24] = pesi[24];
    }
    dati.innerHTML += `<p> ${domande[24]}: ${risposte[24]} (${punteggi[24]}/${pesi[24]})</p>`;

    //Per chi tifi?
    if(risposte[25] != "") {
        dati.innerHTML += `<p> ${domande[25]}: ${risposte[25]} (${punteggi[25]}/${pesi[25]})</p>`;
    }
    //Punteggio non assegnato

    //Sei un maniaco del calcio?
    if (risposte[26] == "No") {
        punteggi[26] = pesi[26];
    }
    dati.innerHTML += `<p> ${domande[26]}: ${risposte[26]} (${punteggi[26]}/${pesi[26]})</p>`;

    //Ti piace leccare la barbagianna?
    if (risposte[27] == "Sì") {
        punteggi[27] = pesi[27];
    }
    dati.innerHTML += `<p> ${domande[27]}: ${risposte[27]} (${punteggi[27]}/${pesi[27]})</p>`;

    //Lo sai fare?
    if (risposte[28] == "Boia sì") {
        punteggi[28] = pesi[28];
    }
    dati.innerHTML += `<p> ${domande[28]}: ${risposte[28]} (${punteggi[28]}/${pesi[28]})</p>`;

    //Sei un maniaco di brawl stars?
    if (risposte[29] == "No") {
        punteggi[29] = pesi[29];
    }
    dati.innerHTML += `<p> ${domande[29]}: ${risposte[29]} (${punteggi[29]}/${pesi[29]})</p>`;

    //Hai mai avuto una relazione?
    if (risposte[30] == "Sì") {
        punteggi[30] = pesi[30];
    }
    dati.innerHTML += `<p> ${domande[30]}: ${risposte[30]} (${punteggi[30]}/${pesi[30]})</p>`;

    //Hai mai scopato?
    if (risposte[31] == "Sì" || risposte[31] == "Sì, mezzo mondo") {
        punteggi[31] = pesi[31];
    }
    dati.innerHTML += `<p> ${domande[31]}: ${risposte[31]} (${punteggi[31]}/${pesi[31]})</p>`;

    let punteggio = punteggi.reduce((a, b) => a + b, 0);
    document.getElementById('punteggio').innerText = Math.round(punteggio);
}
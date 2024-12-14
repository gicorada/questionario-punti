let ris_questionario;

let pesi = [5, 0, 5, 0, 0, 10, 7, 7, 8, 0, 10, 12, 12, 10, 2, 10, 0, 10, 20, 5, 0, 7, 0, 8, 5, 0, 7, 10, 0, 15, 10, 10];

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
            ris_questionario = Object.values(results.data[0]);
        }
    });
}

function parseAnswers() {
    let punteggi = Array(31).fill(0);
    let dati = document.getElementById('dati');
    dati.innerHTML = "";

    //Hai entrambi i genitori?
    let d0 = "Hai entrambi i genitori?";
    if (ris_questionario[0] == "Sì") {
        punteggi[0] = pesi[0];
    }
    dati.innerHTML += `<p> ${d0}: ${ris_questionario[0]} (${punteggi[0]}/${pesi[0]})</p>`;

    //Quale ti manca?
    let d1 = "Quale ti manca?";
    if(ris_questionario[1] != "") {
        dati.innerHTML += `<p> ${d1}: ${ris_questionario[1]} (${punteggi[1]}/${pesi[1]})</p>`;
    }
    //Punteggio non assegnato

    //Hai problemi con i tuoi genitori?
    let d2 = "Hai problemi con i tuoi genitori?";
    if (ris_questionario[2] == "No") {
        punteggi[2] = pesi[2];
    }
    dati.innerHTML += `<p> ${d2}: ${ris_questionario[2]} (${punteggi[2]}/${pesi[2]})</p>`;

    //Con quale?
    let d3 = "Con quale?";
    if(ris_questionario[3] != "") {
        dati.innerHTML += `<p> ${d3}: ${ris_questionario[3]} (${punteggi[3]}/${pesi[3]})</p>`;
    }
    //Punteggio non assegnato

    //Ho problemi perché...
    let d4 = "Ho problemi perché...";
    if(ris_questionario[4] != "") {
        dati.innerHTML += `<p> ${d4}: ${ris_questionario[4]} (${punteggi[4]}/${pesi[4]})</p>`;
    }
    //Punteggio non assegnato

    //Hai pensieri sessuali con membri della tua famiglia?
    let d5 = "Hai pensieri sessuali con membri della tua famiglia?";
    if (ris_questionario[5] == "No") {
        punteggi[5] = pesi[5];
    }
    dati.innerHTML += `<p> ${d5}: ${ris_questionario[5]} (${punteggi[5]}/${pesi[5]})</p>`;

    //Hai problemi nel controllo della rabbia?
    let d6 = "Hai problemi nel controllo della rabbia?";
    if (ris_questionario[6] == "No") {
        punteggi[6] = pesi[6];
    } else if (ris_questionario[6] == "Sì, ma poco") {
        punteggi[6] = pesi[6] / 2;
    }
    dati.innerHTML += `<p> ${d6}: ${ris_questionario[6]} (${punteggi[6]}/${pesi[6]})</p>`;

    //Sei vegano o vegetariano?
    let d7 = "Sei vegano o vegetariano?";
    if (ris_questionario[7] == "Nessuno di questi") {
        punteggi[7] = pesi[7];
    } else if (ris_questionario[7] == "Vegetariano") {
        punteggi[7] = pesi[7]/2;
    } else {
        punteggi[7] = pesi[7]/10;
    }
    dati.innerHTML += `<p> ${d7}: ${ris_questionario[7]} (${punteggi[7]}/${pesi[7]})</p>`;

    //Hai traumi?
    let d8 = "Hai traumi?";
    if (ris_questionario[8] == "No") {
        punteggi[8] = pesi[8];
    }
    dati.innerHTML += `<p> ${d8}: ${ris_questionario[8]} (${punteggi[8]}/${pesi[8]})</p>`;

    //Quali pensi siano?
    let d9 = "Quali pensi siano?";
    if(ris_questionario[9] != "") {
        dati.innerHTML += `<p> ${d9}: ${ris_questionario[9]} (${punteggi[9]}/${pesi[9]})</p>`;
    }
    //Punteggio non assegnato

    //Durante l'erezione del tuo fallo, esso pende orizzontalmente in qualche direzione?
    let d10 = "Durante l'erezione del tuo fallo, esso pende orizzontalmente in qualche direzione?";
    if (ris_questionario[10] == "No, è dritto") {
        punteggi[10] = pesi[10];
    }
    dati.innerHTML += `<p> ${d10}: ${ris_questionario[10]} (${punteggi[10]}/${pesi[10]})</p>`;

    //Sei segretamente attratto da persone del tuo stesso sesso?
    let d11 = "Sei segretamente attratto da persone del tuo stesso sesso?";
    if (ris_questionario[11] == "No") {
        punteggi[11] = pesi[11];
    } else {
        punteggi[11] = pesi[11]/2;
    }
    dati.innerHTML += `<p> ${d11}: ${ris_questionario[11]} (${punteggi[11]}/${pesi[11]})</p>`;

    //Quando limoni, fai l'aspirapolvere?
    let d12 = "Quando limoni, fai l'aspirapolvere?";
    if (ris_questionario[12] == "No" || ris_questionario[12] == "Non ho mai limonato") {
        punteggi[12] = pesi[12];
    }
    dati.innerHTML += `<p> ${d12}: ${ris_questionario[12]} (${punteggi[12]}/${pesi[12]})</p>`;

    //Hai moto o macchina?
    let d13 = "Hai moto o macchina?";
    if (ris_questionario[13] == "Moto" || ris_questionario[13] == "Macchina") {
        punteggi[13] = pesi[13]/2;
    } else if (ris_questionario[13] == "Macchina e moto") {
        punteggi[13] = pesi[13];
    }
    dati.innerHTML += `<p> ${d13}: ${ris_questionario[13]} (${punteggi[13]}/${pesi[13]})</p>`;

    //Puoi usarla/e?
    let d14 = "Puoi usarla/e?";
    if (ris_questionario[14] == "Sì") {
        punteggi[14] = pesi[14];
        dati.innerHTML += `<p> ${d14}: ${ris_questionario[14]} (${punteggi[14]}/${pesi[14]})</p>`;
    }

    //Hai fetish?
    let d15 = "Hai fetish?";
    if (ris_questionario[15] == "Sono mentalmente aperto") {
        punteggi[15] = pesi[15];
    } else if(ris_questionario[15] == "No") {
        punteggi[15] = pesi[15]/2;
    } else {
        punteggi[15] = pesi[15]/2;
    }
    dati.innerHTML += `<p> ${d15}: ${ris_questionario[15]} (${punteggi[15]}/${pesi[15]})</p>`;

    //Quale/i?
    let d16 = "Quale/i?";
    if(ris_questionario[16] != "") {
        dati.innerHTML += `<p> ${d16}: ${ris_questionario[16]} (${punteggi[16]}/${pesi[16]})</p>`;
    }
    //Punteggio non assegnato

    //I tuoi genitori (o anche solo uno) ti chiamano ogni cinque secondi?
    let d17 = "I tuoi genitori (o anche solo uno) ti chiamano ogni cinque secondi?";
    if (ris_questionario[17] == "No") {
        punteggi[17] = pesi[17];
    }
    dati.innerHTML += `<p> ${d17}: ${ris_questionario[17]} (${punteggi[17]}/${pesi[17]})</p>`;

    //Sei maranza?
    let d18 = "Sei maranza?";
    if (ris_questionario[18] == "No") {
        punteggi[18] = pesi[18];
    }
    dati.innerHTML += `<p> ${d18}: ${ris_questionario[18]} (${punteggi[18]}/${pesi[18]})</p>`;

    //Hai problemi di pronuncia?
    let d19 = "Hai problemi di pronuncia?";
    if (ris_questionario[19] == "No") {
        punteggi[19] = pesi[19];
    }
    dati.innerHTML += `<p> ${d19}: ${ris_questionario[19]} (${punteggi[19]}/${pesi[19]})</p>`;

    //Sei dislessico, discalculico, confondi la destra con la sinistra?
    let d20 = "Sei dislessico, discalculico, confondi la destra con la sinistra?";
    if (ris_questionario[20] != "") {
        dati.innerHTML += `<p> ${d20}: ${ris_questionario[20]} (${punteggi[20]}/${pesi[20]})</p>`;
    }
    //Punteggio non assegnato

    //Hai problemi mentali certificati (BPD, ADHD, autismo ecc...)?
    let d21 = "Hai problemi mentali certificati (BPD, ADHD, autismo ecc...)?";
    if (ris_questionario[21] == "No") {
        punteggi[21] = pesi[21];
    }
    dati.innerHTML += `<p> ${d21}: ${ris_questionario[21]} (${punteggi[21]}/${pesi[21]})</p>`;

    //Quali?
    let d22 = "Quali?";
    if(ris_questionario[22] != "") {
        dati.innerHTML += `<p> ${d22}: ${ris_questionario[22]} (${punteggi[22]}/${pesi[22]})</p>`;
    }
    //Punteggio non assegnato

    //Descrivi i tuoi hobby
    let d23 = "Descrivi i tuoi hobby";
    if (ris_questionario[23] != "") {
        punteggi[23] = pesi[23];
    }
    dati.innerHTML += `<p> ${d23}: ${ris_questionario[23]} (${punteggi[23]}/${pesi[23]})</p>`;

    //Ti piace la F1?
    let d24 = "Ti piace la F1?";
    if (ris_questionario[24] == "Sì" || ris_questionario == "Sni") {
        punteggi[24] = pesi[24];
    }
    dati.innerHTML += `<p> ${d24}: ${ris_questionario[24]} (${punteggi[24]}/${pesi[24]})</p>`;

    //Per chi tifi?
    let d25 = "Per chi tifi?";
    if(ris_questionario[25] != "") {
        dati.innerHTML += `<p> ${d25}: ${ris_questionario[25]} (${punteggi[25]}/${pesi[25]})</p>`;
    }
    //Punteggio non assegnato

    //Sei un maniaco del calcio?
    let d26 = "Sei un maniaco del calcio?";
    if (ris_questionario[26] == "No") {
        punteggi[26] = pesi[26];
    }
    dati.innerHTML += `<p> ${d26}: ${ris_questionario[26]} (${punteggi[26]}/${pesi[26]})</p>`;

    //Ti piace leccare la barbagianna?
    let d27 = "Ti piace leccare la barbagianna?";
    if (ris_questionario[27] == "Sì") {
        punteggi[27] = pesi[27];
    }
    dati.innerHTML += `<p> ${d27}: ${ris_questionario[27]} (${punteggi[27]}/${pesi[27]})</p>`;

    //Lo sai fare?
    let d28 = "Lo sai fare?";
    if (ris_questionario[28] == "Boia sì") {
        punteggi[28] = pesi[28];
    }
    dati.innerHTML += `<p> ${d28}: ${ris_questionario[28]} (${punteggi[28]}/${pesi[28]})</p>`;

    //Sei un maniaco di brawl stars?
    let d29 = "Sei un maniaco di brawl stars?";
    if (ris_questionario[29] == "No") {
        punteggi[29] = pesi[29];
    }
    dati.innerHTML += `<p> ${d29}: ${ris_questionario[29]} (${punteggi[29]}/${pesi[29]})</p>`;

    //Hai mai avuto una relazione?
    let d30 = "Hai mai avuto una relazione?";
    if (ris_questionario[30] == "Sì") {
        punteggi[30] = pesi[30];
    }
    dati.innerHTML += `<p> ${d30}: ${ris_questionario[30]} (${punteggi[30]}/${pesi[30]})</p>`;

    //Hai mai scopato?
    let d31 = "Hai mai scopato?";
    if (ris_questionario[31] == "Sì" || ris_questionario[31] == "Sì, mezzo mondo") {
        punteggi[31] = pesi[31];
    }
    dati.innerHTML += `<p> ${d31}: ${ris_questionario[31]} (${punteggi[31]}/${pesi[31]})</p>`;

    let punteggio = punteggi.reduce((a, b) => a + b, 0);
    document.getElementById('punteggio').innerText = Math.round(punteggio);
}
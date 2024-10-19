let ris_questionario;

let pesi = [0, 0, 5, 0, 5, 0, 0, 10, 7, 7, 8, 0, 10, 12, 12, 10, 2, 10, 0, 10, 20, 5, 0, 7, 0, 8, 5, 0, 7, 10, 0, 15, 10, 10]

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
    let punteggio = 0;

    document.getElementById('presentazione').innerText = "Ciao " + ris_questionario[1];
    //Hai entrambi i genitori?
    if (ris_questionario[2] == "Sì") {
        punteggio += pesi[2];
    }

    //Quale ti manca?
    //Punteggio non assegnato

    //Hai problemi con i tuoi genitori?
    if (ris_questionario[4] == "No") {
        punteggio += pesi[4];
    }

    //Con quale?
    //Punteggio non assegnato

    //Ho problemi perché...
    //Punteggio non assegnato

    //Hai pensieri sessuali con membri della tua famiglia?
    if (ris_questionario[7] == "No") {
        punteggio += pesi[7];
    }

    //Hai problemi nel controllo della rabbia?
    if (ris_questionario[8] == "No") {
        punteggio += pesi[8];
    } else if (ris_questionario[8] == "Sì, ma poco") {
        punteggio += pesi[8] / 2;
    }

    //Sei vegano o vegetariano?
    if (ris_questionario[9] == "Nessuno di questi") {
        punteggio += pesi[9];
    } else if (ris_questionario[9] == "Vegetariano") {
        punteggio += pesi[9]/2;
    } else {
        punteggio += pesi[9]/10;
    }

    //Hai traumi?
    if (ris_questionario[10] == "No") {
        punteggio += pesi[10];
    }

    //Quali pensi siano?
    //Punteggio non assegnato

    //Durante l'erezione del tuo fallo, esso pende orizzontalmente in qualche direzione?
    if (ris_questionario[12] == "No, è dritto") {
        punteggio += pesi[12];
    }

    //Sei segretamente attratto da persone del tuo stesso sesso?
    if (ris_questionario[13] == "No") { // TODO
        punteggio += pesi[13];
    } else {
        punteggio += pesi[13]/2;
    }

    //Quando limoni, fai l'aspirapolvere?
    if (ris_questionario[14] == "No" || ris_questionario[14] == "Non ho mai limonato") {
        punteggio += pesi[14];
    }

    //Hai moto o macchina?
    if (ris_questionario[15] == "Moto" || ris_questionario[15] == "Macchina") {
        punteggio += pesi[15]/2;
    } else if (ris_questionario[15] == "Macchina e moto") {
        punteggio += pesi[15];
    }

    //Puoi usarla/e?
    if (ris_questionario[16] == "Sì") {
        punteggio += pesi[16];
    }

    //Hai fetish?
    if (ris_questionario[17] == "Sono mentalmente aperto") {
        punteggio += pesi[17];
    } else if(ris_questionario[17] == "No") {
        punteggio += pesi[17]/2;
    } else {
        punteggio += pesi[17]/2;
    }

    //Quale/i?
    //Punteggio non assegnato

    //I tuoi genitori (o anche solo uno) ti chiamano ogni cinque secondi?
    if (ris_questionario[19] == "No") {
        punteggio += pesi[19];
    }

    //Sei maranza?
    if (ris_questionario[20] == "No") {
        punteggio += pesi[20];
    }

    //Hai problemi di pronuncia?
    if (ris_questionario[21] == "No") {
        punteggio += pesi[21];
    }

    //Sei dislessico, discalculico, confondi la destra con la sinistra?
    //Punteggio non assegnato

    //Hai problemi mentali certificati (BPD, ADHD, autismo ecc...)?
    if (ris_questionario[23] == "No") {
        punteggio += pesi[23];
    }

    //Quali?
    //Punteggio non assegnato

    //Descrivi i tuoi hobby
    if (ris_questionario[25] != "") {
        punteggio += pesi[25];
    }

    //Ti piace la F1?
    if (ris_questionario[26] == "Sì" || ris_questionario == "Sni") {
        punteggio += pesi[26];
    }

    //Per chi tifi?
    //Punteggio non assegnato

    //Sei un maniaco del calcio?
    if (ris_questionario[28] == "No") {
        punteggio += pesi[28];
    }

    //Ti piace leccare la barbagianna?
    if (ris_questionario[29] == "Sì") {
        punteggio += pesi[29];
    }

    //Lo sai fare?
    if (ris_questionario[30] == "Boia sì") {
        punteggio += pesi[30];
    }

    //Sei un maniaco di brawl stars?
    if (ris_questionario[31] == "No") {
        punteggio += pesi[31];
    }

    //Hai mai avuto una relazione?
    if (ris_questionario[32] == "Sì") {
        punteggio += pesi[32];
    }

    //Hai mai scopato?
    if (ris_questionario[33] == "Sì" || ris_questionario[33] == "Sì, mezzo mondo") {
        punteggio += pesi[33];
    }

    document.getElementById('punteggio').innerText = Math.round(punteggio);
}
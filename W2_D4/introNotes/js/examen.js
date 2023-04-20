var nom = document.getElementById('nom');
var activitat = document.getElementById('activitat');
var nota = document.getElementById('nota');

var nomError = document.getElementById('alerta-nom');
var activitatError = document.getElementById('alerta-activitat');
var notaError = document.getElementById('alerta-nota');

var taulaBody = document.getElementById('taula-body');

var notaAcumulada = 0;
var numNotes = 0;
var mitjana = 0;
var mitjanaError = document.getElementById('alerta-mitjana');


function enviarnota() {
    nom.classList.remove('error');
    activitat.classList.remove('error');
    nota.classList.remove('error');
    nomError.classList.add('amagat');
    activitatError.classList.add('amagat');
    notaError.classList.add('amagat');
    nom.disabled = false;


    if(nom.value != '') {
        nom.disabled = true;
        if(activitat.value == '') {
            activitat.classList.add('error');
            activitatError.classList.remove('amagat');
        }
        else if(nota.value == '') {
            nota.classList.add('error');
            notaError.classList.remove('amagat');
        } else {
            var filaNova = document.createElement('tr');
            filaNova.innerHTML = `
                <td>${activitat.value}</td>
                <td>${nota.value}</td>
            `;
            taulaBody.appendChild(filaNova);

            notaAcumulada += parseFloat(nota.value);
            numNotes ++;
            console.log("notaAcumulada: ", notaAcumulada);
            console.log("numNotes: ", numNotes);
        }
    } else {
        nom.classList.add('error');
        nomError.classList.remove('amagat');
    }
}

function calcularmitja() {
    mitjanaError.classList.add("amagat");

    if(numNotes != 0) {
        mitjana = notaAcumulada / numNotes;
        document.getElementById('mitjana').innerHTML = mitjana;
    } else {
        mitjanaError.classList.remove("amagat");
    }
}
/* DICHIARAZIONI E STAMPA IN CONSOLE DELLE VARIABILI */
let parola = prompt("Inserisci la parola che desideri")
console.log(parola)
let contrario = parola.split(``).reverse().join(``)
console.log(contrario)

/* CICLO IF PER CONTROLLARE SE LA PAROLA è PALINDROMA */
if (parola == contrario){
    console.log("La parola è palindroma")
    }else{
    console.log("La parola non è palindroma")
    }
/* FUNZIONE PER INVERTIRE LA PAROLA */
function palindroma(parola){
    if(parola === contrario){
        return "La parola è palindroma"
    }else
        return "La parola non è palindroma"
}

/* SCRIVIAMO SUL DOM IL RISULTATO DELLA FUNZIONE */
document.getElementById("funzione").innerHTML = palindroma(parola);



/* ESERCIZIO 2 */

/* DICHIARAZIONE VARIABILI */
let scelta_utente = prompt("Scegli se pari o dispari")

let n_utente = parseInt(prompt("Scegli un numero tra 1 e 5"))

let n_computer = Math.floor(Math.random()* 5) + 1;

const somma = n_utente + n_computer;

/* STAMPA IN CONSOLE DELLE VARIABILI */
console.log(n_utente, n_computer)
console.log(somma)

/* CONTROLLO SE IL RISULTATO DELLA FUNZIONE SUM CORRISPONDE ALLA SCELTA DELL'UTENTE */
if (sum(somma) == scelta_utente){
     console.log("Complimenti utente hai vinto")
    }else{
     console.log("Complimenti computer hai vinto")
}

/* FUNZIONE CHE GENERA NUMERO RANDOMICO */
function random(){
    return  Math.floor(Math.random()* 5) + 1;
}

/* FUNZIONE CHE CONTROLLA SE UN NUMERO è PARI O DISPARI */
function sum(numero){
    if (numero %2 == 0){
        return "pari"
    }
    return "dispari";
}


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
    if(parola == contrario){
        return "La parola è palindroma"
    }else
        return "La parola non è palindroma"
}

/* SCRIVIAMO SUL DOM IL RISULTATO DELLA FUNZIONE */
document.getElementById("funzione").innerHTML = palindroma(parola);

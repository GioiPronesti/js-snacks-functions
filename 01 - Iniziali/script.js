/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

console.log("es.1");

/*
funzione con array di nomi in ingresso e in ritorno avremo un nuovo array con dentro l'iniziali dei nomi per ogni indice. 

1 fare un ciclo che unisca le iniziali 
    controllare la prima lettera su ogni parola  dell'array  

    Se la lunghezza dell' array è maggiore di 0 e l'array è diverso da stringa vuota 

    allora prendiamo l'indice zero di ogni parola cioè (la prima lettera) e la aggiungiamo sull array nuovo. 

    ritorniamo l'array nuovo 

function startLettersnames(names) {

return letterNames[]      
//array di stringhe

}

*/

// Dichiara la funzione qui.

function firstLetter(arrayNames) {

  let letterNames = [];
  
  for (let i = 0; i < arrayNames.length; i++) {

    //console.log(i,arrayNames[i])
    const name = arrayNames[i]

    //console.log(name[0])
   letterNames.push(name[0])

  }
   //showLetters = console.log(letterNames)
   return letterNames

}
// Invoca la funzione qui e stampa il risultato in console

const result = firstLetter(names)
console.log(result)



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

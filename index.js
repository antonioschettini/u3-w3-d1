"use strict";
// 1) Quali sono i tipi primitivi principali in TypeScript?
// i tipi di dato primitivi principali sono: String, Numbers, boolean, null, undefined, any
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
const myName = "antonio";
const myAge = 32;
const stoStudiando = true;
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }
const greet = (name) => {
    return "Ciao " + name;
};
console.log(greet("Antonio"));
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {  return a + b }
const sum = (a, b) => {
    return a + b;
};
console.log(sum(10, 5));
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const calcolaIva = (prezzo) => {
    return prezzo * 1.22;
};
console.log(calcolaIva(20));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const lunghezzaTotale = (str1, str2) => {
    return (str1 + str2).length;
};
console.log(lunghezzaTotale("ciao", "ste"));
// 7) Cos'è un Type Union e come si scrive?
// una type union è un modo per assegnare ad una variabile più tipi di dato una sorta di variabile mista
let valore;
valore = 10;
console.log(valore);
// 8) Crea una variabile che possa contenere un numero, null o undefined.
let variabile;
variabile = 15;
console.log(variabile);
const lunedì = "Lunedì";
console.log(lunedì);
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
const numbers = [1, 2, 3];
const numbers2 = [1, 2, 3];
console.log(numbers, numbers2);
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const tupla = ["a", "b", "c", 1, 2];
console.log(tupla);
const classe = [{ nome: "Stefano", voto: 10 }];
// 17) Crea un oggetto che implementi l'interfaccia Auto.
const miaAuto = {
    marca: "Fiat",
    porte: 5,
};
console.log(miaAuto);

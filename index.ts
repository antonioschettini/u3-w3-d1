// 1) Quali sono i tipi primitivi principali in TypeScript?
// i tipi di dato primitivi principali sono: String, Numbers, boolean, null, undefined, any

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
const myName: string = "antonio";
const myAge: number = 32;
const stoStudiando: boolean = true;

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {  return "Ciao " + name }
const greet = (name: string) => {
  return "Ciao " + name;
};
console.log(greet("Antonio"));

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b: number) => {  return a + b }
const sum = (a: number, b: number): number => {
  return a + b;
};
console.log(sum(10, 5));

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const calcolaIva = (prezzo: number): number => {
  return prezzo * 1.22;
};
console.log(calcolaIva(20));

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const lunghezzaTotale = (str1: string, str2: string): number => {
  return (str1 + str2).length;
};
console.log(lunghezzaTotale("ciao", "ste"));

// 7) Cos'è un Type Union e come si scrive?
// una type union è un modo per assegnare ad una variabile più tipi di dato una sorta di variabile mista
let valore: number | string;
valore = 10;
console.log(valore);

// 8) Crea una variabile che possa contenere un numero, null o undefined.
let variabile: number | null | undefined;
variabile = 15;
console.log(variabile);

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type GiornoSettimana =
  | "Lunedì"
  | "Martedì"
  | "Mercoledì"
  | "Giovedì"
  | "Venerdì"
  | "Sabato"
  | "Domenica";

const lunedì: GiornoSettimana = "Lunedì";
console.log(lunedì);
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3]
const numbers: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];
console.log(numbers, numbers2);

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const tupla: [string, string, string, number, number] = ["a", "b", "c", 1, 2];
console.log(tupla);
// 12) Qual è la differenza tra type e interface?
// utilizzo interface per descrivere gli oggetti, il type lo utilizziamo per definire anche tuple o union
// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface Persona {
  fistname: string;
  lastname: string;
  age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface Utente {
  email: string;
  numbers?: string;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Studenti {
  nome: string;
  voto: number;
}
const classe: Studenti[] = [{ nome: "Stefano", voto: 10 }];

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Veicolo {
  marca: string;
}
interface Auto extends Veicolo {
  porte: number;
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.
const miaAuto: Auto = {
  marca: "Fiat",
  porte: 5,
};
console.log(miaAuto);

// 18) Cosa sono i Generics in TypeScript?
// i generics in typescript sono delle etichette vuote con dei placeholder che andremo ad assegnare successivamente

// 19) È possibile avere più tipi generici in un'interfaccia?
// si è possibile avere più generics in un interfaccia

// 20) Crea un'interfaccia generica per una risposta API.
interface RispostaApi<U, I, T, B> {
  userId: U;
  id: I;
  title: T;
  body: B;
}

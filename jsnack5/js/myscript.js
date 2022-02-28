/*SNACK 5*
 * 
   Crea un array vuoto.
   Chiedi per 6 volte all'utente di inserire un numero,
   se è dispari inseriscilo nell'array.
 * 
 */


const arrNum = [ ];
console.log (arrNum);
for (let i = 0; i < 6; i++) {
    const num = parseInt(prompt("Write a number"));
    if (num % 2 != 0) {
        arrNum.push(num);
    }
}


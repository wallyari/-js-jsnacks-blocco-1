/*SNACK 3*
 * 
   Il software deve chiedere per 10 volte all'utente di inserire un numero.
   Il programma stampa la somma di tutti i numeri inseriti.
 */

let arrNum = [ ];
for (let i = 0; i < 10; i++) {
    const num = parseInt(prompt("enter a number"));
    arrNum.push(num);
}
console.log(arrNum);
let sum = 0;
for (let i = 0; i < arrNum.length; i++) {
  sum = sum + arrNum[i];
}
alert(sum);
/*SNACK 1*
 * L'utente inserisce due numeri in successione, con due prompt.
    Il software stampa il maggiore.
 */


const num1 = parseInt(prompt("Insert a number 1"));
const num2 = parseInt(prompt("Insert number 2"));


if (num1 > num2){
    alert(num1);

}else if (num2 > num1){
    alert(num2);

}else{
    alert("equal numbers");
}  



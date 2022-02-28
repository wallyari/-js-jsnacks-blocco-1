/*SNACK 2*
 * 
L'utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
 */




const word1 = prompt("Write a word");
const word2 = prompt("Write another word");
if (word1.length > word2.length){
    alert(word1 + " " + word2);
} else if (word2.length > word1.length){
    alert(word1 + " " + word2);
}else {
    alert("They have the same length ");
}
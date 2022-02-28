
/*SNACK 4*
 *
  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 *
 */


const arrGuests = ['Gino', 'Andrea', 'Pino', 'Alessandro', 'Enrica', 'Annalisa', 'Michela'];
console.log(arrGuests);
const userName = prompt("Insert your name").toLowerCase().trim();
let found = false;
for (let i = 0; i < arrGuests.length; i++) {
    
    if(arrGuests[i] === userName){
        found = true;
    }
}
if (found) {
    console.log("You are in");        
}else{
    console.log("Get out");
}



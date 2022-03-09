let playerName = prompt("Indiquez votre nom");

const random = Math.floor(Math.random() * 100) + 1;


let playerNumber = prompt("Essayez de trouver le chiffre entre 1 et 100");

// if (parseInt(playerNumber) > random){
//     console.log("It is less");
// }else if (parseInt(playerNumber) < random {
//     console.log("It is more");
// } else {
//     console.log(`${playerName} wins`);
// }


do {
    if (parseInt(playerNumber) > random){
        //console.log("It is less");
        playerNumber = prompt("It is less, try again");
    }else  if (parseInt(playerNumber) < random){
        playerNumber = prompt("It is more, try again");
    } 
  } while (parseInt(playerNumber) !== random);
  
  console.log(`${playerName} wins`);
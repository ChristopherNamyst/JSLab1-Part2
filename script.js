var player1 = 40; //declaring a variable for player start points
var grantChirpus = 10; // declaring a variable for Grant Chirpus start points 



startGame(); //calls starGame function

function startGame() {
    var greeting = prompt("Hello, Would You Like To Play a Game? Please Enter 1 for YES and 2 for NO.");
    if (greeting === "1") {
        var userName = prompt("OK. Please Type Your Name").toUpperCase();
        var startGreeting = prompt("Thanks " + userName + " !! To Start, Please Press ENTER.");

    } else {
        console.log("Ok, have a nice day......");
    }
}

startCombat(); //calls startCombat function

function startCombat() {
    var choice = prompt("Would you like to ATTACK or Quit?");
    if (choice === "attack") {

        getDamage(); // calls getDamage function

        function getDamage() {
            grantChirpus -= (Math.floor(Math.random() * 5) + 1);
            player1 -= (Math.floor(Math.random() * 5) + 1);
            console.log("The Chirpinator's Score is " + grantChirpus);
            console.log("Your Score is " + player1);
        }

    }
    if (choice === "quit") { // your a quitter message is logged if user chooses quit
        console.log("OK Quitter. Foolishness is giving up without any effort or not giving up after putting in all your effort. Secret of freedom is putting all your effort and giving up!.");
    }



}

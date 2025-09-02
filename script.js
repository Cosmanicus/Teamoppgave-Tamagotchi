// Pet's stats
let Hp = 100;
let Hunger = 100;
let Happiness = 100;

// Simple check to see if the game is loaded for the first time
let tutorialMessageHealth = 0;
let tutorialMessageFood = 0;
let tutorialMessageHappiness = 0;

// Using this for cleaner code
const healthMessageBoard = document.getElementById('healthMessageBoard');
const foodMessageBoard = document.getElementById('foodMessageBoard');
const happyMessageBoard = document.getElementById('happyMessageBoard');


function statsUpdate() {

    // Hp
    if (Hp === 100 && tutorialMessageHealth !== 0) {
        healthMessageBoard.innerHTML = `Your pet is completely healthy!`;
        
    }
    else if (Hp < 50 && Hp > 20) {
        healthMessageBoard.innerHTML = `Your pet is sick! Please tend to its health.`;
    }
    else if (Hp < 20)  {
        healthMessageBoard.innerHTML = `Tend to your pet's health now or it will lose Hp!`;
    }
    else if (Hp <= 0) {
        alert("Your pet died. the game will now restart")
        location.reload();
    }

    // Hunger
    if (Hunger >= 100 && tutorialMessageFood !== 0) {
        foodMessageBoard.innerHTML = `Your pet is well fed! Maybe hold off on the biscuits though.`;
    }
    else if (Hunger < 50 && Hunger > 20) {
        foodMessageBoard.innerHTML = `Your pet is getting hungry!`;
    }
    else if (Hunger < 20) {
        foodMessageBoard.innerHTML = `Your pet is dangerously hungry! Bring on the biscuits!`;
    }

    // Happiness
    if (Happiness >= 100 && tutorialMessageHappiness !== 0) {
        healthMessageBoard.innerHTML = `Your pet is ecstatic!`;
    }
    else if (Happiness < 50 && Happiness > 20) {
        happyMessageBoard.innerHTML = `Your pet is sad! Happiness level ${Happiness}`;
    }
    else if ( Happiness < 20) {
        happyMessageBoard.innerHTML = `Your cat is extremely sad!`;
    }

}

statsUpdate();

function intervalHealth() {
    if (Hunger >= 100 && Happiness > 40) {
        Hp += 5;
    }
    else if (Hunger < 50 && Hunger > 20 && Happiness > 30) {
        Hp += 2;
    }
    else if (Hunger < 0) {
        Hp -= 10;
    }
}

function intervalHunger() {
    Hunger -= 2;
}
function intervalHappiness() {
    if (recentlyPlayed == false) {
        Happiness -= 5;
    }
    else {
        Happiness += 2;
    }
}

function playedBuff() {
    recentlyPlayed = false;
}



// Husk setTimeout(playedBuff, 5000);  
// og setInterval()
// for hver av intervalfunksjonene jeg skrev oppe ( intervalHunger() etc. ),

// La statsUpdate ligge nederst / mot bunnen av hver function
function giveFood() {
    statsUpdate();
}

function pet(){
    statsUpdate();
}


function play(){
    setTimeout(playedBuff(), 5000);
    recentlyPlayed = true;
    statsUpdate();
}
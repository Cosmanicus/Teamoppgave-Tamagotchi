// Pet's stats
let Hp = 100;
let Hunger = 50;
let Happiness = 100;

// Simple check to see if the game is loaded for the first time
let tutorialMessageHealth = 0;
let tutorialMessageFood = 0;
let tutorialMessageHappiness = 0;

function statsUpdate() {

    // Hp
    if (Hp === 100 && tutorialMessageHealth !== 0) {
        document.getElementById('healthMessageBoard').innerHTML = `Your pet is completely healthy!`;
        
    }
    else if (Hp < 50 && Hp > 20) {
        document.getElementById('healthMessageBoard').innerHTML = `Your pet is sick! Please tend to its health.`;
    }
    else if (Hp < 20)  {
        document.getElementById('healthMessageBoard').innerHTML = `Tend to your pet's health now or it will lose Hp!`;
    }
    else if (Hp <= 0) {
        alert("Your pet died. the game will now restart")
        location.reload();
    }

    // Hunger
    if (Hunger >= 100 && tutorialMessageFood !== 0) {
        document.getElementById('foodMessageBoard').innerHTML = `Your pet is well fed! Maybe hold off on the biscuits though.`;
    }
    else if (Hunger < 50 && Hunger > 20) {
        document.getElementById('foodMessageBoard').innerHTML = `Your pet is getting hungry!`;
    }
    else if (Hunger < 20) {
        document.getElementById('foodMessageBoard').innerHTML = `Your pet is dangerously hungry! Bring on the biscuits!`;
    }

    // Happiness
    if (Happiness >= 100 && tutorialMessageHappiness !== 0) {
        document.getElementById('happyMessageBoard').innerHTML = `Your pet is ecstatic!`;
    }
    else if (Happiness < 50 && Happiness > 20) {
        document.getElementById('happyMessageBoard').innerHTML = `Your pet is sad! Playtime!`;
    }
    else if ( Happiness < 20) {
        document.getElementById('happyMessageBoard').innerHTML = `Your cat is extremely sad!`;
    }

}

statsUpdate();
intervalHealth();
intervalHunger();
notPlaying();

function intervalHealth() {
    setInterval(() => {
        if (Hunger >= 100 && Happiness > 40 && Hp < 100) {
            Hp += 5;
        }
        else if (Hunger < 50 && Hunger > 20 && Happiness > 30 && Hp < 100) {
            Hp += 2;
        }
        else if (Hunger < 0) {
            Hp -= 10;
        }
        console.log('health: ' + Hp)
        statsUpdate();
    }, 1000);
}

function intervalHunger() {
    setInterval(() => {
        Hunger -= 2
        console.log('Hunger: ' + Hunger)
        statsUpdate();
    }, 1000);
}

function notPlaying() {
    clearInterval(playedbuff);

    let notplayingdebuff = setInterval(() => {
        Happiness -= 2;

        console.log('Happiness' + Happiness)

        statsUpdate();
    }, 2000);

}

// Knappfunksjoner
function pet(){
    Purr();
    if (Happiness < 100) {
        Happiness += 10;
    }
    
    statsUpdate();
}

function playwithcat(){
    MeowMeow();
    Happiness += 20;
    
    clearInterval(notplayingdebuff);
    let playedbuff = setInterval(() => {
        Happiness += 2;
    }, 1000);
    setTimeout(notPlaying(), 5000);

    notPlaying();
    statsUpdate();
}

function giveFood() {
    Hunger += 20;
    statsUpdate();
}

let bgf = -1;
let bgfnatt = -2;

function sleepOrWakeUp(){
    document.getElementById('bgf').style.zIndex = -2;
    document.getElementById('bgfnatt').style.zIndex -1;

    setTimeout(() => {
        document.getElementById('bgf').style.zIndex = -1;
    }, 5000);

    setTimeout(() => {
        document.getElementById('bgfnatt').style.zIndex -2;
    }, 5000);
}

function changeClothes(clothing) {
    const clothingchange = document.getElementById(clothing)
}





 //musikk funkjoner//
        function PlayMusic() {
            let music = document.getElementById('musikk');
            music.volume = 0.2;
            music.play();
        }

        function MuteSounds() {
            let music = document.getElementById('musikk');
            music.volume = 0.0;
            music.pause();
        }

        function Purr() {
            let purr = document.getElementById('catPurr');
            purr.play();
        }
        
        function MeowMeow() {
            let meeeeow = document.getElementById('meow');
            meeeeow.volume = 0.3;
            meeeeow.play();
        }

        function ZzZ() {
            let snork = document.getElementById('Sleeping');
            snork.play();
        }

        function stopZzZ() {
            let snork = document.getElementById('Sleeping');
            snork.pause();
            snork.currentTime = 0;
        }
        //musikk funkjoner slutt//

      
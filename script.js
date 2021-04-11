const buttonRandom = document.querySelector('.button');
const player1 = {
    player: 1,
    name: "scorpion",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ['sword', 'hammer', 'bow', 'NeoArmstrongCycloneJetArmstrongCannon'],
    attack: function () {
        console.log( this.name+" Fight..." )
    }
};

const player2 = {
    player: 2,
    name: "kitana",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ['sword', 'hammer', 'bow', 'NeoArmstrongCycloneJetArmstrongCannon'],
    attack: function () {
        console.log( this.name+" Fight..." )
    }
};

let loser;


function createPlayer(playerObject) {
    let playerDiv = document.createElement('div');
    let characterDiv = document.createElement('div');
    let progressbarDiv = document.createElement('div');
    let lifeDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    let playerImg = document.createElement('img');

    playerDiv.setAttribute('class', `player${playerObject.player}` );
    progressbarDiv.setAttribute('class', 'progressbar' );
    characterDiv.setAttribute('class', 'character' );
    lifeDiv.setAttribute('class', 'life');
    lifeDiv.setAttribute('style', `width: ${playerObject.hp}%`);
    nameDiv.setAttribute('class', 'name' );
    playerImg.setAttribute('src', playerObject.img );

    nameDiv.innerText = playerObject.name;

    playerDiv.append(characterDiv);
    playerDiv.append(progressbarDiv);

    progressbarDiv.append(lifeDiv);
    progressbarDiv.append(nameDiv);

    characterDiv.append(playerImg);

    document.querySelector('.arenas').appendChild(playerDiv);

}

function hit() {
    return (Math.random()*20).toFixed();
}

function battle(playerObject){
    let playerN = document.querySelector('.player' + playerObject.player+' .life');
    playerObject.hp -= hit();
    if (playerObject.hp <= 0){
        playerObject.hp = 0;
        loser = playerObject.name;
        buttonRandom.setAttribute('disabled','true');
    }
    playerN.style.width = playerObject.hp+'%';

}

function whoLoser(player1, player2) {
    let lostTitleDiv = document.createElement('div')
    lostTitleDiv.setAttribute('class', 'loseTitle');

    if (player1.hp == 0 && player2.hp == 0) {
        lostTitleDiv.innerText = 'No Winner';
    } else if (player1.hp == 0) {
        lostTitleDiv.innerText = 'Win '+player2.name ;
    } else if (player2.hp == 0){
        lostTitleDiv.innerText = 'Win '+player1.name ;
    }
    document.querySelector('.arenas').appendChild(lostTitleDiv);
}

buttonRandom.addEventListener('click', function () {
    battle(player1);
    battle(player2);
    whoLoser(player1, player2)
})

createPlayer(player1);
createPlayer(player2);


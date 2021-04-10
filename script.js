const scorpion = {
    name: "scorpion",
    hp: 50,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ['sword', 'hammer', 'bow', 'NeoArmstrongCycloneJetArmstrongCannon'],
    attack: function () {
        console.log( this.name+" Fight..." )
    }
};

const kitana = {
    name: "kitana",
    hp: 80,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ['sword', 'hammer', 'bow', 'NeoArmstrongCycloneJetArmstrongCannon'],
    attack: function () {
        console.log( this.name+" Fight..." )
    }
};

function createPlayer(playerN, playerObject ) {
    let player1Div = document.createElement('div');
    let characterDiv = document.createElement('div');
    let progressbarDiv = document.createElement('div');
    let lifeDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    let playerImg = document.createElement('img');

    player1Div.setAttribute('class', 'player1' );
    progressbarDiv.setAttribute('class', 'progressbar' );
    characterDiv.setAttribute('class', 'character' );
    lifeDiv.setAttribute('class', 'life');
    lifeDiv.setAttribute('style', `width: ${playerObject.hp}%`);
    nameDiv.setAttribute('class', 'name' );
    playerImg.setAttribute('src', playerObject.img );

    player1Div.append(characterDiv);
    player1Div.append(progressbarDiv);

    progressbarDiv.append(lifeDiv);
    progressbarDiv.append(nameDiv);

    characterDiv.append(playerImg);

    nameDiv.innerText = playerObject.name;

   document.querySelector('.arenas').appendChild(player1Div);
}

createPlayer('player1', scorpion);
createPlayer('player2', kitana);

/**
 * Created by UR92 on 29/09/2015.
 */
var weapons= ["paper", "scissors", "rock"];

// user class
function User(_name,_message, _weapon) {
    this.name = _name;
    this.weapon = 1;
    this.winMessage=_message;

    if (typeof (_weapon) == "string")
        this.weapon = weapons.indexOf(_weapon);
    else
        this.weapon = Math.floor(Math.random() * 3);
}

// get weapon choices
var userChoice = prompt("Do you choose rock, paper or scissors?");

// define users
var players= [
    new User('user', 'User won, he ', userChoice),
    new User('computer', 'Computer won, he ', 0),
    new User('tie', 'Nobody won, both of you ', userChoice)
];

// get the winner
var whoWon = (players[0].weapon - players[1].weapon + 2) % 3;
alert(players[whoWon].winMessage+ 'played with '+ weapons[players[whoWon].weapon]);


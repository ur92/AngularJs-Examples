/**
 * Created by UR92 on 29/09/2015.
 */

var userChoice = prompt("Do you choose rock, paper or scissors?");
var userChoiceNum = 1;

switch (userChoice) {
    case "paper":
        userChoiceNum = 1;
        break;
    case "scissors":
        userChoiceNum = 2;
        break;
    case "rock":
        userChoiceNum = 3;
        break;
}

if (userChoiceNum > computerChoice) {
    alertWithMessage('user', userChoice);
}
else if (userChoiceNum < computerChoice) {
    alertWithMessage('computer', getWeapon(computerChoice));
}
else {
    alertWithMessage('even', userChoice);
}

function alertWithMessage(whoWon, weapon) {
    if (whoWon !== 'even')
        alert('player ' + whoWon + ' won, he played with ' + weapon);
    else
        alert('nobody won, both players played with ' + weapon);
}

function getWeapon(weaponNum) {
    switch (weaponNum) {
        case 1:
            return "paper";
        case 2:
            return "scissors";
        case 3:
            return "rock";
    }
}
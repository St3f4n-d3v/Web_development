let pogingen = 5;



let newName = prompt('Welcome, what is your name? If you leave it blank, I will give you a name.');
if (!newName) {
    newName = 'Exotic Butter';
}

const hello = alert('Hello, ' + newName + '.');



let inputMinimum = prompt('Type the minimum number.');


let inputMaximum = prompt('Type the maximum number.');

let minimum = inputMinimum;
let maximum = inputMaximum;

const tries = alert("You have 5 tries to beat the game.");



const getRandomDigit = function (minimum, maximum) {
    let min = Math.ceil(minimum);
    let max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min) + min);
};

const pasokon = getRandomDigit(minimum, maximum);


while (pogingen > 0) {
    let cijfer = prompt('Choose a number between ' + minimum + ' and ' + maximum + '.');
    cijfer = parseInt(cijfer);

    if (cijfer === pasokon) {
        alert('Congrats! You guessed it!');
        pogingen = 0;

    } else {
        alert('Unfortunately, that is not correct.');
        pogingen--;
        if (pogingen > 0) {
            alert('only ' + pogingen + ' left.');
        } else {
            alert('You are out of tries. Too bad. The correct number was ' + pasokon + '.');
        }
    }
}

alert('Goodbye ' + newName + '! See you next time!');
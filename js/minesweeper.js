console.log( 'connected....')

let minesweeper = [
    ['O', 'O', 'O'],
    ['X', 'O', 'O',],
    ['O', 'O', 'O'],
];

let userGuesses = [

]

let userRow = prompt ('What row do you think the mine is in?? Guess 0, 1, or 2! You have 3 guesses!');
let userCol = prompt ('What column do you think the mine is in?? Guess 0, 1, or 2! You have 3 guesses!');

for (i = 2; i > 0; i--) {
    if ( minesweeper[userRow][userCol] === minesweeper [1][0] ) {
        alert ('You found the mine! Great job!')
        break
    }
    else {
        userRow = prompt (`What row do you think the mine is in?? Guess 0, 1, or 2! You have ${i} guesses left.`);
        userCol = prompt (`What column do you think the mine is in?? Guess 0, 1 , or 2! You have ${i} guesses left.`);
    }
}
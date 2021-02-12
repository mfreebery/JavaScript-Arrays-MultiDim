console.log( 'connected....')

let minesweeper = [
    ['O', 'O', 'O'],
    ['X', 'O', 'O',],
    ['O', 'O', 'O'],
];

let userRow = prompt ('What row do you think the mine is in?? Guess between 0 and 2!');
let userCol = prompt ('What column do you think the mine is in?? Guess between 0 and 2!');

for (i = 0; i < 4; i++) {
    if ( minesweeper[userRow][userCol] === minesweeper [1][0] ) {
        alert ('You found the mine! Great job!')
    }
    else {
        userRow = prompt ('What row do you think the mine is in?? Guess between 0 and 2!');
        userCol = prompt ('What column do you think the mine is in?? Guess between 0 and 2!');
    }
   
}
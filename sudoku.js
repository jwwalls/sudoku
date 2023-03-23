
const NINE = 9;
const THREE = 3;


function getRow (grid, row) {
    let result = [];
    for (let i = 0; i < NINE; i++) {
        result.push(grid[row][i]);
        console.log(grid[row][i]);
    }
    return result;
}              
function getColumn (grid, column) {
    let result = [];
    for (let i = 0; i < NINE; i++) {
        result.push(grid[i][column]);
    }
    return result;
}   
function getSection (grid, section_x, section_y) {
    section_x = section_x * THREE;
    section_y = section_y * THREE;
    
    let result = [];

    for (let i = 0; i < THREE; i++) {
        for (let j = 0; j < THREE; j++) {
            result.push(grid[section_x][section_y + j ]);
        }
        section_x += 1;
    }
    return result;
} 

function includes1to9 (set) {
    let count = 0;
    for (let i = 0; i < NINE; i++) {
        if (set.includes(i+1)) {
            count++;
           
        }
    }
    if (count === NINE) {
        return true;
    }else{
        return false;
    }
}

function sudokuIsValid(puzzle){
    let correctRows = 0;
    let correctColumns = 0;
    let correctSections = 0;
    for (let i = 0; i < NINE; i++) {
        if(includes1to9(getRow(puzzle, i))){
            correctRows++;    
        }
    }

    for (let j = 0; j < NINE; j++) {
        if(includes1to9(getColumn(puzzle, j))){
            correctColumns++;
            console.log(correctColumns);      
        }
    }

    for (let k = 0; k < THREE; k++) {
        for (let l = 0; l < THREE; l++) {
            if(includes1to9(getSection(puzzle, k, l))){
                correctSections++;    
            }
        }
    }


    if (correctRows === NINE && correctColumns === NINE && correctSections === NINE) {
        return true;
    }else{
        return false;
    }
}

function isSame(puzzle, puzzle2){
    let correctRows = 0;
    let correctItems = 0;
    let correctColumns = 0;
    let correctSections = 0;
    for (let i = 0; i < NINE; i++) {
        for(let j = 0; j < NINE; j++){
            if(puzzle[i][j] === puzzle2[i][j]){
                correctItems++;    
            }

           
        }
        if (correctItems === NINE) {
            correctRows++;
        }
        correctItems = 0;
      
    }

    for (let l = 0; l < NINE; l++) {
        for (let m = 0; m < NINE; m++) {
            if (puzzle[l][m] === puzzle2[l][m]) {
                correctItems++;
            }
        }
        if (correctItems === NINE) {
            correctColumns++;
        }
        correctItems = 0;
  

    }

    for (let k = 0; k < THREE; k++) {
        for (let l = 0; l < THREE; l++) {
            if(getSection(puzzle, k, l).toString() === getSection(puzzle2, k, l).toString()){
                correctSections++;    
                
            }
        }
    }

    
    if (correctRows === NINE && correctColumns === NINE && correctSections === NINE) {
        return true;
    }else{
        return false;
    }
}



let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 2,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

let puzzleCopy = [[ 8,9,5,7,4,2,1,3,6 ],
                  [ 2,7,1,9,6,3,4,8,5 ],
                  [ 4,6,3,5,8,1,7,9,2 ],
                  [ 9,3,4,6,1,7,2,5,8 ],
                  [ 5,1,7,2,3,8,9,6,4 ],
                  [ 6,8,2,4,5,9,3,7,1 ],
                  [ 1,5,9,8,7,4,6,2,3 ],
                  [ 7,4,6,3,2,5,8,1,9 ],
                  [ 3,2,8,1,9,6,5,4,7 ]];

let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
              [ 8,7,1,9,6,3,4,8,5 ],
              [ 4,6,3,5,8,1,7,9,2 ],
              [ 9,3,4,6,1,7,2,5,8 ],
              [ 5,1,7,2,3,8,9,6,4 ],
              [ 6,8,2,4,5,9,3,7,1 ],
              [ 1,5,9,8,7,4,6,2,3 ],
              [ 7,4,6,3,2,5,8,1,9 ],
              [ 3,2,8,1,9,6,5,4,7 ]];

console.log(isSame(puzzle, p8zzle));
// => false

console.log(isSame(puzzle, puzzleCopy));
// => true












// let puzzle = [[ 8,9,5,7,4,2,1,3,6 ],
//               [ 8,7,1,9,6,3,4,8,5 ],
//               [ 4,6,3,5,8,1,7,9,2 ],
//               [ 9,3,4,6,1,7,2,5,8 ],
//               [ 5,1,7,2,3,8,9,6,4 ],
//               [ 6,8,2,4,5,9,3,7,1 ],
//               [ 1,5,9,8,7,4,6,2,3 ],
//               [ 7,4,6,3,2,5,8,1,9 ],
//               [ 3,2,8,1,9,6,5,4,7 ]];



// console.log(sudokuIsValid(puzzle));






//console.log(includes1to9([1,2,3,4,5,6,7,8,9])); // => true
//console.log(includes1to9([1,1,2,3,4,5,6,7,8])); // => false (no 9)




//console.log(getRow(puzzle, 8));
// -> [ 3,2,8,1,9,6,5,4,7 ]

getRow(puzzle, 0);
// -> [ 8,9,5,7,4,2,1,3,6 ]

//console.log(getColumn(puzzle, 0));
// -> [ 8,2,4,9,5,6,1,7,3 ]

getColumn(puzzle, 8);
// -> [ 6,5,2,8,4,1,3,9,7 ]

//console.log(getSection(puzzle, 0, 0));
// -> [ 8,9,5,2,7,1,4,6,3 ]

// This grabs the values from column 0 and row 1 (second from the top left)
//console.log(getSection(puzzle, 0,1));
// -> [ 7,4,2,9,6,3,5,8,1 ]
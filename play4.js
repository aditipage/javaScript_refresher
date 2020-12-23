const random = {
    name : 'aditi',
    n : 5,
    isGirl: true,
    squareNum : function(){
        console.log((this.n)*(this.n))
    } 

};

console.log(random.squareNum());

const randomArrays = ["a string", 9, ["another string", "one more string"]];

// copying array 2 using ... which can work with 
// any data structure [spread operator]
let copiedArray3 = [...randomArrays]
console.log(copiedArray3);

let copiedRandom = {...random};
console.log(copiedRandom);

// using rest operator
const toArr = (...args) => {
    return args;
}

console.log(toArr(2,4,6,7));
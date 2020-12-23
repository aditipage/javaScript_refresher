let n = 7;

const random = {
    name : 'aditi',
    n : 5,
    isGirl: true,
    squareNum : function(){
        console.log((this.n)*(this.n))
    } 

};

console.log(random);
console.log(random.name);
console.log(random.squareNum());

// arrays can store different data types
const randomArrays = ["a string", 9, ["another string", "one more string"]];
for(let r of randomArrays){
    console.log(r);
}

let rand2 = [1, 2, 3];

let arr3 = randomArrays.concat(rand2);
console.log(arr3.indexOf(2));

// using map
console.log(arr3.map(randEle => "key: " + randEle))

// will add a new elemt despite it being const
randomArrays.push("HEYY");
console.log(randomArrays);

// copying array
let copiedArray = randomArrays.slice()
console.log(copiedArray);

// wrong copying technique
let copiedArray2 = [randomArrays];
console.log(copiedArray2);

// copying array 2 using ... which can work with 
// any data structure
let copiedArray3 = [...randomArrays]
console.log(copiedArray3);

let copiedRandom = {...random};
console.log(copiedRandom);
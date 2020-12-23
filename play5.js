const random = {
    name : 'aditi',
    n : 5,
    isGirl: true,
    squareNum : function(){
        console.log((this.n)*(this.n))
    } 

};

let func1 = (randData) => {
    console.log(randData.name)
}

func1(random);

// object destructuring
let func2 = ({name}) => {
    console.log(name);
}

func2(random);

const {name, isGirl} = random;
console.log(name, isGirl);

// destructuring arrays
const randomArrays = ["a string", 9, ["another string", "one more string"]];
const [str1, num] = randomArrays;
console.log(str1, num);
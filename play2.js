// anonymous function stored in const var 
// as unique identifier
const func1 = function (k){
    return k*k;
}

// can pass parameter using the const var
console.log(func1(10));

// Arrow func
const func2 = (k) => {
    return k*k;
}

// can pass parameter using the const var
console.log(func2(100));

// if only return statement is present in the func
const add = (m, n) => m+n;

// can pass parameter using the const var
console.log(add(25, 35));

// no paranthesis for just one parameter (optional)
const addOne = a => a+1;

// can pass parameter using the const var
console.log(addOne(19999));

// 1 () if zero parameters
const multiplyRandom = () => 8*9;

// can pass parameter using the const var
console.log(multiplyRandom());
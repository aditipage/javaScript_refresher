// async
const fetchData = callback => {
    setTimeout(() => {
        callback('Done');
    }, 1500);
}


setTimeout(() => {
    console.log("inside set timeout");
    fetchData(text => {
        console.log(text);
    })
}, 2000);

console.log("HEYY");
console.log("BYEE");

// promise
const fetchData2 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done finally');
        }, 1500);
    });
    return promise;
};

setTimeout(() => {
    console.log("inside set timeout 2");
    fetchData2().then(text => {
        console.log(text);
        return fetchData2();
    })
    .then(text2 => {
        console.log(text2);

    })
}, 2000);
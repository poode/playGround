// const { a } = require ('./async-programming');
// console.log(a);

const fun = (str, ms, cb1, cb2) => {
    setTimeout(() => {
        try {
            cb1(str);
        } catch (error) {
            cb2(error);
        }
    }, ms);
};

const p1 = new Promise ((resolve, rejected)=>{

    fun('First Promise', 1000, resolve, rejected);
});

const p2 = new Promise ((resolve, rejected)=>{
    fun('Second Promise', 5000, resolve, rejected);
});

// first element in array will be the first result that will be appeared 
Promise.all([p2,p1])
    .then(result => console.log(result))
    .catch(error => console.log(error));

// first result will be the first that will be appeared and ignore other promise 
Promise.race([p2,p1])
    .then(result => console.log(result))
    .catch(error => console.log(error));
const findTheOldest = function (arr) {
    return arr.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();
        const personDeath = person.yearOfDeath || currentYear;
        const currentAge = personDeath - person.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        return currentAge > oldestAge ? person : oldest;
    }, arr[0]);

};

const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
]
console.log(findTheOldest(people));

function total(arr) {
    // your code here
    const sum = arr.reduce((acc, num) => acc + num, 0);

    return sum;
}

console.log(total([1, 2, 3])); // 6

function stringConcat(arr) {
    // your code here 
    const numStr = arr.reduce((acc, num) => acc.concat(num), "");
    return numStr;
}

console.log(stringConcat([1, 2, 3])); // "123"

function totalVotes(arr) {
    // your code here    
    const votedCount = arr.reduce((acc, ob) => {
        if (ob.voted === true) {
            acc++;
        }
        return acc;
    }, 0);
    return votedCount;
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters)); // 7

function shoppingSpree(arr) {
    // your code here    
    const total = arr.reduce((acc, ob) => {
        acc += ob.price;
        return acc;
    }, 0);
    return total;
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

function flatten(arr) {
    // your code here    
    return arr.reduce((acc, array) => acc.concat(array),[]);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


// Do not edit below this line
module.exports = findTheOldest;

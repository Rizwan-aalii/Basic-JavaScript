// const numbers = [1, 2, 3];
// const squared = numbers.map((num) => num * num);
// console.log(squared); // Output: [1, 4, 9]

// const numbers = [1, 2, 3];
// numbers.map((num) => num);
// console.log(numbers); // Output: [1, 2, 3]


const user = {
    name : "rizwan",
    age : 22,
    city : "Jodhpur",
    country : "India",
    state : "Rajasthan"
}
console.log(user)
const {name, age, city} = user;//
console.log(name, age, city)

const harrypotter = {
    name : "harry",
    age : 22,
    city : "london",
    country : "england",
    state : "london"
}
console.log(harrypotter)
const {name : n, age : a, city : c} = harrypotter
console.log(n, a, c)
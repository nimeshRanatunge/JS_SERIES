const namez = 'nimesh';
const age = 26;

const hello = (`my name is ${namez} and I am ${age} years old`);
const text = `hello, how ,are ,you, `

console.warn(hello);

console.log(hello.length)
console.log(hello.substring(0,4));

//search for things seperated by space 
console.log(hello.split(''));
//search for things seperated by comma
console.log(text.split(','));


const person = {
    firstname: 'nimesh',
    age: 26
}
console.log(person.age)

// pulling out object literals, es6 destructuring
const { firstname } = person;

console.log(firstname)
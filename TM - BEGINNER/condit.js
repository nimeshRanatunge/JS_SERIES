const x = 10;
// == only consider value. string '10' matches with int 10 but
// === matches datatype

const addnums = (num1, num2) => num1 + num2;
console.log(addnums(2,3))


//Constructor
function Person(fn, ln, dob){
    this.fn = fn;
    this.ln = ln;
    this.dob = new Date(dob);

    this.fullname = () => `${this.fn} ${this.ln}`;
}

Person.prototype.getYearOnly = function() {
   return(this.dob.getFullYear());
}

const per1 = new Person('jonny', 'depp', '1996-10-24');
const per2 = new Person('Nimesh', 'thisara', '2002-02-03');

console.log(per1.dob.getFullYear());
console.log(per1.fullname());
console.log(per1);

console.log(per2.getYearOnly());
console.log(per2);



console.log
//constr
function Teacher(fn, ln, age, salary, isdegreeholder, dob){
    this.fn = fn;
    this.ln = ln;
    this.age = age;
    this.salary = salary;
    this.isdegreeholder = isdegreeholder;
    this.dob = new Date(dob);

    this.fullyr = () => this.dob.getFullYear();
}

Teacher.prototype.getFulname = function(){
    return `My name is ${this.fn} ${this.ln}`;
};

const t1 = new Teacher('lakmal', 'perera', 45, 67000, true, '1967-12-20');
console.log(t1.fullyr());
console.log(t1.getFulname());
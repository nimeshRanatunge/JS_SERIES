//high order array methods
// forEach map filter

const company = [
    {
        userId: 1,
        position: 'Manager',
        salary: 12000,
        married: true
    },
    {
        userId: 2,
        position: 'Auditor',
        salary: 2,
        married: false
    },
    {
        userId: 3,
        position: 'Marketing',
        salary: 5,
        married: false
    },
    {
        userId: 4,
        position: 'Accountant',
        salary: 4000,
        married: true
    }
];

company.forEach((i)=>{
    console.log(i.salary)
});

//assign to a new array
const positions = company.map((i)=>{
    return i.position;
});

console.log(positions);

const marriedones = company.filter((i)=>{
    return i.married === true;
});

console.log(marriedones); //returns array of objects
console.log(marriedones[0].position);

marriedones.forEach((x)=>{
    console.log(x.salary);
});

//more functional

const marriedones_positions = company.filter((i)=>{
    return i.married === true;
}).map((i)=>{
    console.log(i.position);
})
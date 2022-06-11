const todos = [
    {
        id: 1,
        work: 'Brush teeth',
        isCompleted: true
    },
    {
        id: 1,
        work: 'Reading books',
        isCompleted: true
    },
    {
        id: 1,
        work: 'gardning',
        isCompleted: false
    }

];

console.log(todos[1].work);
console.log(todos[2].isCompleted);

// convert to json
const todoJson = JSON.stringify(todos);
console.log(todoJson);

// for loop
for (let i = 0; i < todos.length; i++) {
        console.log(`work : ${todos[i].work}`);
    }

for (let i of todos){
    console.log(i.work)
};




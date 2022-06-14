// single
let x = document.querySelectorAll('.item');

console.log(x);

x.forEach((item)=>{
    console.log(item);
});

//change
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'hello';
ul.children[2].innerText = 'xyz';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'

const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// btn.addEventListener('click', (e)=>{
//     e.preventDefault();
//     console.log('xxxxxxxxxx')
// })

// const lk = document.querySelector('header');
// lk.style.background = 'blue';

btn.addEventListener('mouseover', (e)=>{
    // e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').style.color = 'black';
    document.querySelector('body').classList.add('bg-dark');
});


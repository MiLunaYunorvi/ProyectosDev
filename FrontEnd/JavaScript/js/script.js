console.log("HolaHOLA")

const p = document.querySelector('.pclass');
const h1 = document.querySelector('#h1id');
const h1_2 = document.querySelector('.h1class');
const input = document.querySelector('input');
const section = document.querySelector('.sectionimg');
console.log({
    h1,
    p,
    input,
});

console.log(input.value)

h1.innerHTML = "innerHTML <h2>Header 2</h2>";
h1_2.innerText = "innerText <h2>Header 2</h2>";

console.log(h1_2.getAttribute('class'));

h1.setAttribute('class','h1class');
h1.classList.add('h1class2');

const img = document.createElement('img');
img.setAttribute('src','https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0,0,600,600&width=480');

section.append(img);
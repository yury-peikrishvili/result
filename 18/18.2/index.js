import img from './assets/image.png';
import "./index.css";

console.log('Hello World!');

const array = [1, 2, 3].map(n => n + 1);
console.log(array);

const textH1 = document.createElement('h1')
textH1.textContent= 'I love JavaScript Rollup'
const pic = document.createElement('img')
pic.setAttribute('src', img )
document.querySelector('body').append(textH1, pic)
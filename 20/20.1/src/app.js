import getRandomColor from './utils';


function initApp() {
    console.log('Hello world');
    const btn = document.createElement('button')
    btn.classList.add('button')
    btn.textContent = 'Изменить цвет страницы'
    const bdy = document.querySelector('body')
    bdy.append(btn)
    btn.addEventListener('click', ()=>bdy.bgColor = getRandomColor())
  }

export default initApp
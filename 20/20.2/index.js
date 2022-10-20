import './index.css';

const isAgreed = localStorage.getItem('isAgreed')

if(isAgreed)
{
    hideSplash()
}

const btn = document.querySelector('.cookie-consent__button')
btn.addEventListener('click', ()=>hideSplash())

function hideSplash (){
    const splash = document.querySelector('.cookie-consent')
    splash.style.display = 'none'
    localStorage.setItem('isAgreed', true)
}


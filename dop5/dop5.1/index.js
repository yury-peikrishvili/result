class CustomSelect{
  #dropDownTemplate;
  #currentSelectedOption;
  
  constructor(id, option){
    const optionsList = option.reduce((prev, curr)=> prev+`<li class="select-dropdown__list-item" data-value="${curr.value}">${curr.text}</li>`,'')
    console.log(optionsList)
    this.#dropDownTemplate = `<div class="select-dropdown select-dropdown--${id}">
                                <button class="select-dropdown__button select-dropdown__button--${id}"> 
                                <span class="select-dropdown__text select-dropdown__text--${id}">Выберите элемент</span>
                                </button>
                                <ul class="select-dropdown__list select-dropdown__list--${id}">
                                  ${optionsList}
                                </ul> 
                              </div>`
  }


  get selectedValue() {
    return this.#currentSelectedOption;
  }

  render(container){
    container.innerHTML= this.#dropDownTemplate
    
    const ulTag = document.querySelector('ul')
    ulTag.addEventListener('click',(event)=>{ 
     if (event.target.tagName == 'LI'){
      document.querySelectorAll('li').forEach((el)=>el.classList.remove('selected'))
      event.target.classList.add ('selected');
      this.#currentSelectedOption = options.filter((el)=>el.value==event.target.getAttribute("data-value"))[0].text
      const ddList = document.querySelector('.select-dropdown__button')
      ddList.textContent = options.filter((el)=>el.value==event.target.getAttribute("data-value"))[0].text
      const ulTag =  document.querySelector('ul')
      ulTag.classList.remove("active"); 
   }
    
    })
  
    const ddList = document.querySelector('.select-dropdown__button')
    ddList.addEventListener('click',()=>{
      const ulTag =  document.querySelector('ul')
      ulTag.classList.add('active');
    })
  }
}

const options = [
  { value: 1, text: 'JavaScript' },
  { value: 2, text: 'NodeJS' },
  { value: 3, text: 'ReactJS' },
  { value: 4, text: 'HTML' },
  { value: 5, text: 'CSS' }
];


const customSelect = new CustomSelect('123', options);
const mainContainer = document.querySelector('#container'); 
customSelect.render(mainContainer);



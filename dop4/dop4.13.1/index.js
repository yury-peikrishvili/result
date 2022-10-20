class Dictionary {
  #name
  #words

  constructor(name) {
    this.#name = name;
    this.#words = {};
  }

  
  get mainName(){
    return this.#name
  }
  
  set mainName(name){
    this.#name = name 
  }

  get allWords(){
    return this.#words
    
  }
  remove(key) {
    delete this.#words[key];
  }

  get(key) {
    return this.words[key];
  }

  showAllWords() {
    for (const key in this.words) {
      console.log(`${key} - ${this.words[key].description}`);
    }
  }
  _addNewWord(wordKey , wordObj ){
    this.#words[wordKey] = wordObj;
  }
  
  add(word, description) {
    if (!(word in this.#words)) {
      this._addNewWord(word ,
       {
        word: word,
        description: description,
      }
      )
    }
  }

  
}

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(word, description) {
    if (!(word in this.allWords)) {
      super._addNewWord(word ,
       {
        word: word,
        description: description,
        isDifficult: true,
      }
      )
    
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');
hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');
hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');
hardWordsDictionary.remove('неологизм');

hardWordsDictionary.showAllWords();
    
console.log(hardWordsDictionary.mainName); // Сложные слова
hardWordsDictionary.mainName = 'Новый Словарь';
console.log(hardWordsDictionary.mainName); // Новый Словарь
console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова 
// дилетант и квант
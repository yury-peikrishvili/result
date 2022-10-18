class Dictionary {
  constructor(name) {
    this.name = name;
    this.words = {};
  }

  add(word, description) {
    if (!(word in this.words)) {
      this.words[word] = {
        word: word,
        description: description,
      };
    }
  }
  remove(key) {
    delete this.words[key];
  }

  get(key) {
    return this.words[key];
  }

  showAllWords() {
    for (const key in this.words) {
      console.log(`${key} - ${this.words[key].description}`);
    }
  }
}

const dictionary = new Dictionary("Толковый словарь");
dictionary.add("JavaScript", "популярный язык программирования");
dictionary.add(
  "Веб-разработчик",
  "Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие"
);
//console.log(dictionary.get('JavaScript'));
dictionary.remove("JavaScript");
dictionary.showAllWords();
// Веб-разработчик - Человек, который создает новые сервисы и сайты или поддерживает // и дополняет существующие

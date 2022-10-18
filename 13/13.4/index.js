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

class HardWordsDictionary extends Dictionary {
  constructor(name) {
    super(name);
  }
  add(word, description) {
    if (!(word in this.words)) {
      this.words[word] = {
        word: word,
        description: description,
        isDifficult: true,
      };
    }
  }
}

const hardWordsDictionary = new HardWordsDictionary("Сложные слова");

hardWordsDictionary.add(
  "дилетант",
  "Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями."
);

hardWordsDictionary.add(
  "неологизм",
  "Новое слово или выражение, а также новое значение старого слова."
);

hardWordsDictionary.add(
  "квант",
  "Неделимая часть какой-либо величины в физике."
);

hardWordsDictionary.remove("неологизм");

hardWordsDictionary.showAllWords();

// дилетант - Тот, кто занимается наукой или искусством // без специальной подготовки, обладая только поверхностными знаниями.// квант - Неделимая часть какой-либо величины в физике.

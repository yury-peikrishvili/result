class Castle {
  constructor(archer, footSoldier, cavalry, artillery) {
    (this.archer = archer),
      (this.footSoldier = footSoldier),
      (this.cavalry = cavalry),
      (this.artillery = artillery);
  }

  checkChancesToWin(defenderObject) {
    let chance = 0;
    Object.keys(this).forEach((element) => {
      if (this[element] >= defenderObject[element]) {
        chance += 1;
      }
    });
    return [chance, Object.keys(this).length];
  }
  improveArmy() {
    Object.keys(this).forEach((element) => (this[element] += 5));
  }
  attack(defenderObject) {
    const chance =
      this.checkChancesToWin(defenderObject)[0] /
      this.checkChancesToWin(defenderObject)[1];
    if (chance < 0.7) {
      alert(
        `Наши шансы равны ${this.checkChancesToWin(defenderObject)[0]}/${
          this.checkChancesToWin(defenderObject)[1]
        }. Необходимо укрепление!`
      );
      this.improveArmy();
    } else {
      alert(`Мы усилились! Мы несомненно победим! Наши шансы высоки!`);
    }
  }
}

const attacker = new Castle(30, 55, 10, 3);
const defender = new Castle(33, 50, 40, 10);

attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!

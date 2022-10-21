let tickets = [];
for (let i = 1016; i <= 1937; i++) {
  if (i % 3 == 0 && i % 7 == 0 && i % 2 != 0 && i % 5 != 0) {
    tickets.push(i);
  }
}

console.log(Math.max(...tickets));

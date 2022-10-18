// 1 NaN - ok
console.log(Number(' 1 2 3 4 5'));
// 2 1234 - wrong. NaN
console.log(Number('1234 5'));
// 3 12345 - ok
console.log(Number('12345'));
// 4 'false' - ok
console.log(String(false));
// 5 true - wrong. 'false'
console.log(Boolean(0000000));
// 6 ture - ok
console.log(Boolean(0.0000001));
// 7 '' - wrong. 'undefined'
console.log(String(undefined));
// 8 NaN - ok
console.log(Number('100f'));
// 9 100 - ok
console.log(Number('100'));
// 10 1 - ok
console.log(Number('000001'));
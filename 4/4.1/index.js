
let age = 20;
console.log(Number(age), Boolean(age), String(age));  

let name = 'Fedor';
console.log(Number(name), Boolean(name), String(name));

let male = true;
console.log(Number(male), Boolean(male), String(male));

let secrets = null;
console.log(Number(secrets), Boolean(secrets), String(secrets));    

let dog = undefined;
console.log(Number(dog), Boolean(dog), String(dog));

let family = {father: 'Ilya'};
console.log(Number(family), Boolean(family), String(family));   

let bigage = 20n;
console.log(Number(bigage), Boolean(bigage), String(bigage));  

let id = Symbol('id');
console.log(/*Number(id), */Boolean(id), String(id));
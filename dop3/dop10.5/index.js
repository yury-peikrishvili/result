const usersArray = [
  { id: '34rdca3eeb7f6fgeed471198', name: 'Andrew', age: 25 },
  { id: '76rdca3eeb7f6fgeed471100', name: 'Alexey', age: 15 },
  { id: '12rdca3eeb7f6fgeed4711012', name: 'Egor', age: 13 },
  { id: '32rdca3eeb7f6fgeed471101', name: 'Kate', age: 31 },
  { id: '98rdca3eeb7f6fgeed471102', name: 'Elena', age: 18 }
];

const usersObject = {
  '34rdca3eeb7f6fgeed471198': { 
  id: '34rdca3eeb7f6fgeed471198', 
  name: 'Andrew', 
  age: 25 
  },
  '76rdca3eeb7f6fgeed471100': { 
  id: '76rdca3eeb7f6fgeed471100', 
  name: 'Alexey', 
  age: 15 
  }, 
  '12rdca3eeb7f6fgeed4711012': { 
  id: '12rdca3eeb7f6fgeed4711012', 
  name: 'Egor', 
  age: 13 
  },
  '32rdca3eeb7f6fgeed471101': { 
  id: '32rdca3eeb7f6fgeed471101', 
  name: 'Kate', 
  age: 31 
  },
  '98rdca3eeb7f6fgeed471102': { 
  id: '98rdca3eeb7f6fgeed471102', 
  name: 'Elena', 
  age: 18 
  }
};

function getAdultUsers(obj){
  if (Array.isArray(obj)){
    return obj.filter(element=>element.age>=18)
  } else {
    let filtered = Object.values(obj).filter(element=>element.age>=18)
    const result= {}
    filtered.forEach((elem) => {result[elem.id] = elem }  )
    return  result
  
    }
    
  }


console.log(getAdultUsers(usersArray))
console.log(getAdultUsers(usersObject))
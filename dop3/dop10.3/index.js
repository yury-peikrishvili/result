function getKiller(suspectInfo, deadPeople ){
for (suspect in suspectInfo){
   if(deadPeople.every((element, index) => suspectInfo[suspect].includes(element))){
         return `Убийца ${suspect}`
      }
   }
}

console.log(
   getKiller(
     {
       James: ["Jacob", "Bill", "Lucas"],
       Johnny: ["David", "Kyle", "Lucas"],
       Peter: ["Lucy", "Kyle"]
     },
     ["Lucas", "Bill"]
   )
 ); // Убийца James
 
 console.log(
   getKiller(
     {
       Brad: [],
       Megan: ["Ben", "Kevin"],
       Finn: []
     },
     ["Ben"]
   )
 ); // Убийца Megan
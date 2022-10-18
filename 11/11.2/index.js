let birthdate = new Date(1984,09,18);

function convertMsToDays(milliseconds){
   return Math.round(milliseconds/1000/60/60/24)
}

function getDaysBeforeBirthday(bdate){
   let thisyearbd = new Date(new Date().getFullYear(), bdate.getMonth()-1, bdate.getDate());
   let daystonextBD = 
   convertMsToDays(thisyearbd - new Date ())>0
   ?convertMsToDays(thisyearbd - new Date ())
   :convertMsToDays(new Date(thisyearbd.setFullYear(thisyearbd.getFullYear() + 1)) - new Date ())
   return daystonextBD
}

console.log(`days to your next birthday: ${getDaysBeforeBirthday(birthdate)}`)



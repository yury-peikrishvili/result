const peopleWithVisa = [
   {
       firstName: 'Stasia',
       lastName: 'Ward',
       criminalRecord: true,
       passportExpiration: '19.06.2040',
   },
   {
       firstName: 'Elliot',
       lastName: 'Baker',
       criminalRecord: false,
       passportExpiration: '04.06.2041',
   },
   {
       firstName: 'Leighann',
       lastName: 'Scott',
       criminalRecord: true,
       passportExpiration: '31.07.2039',
   },
   {
       firstName: 'Nick',
       lastName: 'Pop',
       criminalRecord: false,
       passportExpiration: '31.12.2030',
   },
 ];
 
 function allowVisa(list) {
   var today = Date.now();
   let result = {}
   for(obj in Object.values(list)){
      let d = list[obj].passportExpiration.split(".")
      let data = new Date(d[2] +'-'+ d[1] +'-'+ d[0]);
      if(today < data && !list[obj].criminalRecord ){
      result[obj] = list[obj]
      }
   }
   return result
 }
  
 const result = allowVisa(peopleWithVisa);
 console.log('result', result);
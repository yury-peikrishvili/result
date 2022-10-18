function handleObject(obj, key, action){
    switch (action) {
        case 'get':
            return obj[key];      
        case 'add':
            obj[key] = '';
            return obj;
        case 'delete':
            delete obj[key];
            return obj;
        default:
            return obj;
      }
}

const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
 }
  
 let result = handleObject(student, 'programmingLanguage', 'delete');
 result = handleObject(student, 'testkey', 'add');
 console.log('result', result); // { name: 'Maxim', testkey: '' }
 console.log('result', handleObject(student, 'name', 'get')); // 'Maxim'
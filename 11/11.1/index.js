function getDateFormat(date, separator = '.'){
	let dd = String(date.getDate()).padStart(2, '0');
	let mm = String(date.getMonth() + 1).padStart(2, '0');
	let yyyy = date.getFullYear();
	let result = [dd,mm,yyyy].join(separator)
	return result

}

let newdate = new Date ();


console.log(getDateFormat(newdate,'-'))
console.log(getDateFormat(newdate,'!'))
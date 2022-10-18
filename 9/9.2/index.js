function getSumOfSequence(number){
    let loc_array = []
        for (let i =1; i<=number; i++){
            loc_array.push(i)
        }
    return loc_array[0]+loc_array[loc_array.length - 1]
}

console.log(getSumOfSequence(5))  // 6 ([1, 2, 3, 4, 5], 1+5=6)
console.log(getSumOfSequence(45))  // 46
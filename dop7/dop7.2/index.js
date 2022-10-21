console.log(isEqualSymbols("адрес", "среда")); // true
console.log(isEqualSymbols("ноутбук", "программист")); // false

function isEqualSymbols(str1, str2) {
  let isEquls = true
  let arr1 = str1.split("").sort()
  let arr2 = str2.split("").sort()
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) {
      isEquls = false
    }
  }
  return isEquls
}

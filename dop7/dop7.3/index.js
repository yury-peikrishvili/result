unique([1, 1, 2, 2, 4, 2, 3, 7, 3]) // => [1, 2, 4, 3, 7]
function unique(arr) {
  const result = []
  arr.forEach((e) => {
    if (!result.includes(e)) {
      result.push(e)
    }
  });
  console.log(result)
}

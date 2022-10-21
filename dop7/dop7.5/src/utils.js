function countTotal(donates) {
  const result= donates.length == 1?donates[0].amt:donates.reduce((a, b) => a + b.amt, 0)
  return result
}

export default countTotal;

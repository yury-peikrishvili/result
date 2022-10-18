const groceries = {
    "73Wakv": {
      name: "Orange Juice",
      price: 1.5,
      discount: 10
    },
    "5L3db9": {
      name: "Chocolate",
      price: 2,
      discount: 0
    }

  };


  function getTotalPriceOfShoppingBag(shoppingBag) {
    let sum = 0
    for (bag of shoppingBag){ 
        for (key in groceries) {
            if(bag.productId==key){
                sum = sum + (groceries[key].price - groceries[key].price*groceries[key].discount/100)*bag.count
            }
        }      
    }
    return sum
  }
  
  const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 23 }
  ];
  
  const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
  console.log("totalPrice", totalPrice); // Возвращает 50.05
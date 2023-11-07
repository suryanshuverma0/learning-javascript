// Create a JavaScript class "ShoppingCart" with properties for an array of items and their prices. Add a method to calculate the total cost of all items in the cart. Create a "ShoppingCart" object, add items to the cart, and calculate and display the total cost.

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addDetails(itemName, price) {
    return this.items.push({ name: itemName, price: price });
  }

  findPrice() {
    if (this.items === 0) {
      return 0;
    }
    else{
         const cost = this.items.reduce((total , item) =>{
                  return total + item.price;
         },0)
         return cost;
    }
  }
}

const cart = new ShoppingCart();
cart.addDetails("A" , 1000);
cart.addDetails("B" ,5000);

const cost = cart.findPrice();
console.log(cost);
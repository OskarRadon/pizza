function Pizza(size, toppings, quantity) {
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
}

Pizza.prototype.generatePrice = function() {
  var price = 0;
  if (this.size === "large") {
    price = 15;
  }
  if (this.size === "medium") {
    price = 15;
  }
  if (this.size === "small") {
    price = 15;
  }
  return (price + this.toppings) * this.quantity;

}

Pizza.prototype.errorChecker = function() {

}

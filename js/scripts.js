function Pizza(size, toppings, quantity) {
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
}

Pizza.prototype.generatePrice = function() {
  var price = 0;
  for (var i = 0; i < this.toppings; i++) {
    price += 3;
  }

  if (this.size === "large") {
    price += 15;
  }
  if (this.size === "medium") {
    price += 12;
  }
  if (this.size === "small") {
    price += 8;
  }
  return price * this.quantity;
}

Pizza.prototype.errorChecker = function() {

}

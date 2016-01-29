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

  if (this.size === "Large") {
    price += 15;
  }
  if (this.size === "Medium") {
    price += 12;
  }
  if (this.size === "Small") {
    price += 8;
  }
  return price * this.quantity;
}

$(function(){
  $("form#pizzaOrder").submit(function(event) {
    event.preventDefault();
    var sizeChoice = $("select#size").val();
    var toppingAmount = $("input#toppings").val();
    var quantityChoice = $("input#quantity").val();
    var newPizza = new Pizza(sizeChoice, toppingAmount, quantityChoice);

    $("span#result").text("$" + newPizza.generatePrice() + (".00"));

  });
});

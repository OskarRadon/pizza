describe ("Pizza", function() {
  it ("will make new Pizza object with size and toppings", function () {
    var testPizza = new Pizza("large", 5, 2);
    expect(testPizza.size).to.equal("large");
    expect(testPizza.toppings).to.equal(5);
    expect(testPizza.quantity).to.equal(2);
  });
});

describe ("generatePrice", function() {
  it ("will generate price based on size, number of toppings, and quantity", function() {
    var testPizza = new Pizza("medium", 2, 3);
    expect(testPizza.generatePrice()).to.equal(54);
  });
});

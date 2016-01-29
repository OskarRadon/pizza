describe ("Pizza", function() {
  it ("will generate pizza price based on pizza size and toppings", function () {
    var testPizza = new Pizza("large", 5);
    expect(testPizza.size).to.equal("large");
    expect(testPizza.toppings).to.equal(5);
  });
});

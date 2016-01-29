describe ("Pizza", function() {
  it ("will generate pizza price based on pizza size", function () {
    var testPizza = new Pizza("large");
    expect(testPizza.size).to.equal("large");
  });
});

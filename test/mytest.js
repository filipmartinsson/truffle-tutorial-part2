var HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', function(accounts) {
  it("should put 1000 coins in the first account", function() {
    return HelloWorld.deployed().then(function(instance) {
      return instance.balance.call(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 1000, "1000 wasn't in the first account");
    });
  });
});

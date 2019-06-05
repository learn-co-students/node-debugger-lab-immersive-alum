var expectedOutput = {
  "Account before opening": { balance: 0, name: "Azat Mardan", checking: "1" },
  "New balance after signup bonus is ": 250,
  "Account after opening": {
    balance: 1250,
    name: "Azat Mardan",
    checking: "1",
    type: "checking"
  }
};

var expect = require("chai").expect;
var path = require("path");

describe("account.js", function() {
  it("must return the desired output", function(done) {
    var actualOutput = require(path.join(__dirname, "..", "account"))();
    expect(actualOutput).to.deep.equal(expectedOutput);
    done();
  });
});

// describe("Given a customer account is updated, state is not updated when", () => {
//   it("is Opened", () => {
//     const before = output["Account after opening"];
//     const after = output["Account before opening"];
//     expect(before).to.not.equal(after);
//   });

//   it("has the Account Type Set", () => {
//     expect(false).to.equal(true);
//   });
// });

// describe("Given a customer wants to open an account with an initial deposit", () => {
//   it("The balance should a the bonus amount plus the initial deposit", () => {
//     expect(false).to.equal(true);
//   });
// });

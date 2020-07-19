module.exports = function account() {
  var output = {};
  var customerAccount = {
    balance: 0,
    name: "Azat Mardan",
    checking: "1",
  };
  var newCustomerAccount = {};

  function setAccountType() {
    if (customerAccount.checking === "1") {
      // error: type mismatch, should check for string
      newCustomerAccount.type = "checking"; // error: mutates customerAccount
    } else {
      newCustomerAccount.type = "savings";
    }
  }

  var signupBonus = 250,
    deposit = 1000;

  var openAccount = function (account, deposit) {
    // error: mutates customerAccount
    newCustomerAccount = { ...account };
    newCustomerAccount.balance += signupBonus;
    output["New balance after signup bonus is "] = newCustomerAccount.balance;
    newCustomerAccount.balance += deposit;
  };

  output["Account before opening"] = customerAccount; // error: customerAccount is called as a string, not a variable

  openAccount(customerAccount, deposit); // error: deposit not passed in as argument
  setAccountType();
  output["Account after opening"] = newCustomerAccount;
  return output;
};

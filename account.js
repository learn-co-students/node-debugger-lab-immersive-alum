module.exports = function() {
  const output = {};
  const customerAccount = {
    balance: 0,
    name: "Azat Mardan",
    checking: "1"
  };

  function setAccountType() {
    if (customerAccount.checking == 1) {
      customerAccount.type = "checking";
    } else {
      customerAccount.type = "savings";
    }
  }

  const signupBonus = 250,
    deposit = 1000;

  const openAccount = function(account, deposit) {
    account.balance += signupBonus;
    output["New balance after signup bonus is "] = account.balance;
    account.balance += deposit;
  };

  output["Account before opening"] = customerAccount;

  openAccount(customerAccount, deposit);
  setAccountType();
  output["Account after opening"] = customerAccount;
  return output;
};

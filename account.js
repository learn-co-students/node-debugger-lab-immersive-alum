module.exports = function account() {
  var output = {};
  var customerAccount = {
    balance: 0,
    name: "Azat Mardan",
    checking: "1"
  };

  // like object.assign but not shallow
  deepCopyObject = obj => {
    return JSON.parse(JSON.stringify(obj));
  };

  function setAccountType(account) {
    let accountCopy = deepCopyObject(account);
    if (accountCopy.checking == 1) {
      accountCopy.type = "checking";
    } else {
      accountCopy.type = "savings";
    }
    return accountCopy;
  }

  var signupBonus = 250;
  var deposit = 1000;

  var openAccount = function(account, deposit) {
    let accountCopy = deepCopyObject(account);
    accountCopy.balance += signupBonus;
    output["New balance after signup bonus is "] = accountCopy.balance;
    accountCopy.balance += deposit;
    return accountCopy;
  };

  output["Account before opening"] = customerAccount;

  let updatedAccount = openAccount(customerAccount, deposit);
  const account = setAccountType(updatedAccount);
  output["Account after opening"] = account;
  console.log(output);
  return output;
};

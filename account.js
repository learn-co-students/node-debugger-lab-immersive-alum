module.exports = function account() {
  var output = {}
  var customerAccount = {
    balance: 0,
    name: 'Azat Mardan',
    checking: '1'
  }
  var newAccount

  function setAccountType () {
    if (customerAccount.checking === '1') {
      customerAccount.type = 'checking'
    } else {
      customerAccount.type = 'savings'
    }
  }

  var signupBonus = 250,
  deposit = 1000

  var openAccount = function(account, deposit) {
   newAccount = Object.assign({}, account)
    newAccount.balance += signupBonus
    output['New balance after signup bonus is '] = newAccount.balance
    newAccount.balance += deposit
  }

  output['Account before opening'] = customerAccount
  setAccountType()
  openAccount(customerAccount, deposit)
  output['Account after opening'] = newAccount
  return output
}
// console.log(account())

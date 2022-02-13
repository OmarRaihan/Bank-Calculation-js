
// use function to deposit & withdraw

/* function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
 */

// use function to deposit & withdraw
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';

    return amountValue;
}

// update total field
function updateTotalField(totalFieldId, amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const oldTotalBalance = parseFloat(totalText);
    totalElement.innerText = oldTotalBalance + amount;
}

// current balance
function getCurrentBalance(){
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const oldTotalBalance = parseFloat(totalBalanceText);
    return oldTotalBalance;
}

// update balance
function updateBalance(depositAmount, isAdd){
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const oldTotalBalance = parseFloat(totalBalanceText);
    const oldTotalBalance = getCurrentBalance();
    if(isAdd == true){
        totalBalance.innerText = oldTotalBalance + depositAmount;
    }
    else{
        totalBalance.innerText = oldTotalBalance - depositAmount;
    }
}



// handle deposit button
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0) {
        updateTotalField('total-deposit', depositAmount);
        updateBalance(depositAmount, true);
    }
})



// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('total-withdraw', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('You cannot withdraw more than what you have in your account');
    }
})
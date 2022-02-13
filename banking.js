
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
    /* const totalBalanceText = totalBalance.innerText;
    const oldTotalBalance = parseFloat(totalBalanceText); */
    const oldTotalBalance = getCurrentBalance();
    if(isAdd == true){
        totalBalance.innerText = oldTotalBalance + depositAmount;
    }
    else{
        totalBalance.innerText = oldTotalBalance - depositAmount;
    }
}



document.getElementById('deposit-button').addEventListener('click', function(){
    /* const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); */
    
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0) {
        updateTotalField('total-deposit', depositAmount);
        updateBalance(depositAmount, true);
    }

    
    // get and update total deposit 
    /* const totalDeposit = document.getElementById('total-deposit');
    const totalDepositText = totalDeposit.innerText;
    const oldTotalDeposit = parseFloat(totalDepositText);
    totalDeposit.innerText = oldTotalDeposit + depositAmount; */

    // updateTotalField('total-deposit', depositAmount);

    
    // update balance
    /* const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const oldTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = oldTotalBalance + depositAmount; */
    // updateBalance(depositAmount, true);

    // clear input field
    // depositInput.value = '';
})




// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click',function(){
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */
    
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('total-withdraw', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
        console.log('You cannot withdraw more than what you have in your account');
    }

    // get update total withdraw
    /* const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawText = totalWithdraw.innerText;
    const oldTotalWithdraw = parseFloat(totalWithdrawText);
    totalWithdraw.innerText = oldTotalWithdraw + withdrawAmount; */
    
    // updateTotalField('total-withdraw', withdrawAmount);

    
    // update balance after withdraw
    /* const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const oldTotalBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = oldTotalBalance - withdrawAmount; */
    // updateBalance(withdrawAmount, false);

    /* // clear withdraw input field
    withdrawInput.value = ''; */
})
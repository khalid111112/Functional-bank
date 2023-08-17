document.getElementById('btn-Withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('Withdraw-field');

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValuById('withdraw-total',newWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValuById('balance-total', newBalanceTotal)
})
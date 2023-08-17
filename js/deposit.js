
document.getElementById('btn-deposit').addEventListener('click', function(){

    const newDepositAmount = getInputFieldValueById('deposit-field');

    const previousDepositTotal = getTextElementValueById('deposit-total')
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    setTextElementValuById('deposit-total', newDepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValuById('balance-total', newBalanceTotal)
})
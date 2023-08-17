function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getTextElementValueById(elementId){
    const textelement = document.getElementById(elementId);
    const textelementCalueString = textelement.innerText;
    const textElementValue =  parseFloat(textelementCalueString);
    return textElementValue;
}

function setTextElementValuById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}
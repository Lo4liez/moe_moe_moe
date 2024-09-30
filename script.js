function calculate(operation) {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);
    let result;

    if (isNaN(input1) || isNaN(input2)) {
        result = 'Error';
    } else {
        switch (operation) {
            case '+':
                result = input1 + input2;
                break;
            case '-':
                result = input1 - input2;
                break;
            case '*':
                result = input1 * input2;
                break;
            case '/':
                result = input2 !== 0 ? input1 / input2 : 'Error';
                break;
            default:
                result = 'Error';
        }
    }

    document.getElementById('result').innerText = result;
}
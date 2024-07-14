
let result = document.getElementById('result');
let history = [];

function clearResult() {
    result.value = '';
    history = [];
}

function appendToResult(value) {
    result.value += value;
}

function calculateResult() {
    try {
        let expression = result.value;
        let resultValue = eval(expression);
        result.value = resultValue;
        history.push(`${expression} = ${resultValue}`);
        console.log(history);
    } catch (error) {
        result.value = 'Error';
    }
}

function sin(x) {
    return Math.sin(x * Math.PI / 180);
}

function cos(x) {
    return Math.cos(x * Math.PI / 180);
}

function tan(x) {
    return Math.tan(x * Math.PI / 180);
}

function log(x) {
    return Math.log(x);
}

function exp(x) {
    return Math.exp(x);
}

function pow(x, y) {
    return Math.pow(x, y);
}
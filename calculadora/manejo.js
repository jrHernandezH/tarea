function addToInput(value) {
    document.getElementById('input').value += value;
}

function clearInput() {
    document.getElementById('input').value = '';
}

function calculate() {
    let input = document.getElementById('input').value;
    let result = eval(input);
    console.log(result)
    if (result == 'Infinity') {
        console.log("a");
        let resultado = "Error";
        document.getElementById('input').value = resultado;
    } else {
        console.log("b");
        document.getElementById('input').value = result;
    }
}

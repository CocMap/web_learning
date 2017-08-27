function Calculator_function() {
    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);
    var select = document.getElementById("opt");
    var opt = select.options[select.selectedIndex].value;

    var result;

    switch (opt) {
        case "subtraction":
            result = number1 - number2;
            break;
        case "multiplication":
            result = number1 * number2;
            break;
        case "division":
            result = number1 / number2;
            break;
        default:
            result = number1 + number2;
            break;
    }
    document.getElementById("result").innerHTML = result;
}


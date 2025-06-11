var BTN_CALCULAR = document.getElementById('btn_calcular');
var numeroFactorial = document.getElementById('txt_factorial');
function factorial(n) {
    if (n < 0) {
        throw new Error("El factorial no puede ser un numero negativo");
    }
    var resultado = 1;
    for (var i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}
BTN_CALCULAR === null || BTN_CALCULAR === void 0 ? void 0 : BTN_CALCULAR.addEventListener('click', function () {
    var CONTENEDOR = document.getElementById('contenedor_de_resultados');
    var conversionNumero = parseFloat(numeroFactorial.value);
    var operacionFactorial = factorial(conversionNumero);
    CONTENEDOR.innerHTML = "El resultado es ".concat(operacionFactorial);
});

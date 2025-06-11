var BTN_DET_PERFECTO = document.getElementById('btn_det_perfecto');
var numeroIngresado = document.getElementById('txt_perfecto');
var CONTENEDOR = document.getElementById('contenedor_de_resultados');
function esNumeroPerfecto(n) {
    if (n <= 1 || !Number.isInteger(n)) {
        return false;
    }
    var suma = 0;
    for (var i = 1; i < n; i++) {
        if (n % i === 0) {
            suma += i;
        }
    }
    return suma === n;
}
BTN_DET_PERFECTO === null || BTN_DET_PERFECTO === void 0 ? void 0 : BTN_DET_PERFECTO.addEventListener('click', function () {
    var VALOR = parseInt(numeroIngresado.value);
    if (isNaN(VALOR)) {
        CONTENEDOR.textContent = "Por favor ingrese un numero valido";
        return;
    }
    var NUMERO_PERFECTO = esNumeroPerfecto(VALOR);
    CONTENEDOR.textContent = NUMERO_PERFECTO
        ? "".concat(VALOR, " es un numero perfecto")
        : "".concat(VALOR, " no es un numero perfecto");
});

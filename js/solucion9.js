var BTN_VERIRF_PRIMO = document.getElementById('btn_det_primo');
var ingresarNumero = document.getElementById('txt_primo');
var CONTENEDOR = document.getElementById('contenedor_de_resultados');
function determinarPrimo(n) {
    if (n <= 1 || n % 1 !== 0)
        return false;
    if (n === 2)
        return true;
    if (n % 2 === 0)
        return false;
    var LIMITE = Math.sqrt(n);
    for (var i = 3; i <= LIMITE; i += 2) {
        if (n % i === 0)
            return false;
    }
    return true;
}
BTN_VERIRF_PRIMO === null || BTN_VERIRF_PRIMO === void 0 ? void 0 : BTN_VERIRF_PRIMO.addEventListener('click', function () {
    var VALOR_CONV = parseInt(ingresarNumero.value);
    if (isNaN(VALOR_CONV)) {
        CONTENEDOR.textContent = "Por favor ingrese caracteres validos";
        return;
    }
    var NUMERO_PRIMO = determinarPrimo(VALOR_CONV);
    CONTENEDOR.textContent = NUMERO_PRIMO
        ? "".concat(VALOR_CONV, " es un numero primo")
        : "".concat(VALOR_CONV, " no es un numero primo");
});

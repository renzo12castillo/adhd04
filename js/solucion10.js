var BTN_CONTAR_VOCALES = document.getElementById('btn_find_vocales');
var extraerTexto = document.getElementById('txt_parrafo');
var BLOQUE_TEXTO = document.getElementById('contenedor_de_resultados');
function contarVocales(texto) {
    var VOCALES = ['a', 'e', 'i', 'o', 'u'];
    var contador = 0;
    for (var _i = 0, _a = texto.toLocaleLowerCase(); _i < _a.length; _i++) {
        var LETRA = _a[_i];
        if (VOCALES.includes(LETRA)) {
            contador++;
        }
    }
    return contador;
}
BTN_CONTAR_VOCALES === null || BTN_CONTAR_VOCALES === void 0 ? void 0 : BTN_CONTAR_VOCALES.addEventListener('click', function () {
    var TEXTO = extraerTexto.value;
    var CANTIDAD = contarVocales(TEXTO);
    BLOQUE_TEXTO.textContent = "El texto tiene ".concat(CANTIDAD, " vocal").concat(CANTIDAD !== 1 ? 'es' : '', ".");
});

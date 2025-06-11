var BTN_CONTAR_VOCALES = document.getElementById('btn_find_vocales');
var BLOQUE_TEXTO = document.getElementById('contenedor_de_resultados');
function contarVocales(texto) {
    var VOCALES = ['a', 'e', 'i', 'o', 'u'];
    var contador = 0;
    for (var _i = 0, _a = texto.toLocaleLowerCase(); _i < _a.length; _i++) {
        var LETRA = _a[_i];
        if (VOCALES.includes(LETRA)) {
            contador;
        }
    }
}

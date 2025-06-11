var BTN_INVERTIR = document.getElementById("btn_invertir");
var texto = document.getElementById('txt_parrafo');
var CONTENEDOR = document.getElementById('contenedor_de_resultados');
function invertirTexto(texto) {
    return texto.split('').reverse().join('');
}
BTN_INVERTIR === null || BTN_INVERTIR === void 0 ? void 0 : BTN_INVERTIR.addEventListener('click', function () {
    var TEXTO_ORIGINAL = texto.value;
    var TEXTO_INVERTIDO = invertirTexto(TEXTO_ORIGINAL);
    CONTENEDOR.innerHTML = "<p>".concat(TEXTO_INVERTIDO, "</p>");
});

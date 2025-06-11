var BTN_ENCONTRAR = document.getElementById("btn_encontrar");
var numeroUno = document.getElementById("txt_uno");
var numeroDos = document.getElementById("txt_dos");
var numeroTres = document.getElementById("txt_tres");
BTN_ENCONTRAR === null || BTN_ENCONTRAR === void 0 ? void 0 : BTN_ENCONTRAR.addEventListener('click', function () {
    var UNO_FILTRADO = parseFloat(numeroUno.value);
    var DOS_FILTRADO = parseFloat(numeroDos.value);
    var TRES_FILTRADO = parseFloat(numeroTres.value);
    var MAYOR = Math.max(UNO_FILTRADO, DOS_FILTRADO, TRES_FILTRADO);
    var MENOR = Math.min(UNO_FILTRADO, DOS_FILTRADO, TRES_FILTRADO);
    var CONTENEDOR = document.getElementById("contenedor_de_resultados");
    CONTENEDOR.innerHTML = "<p>El numero mayor es ".concat(MAYOR, " y el numero menor es ").concat(MENOR, "</p>");
});

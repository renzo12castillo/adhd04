var BTN_ELEVAR = document.getElementById("btn_elevar");
var base = document.getElementById("txt_base");
var exponente = document.getElementById("txt_exponente");
var CONTENEDOR = document.getElementById("contenedor_de_resultados");
BTN_ELEVAR === null || BTN_ELEVAR === void 0 ? void 0 : BTN_ELEVAR.addEventListener('click', function () {
    var BASE_FILTRO = parseFloat(base.value);
    var EXPONENTE_FILTRO = parseFloat(exponente.value);
    var elevar = Math.pow(BASE_FILTRO, EXPONENTE_FILTRO);
    CONTENEDOR.innerHTML = "El resultado de la potencia es: ".concat(elevar);
});

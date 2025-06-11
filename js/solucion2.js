var BTN_CALCULAR_AREA = document.getElementById("btn_calcular_area");
var base = document.getElementById("txt_base");
var altura = document.getElementById("txt_altura");
BTN_CALCULAR_AREA === null || BTN_CALCULAR_AREA === void 0 ? void 0 : BTN_CALCULAR_AREA.addEventListener('click', function () {
    var BASE_CONV = parseFloat(base.value);
    var ALTURA_CONV = parseFloat(altura.value);
    if (isNaN(BASE_CONV) || isNaN(ALTURA_CONV)) {
        console.error("Por favor ingrese valores numericos validos e intente nuevamente");
        var CONTENEDOR_1 = document.getElementById("contenedor_de_resultados");
        if (CONTENEDOR_1) {
            CONTENEDOR_1.innerHTML = "<p>Error: Ingrese valores num\u00E9ricos v\u00E1lidos.</p>";
        }
        return;
    }
    var RESULTADO = (BASE_CONV * ALTURA_CONV) / 2;
    var CONTENEDOR = document.getElementById("contenedor_de_resultados");
    if (CONTENEDOR) {
        CONTENEDOR.innerHTML = "<p>El area del triangulo es: ".concat(RESULTADO.toFixed(2), "cm\u00B2</p>");
    }
    else {
        console.error("El contenedor de resultados no se encontró.");
    }
});

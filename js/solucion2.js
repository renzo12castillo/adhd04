var BTN_CALCULAR_AREA = document.getElementById("btn_calcular_promedio");
var base = document.getElementById("txt_base");
var altura = document.getElementById("txt_altura");
BTN_CALCULAR_AREA === null || BTN_CALCULAR_AREA === void 0 ? void 0 : BTN_CALCULAR_AREA.addEventListener('click', function () {
    var BASE_CONV = parseFloat(base.value);
    var ALTURA_CONV = parseFloat(altura.value);
    if (isNaN(BASE_CONV) || isNaN(ALTURA_CONV)) {
        console.error("Por favor ingrese valores numericos validos e intente nuevamente");
        var CONTENEDOR = document.getElementById("contenedor_de_resultados");
        if (CONTENEDOR) {
            CONTENEDOR.innerHTML = "<p>Error: Ingrese valores num\u00E9ricos v\u00E1lidos.</p>";
        }
        return;
    }
    var RESULTADO = (BASE_CONV * ALTURA_CONV) / 2;
});

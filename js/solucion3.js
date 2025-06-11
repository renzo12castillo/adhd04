var BTN_DETERMINAR = document.getElementById("btn_determinar_numero");
var numero = document.getElementById("txt_num_par_inpar");
BTN_DETERMINAR === null || BTN_DETERMINAR === void 0 ? void 0 : BTN_DETERMINAR.addEventListener('click', function () {
    var CONVERSION = parseFloat(numero.value);
    if (isNaN(CONVERSION)) {
        console.error("Ingreso un dato invalido, verifique e intente nuevamente");
        var CONTENEDOR_1 = document.getElementById("contenedor_de_resultados");
        if (CONTENEDOR_1) {
            CONTENEDOR_1.innerHTML = "<p>Error: Ingrese valores num\u00E9ricos v\u00E1lidos.</p>";
        }
        return;
    }
    var CONTENEDOR = document.getElementById("contenedor_de_resultados");
    if (CONVERSION % 2 === 0) {
        CONTENEDOR.innerHTML = "<p>".concat(CONVERSION, " es un numero par</p>");
    }
    else {
        CONTENEDOR.innerHTML = "<p>".concat(CONVERSION, " es un numero impar</p>");
    }
});

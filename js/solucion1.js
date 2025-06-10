//PPIMERO SE DECLARAN LAS VARIABLES PARA QUE SE OBTENGA LA INFORMACION DESDE LOS ELEMENTOS DE HTML 
var BTN_CALCULAR_PROMEDIO = document.getElementById("btn_calcular_promedio");
// ACA SE DECLARARON LOS INPUTS PARA EL INGRESO DE LA INFORMACION A TRAVES DEL FORMULARIO
// EL HTMLINPUTELEMENT SIRVE COMO TIPADO
var PRIMER_DIGITO = document.getElementById("txt_digito_1");
var SEGUNDO_DIGITO = document.getElementById("txt_digito_2");
var TERCER_DIGITO = document.getElementById("txt_digito_3");
// SE ELABORA EL EVENTO QUE CONTIENE MANEJO DE ERRORES 
BTN_CALCULAR_PROMEDIO === null || BTN_CALCULAR_PROMEDIO === void 0 ? void 0 : BTN_CALCULAR_PROMEDIO.addEventListener('click', function () {
    if (!PRIMER_DIGITO || !SEGUNDO_DIGITO || !TERCER_DIGITO) {
        console.error("Numeros ingresados de manera erronea, intente nuevamente");
    }
    // SE CONVIERTEN DE VALORES NULOS O STRINGS A NUMEROS 
    var CAMPO_UNO = parseFloat(PRIMER_DIGITO.value);
    var CAMPO_DOS = parseFloat(SEGUNDO_DIGITO.value);
    var CAMPO_TRES = parseFloat(TERCER_DIGITO.value);
    if (isNaN(CAMPO_UNO) || isNaN(CAMPO_DOS) || isNaN(CAMPO_TRES)) {
        console.error("Por favor ingrese valores numericos validos");
        var CONTENEDOR_1 = document.getElementById("contenedor_de_resultados");
        if (CONTENEDOR_1) {
            CONTENEDOR_1.innerHTML = "<p>Error: Ingrese valores num\u00E9ricos v\u00E1lidos.</p>";
        }
        return;
    }
    // FORMULA PARA REALIZAR EL PROMEDIO YA QUE LOS ELEMENTOS HAN SIDO TRANSFERIDOS A NUMEROS 
    var RESULTADO = (CAMPO_UNO + CAMPO_DOS + CAMPO_TRES) / 3;
    var CONTENEDOR = document.getElementById("contenedor_de_resultados");
    if (CONTENEDOR) {
        CONTENEDOR.innerHTML = "<p>El promedio de los numeros es: ".concat(RESULTADO.toFixed(2), "</p>");
    }
    else {
        console.error("El contenedor de resultados no se encontró.");
    }
});

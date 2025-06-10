//PPIMERO SE DECLARAN LAS VARIABLES PARA QUE SE OBTENGA LA INFORMACION DESDE LOS ELEMENTOS DE HTML 

const BTN_CALCULAR_PROMEDIO = document.getElementById("btn_calcular_promedio") as HTMLButtonElement; 

// ACA SE DECLARARON LOS INPUTS PARA EL INGRESO DE LA INFORMACION A TRAVES DEL FORMULARIO
// EL HTMLINPUTELEMENT SIRVE COMO TIPADO

const PRIMER_DIGITO = document.getElementById("txt_digito_1") as HTMLInputElement; 
const SEGUNDO_DIGITO = document.getElementById("txt_digito_2") as HTMLInputElement; 
const TERCER_DIGITO = document.getElementById("txt_digito_3") as HTMLInputElement; 

// SE ELABORA EL EVENTO QUE CONTIENE MANEJO DE ERRORES 

BTN_CALCULAR_PROMEDIO?.addEventListener('click', ()=> {

    if(!PRIMER_DIGITO || !SEGUNDO_DIGITO || !TERCER_DIGITO) {
        console.error("Numeros ingresados de manera erronea, intente nuevamente"); 
    }

    // SE CONVIERTEN DE VALORES NULOS O STRINGS A NUMEROS 

    const CAMPO_UNO = parseFloat(PRIMER_DIGITO.value); 
    const CAMPO_DOS = parseFloat(SEGUNDO_DIGITO.value); 
    const CAMPO_TRES = parseFloat(TERCER_DIGITO.value); 

    if (isNaN(CAMPO_UNO) || isNaN(CAMPO_DOS) || isNaN(CAMPO_TRES)) {
        console.error("Por favor ingrese valores numericos validos"); 
        const CONTENEDOR = document.getElementById("contenedor_de_resultados") as HTMLElement; 
        if (CONTENEDOR) {
            CONTENEDOR.innerHTML = `<p>Error: Ingrese valores numéricos válidos.</p>`;
        }
        return; 
    }

    // FORMULA PARA REALIZAR EL PROMEDIO YA QUE LOS ELEMENTOS HAN SIDO TRANSFERIDOS A NUMEROS 

    const RESULTADO = (CAMPO_UNO + CAMPO_DOS + CAMPO_TRES) / 3; 
    const CONTENEDOR = document.getElementById("contenedor_de_resultados") as HTMLElement; 
    if (CONTENEDOR) {
        CONTENEDOR.innerHTML = `<p>El promedio de los numeros es: ${RESULTADO.toFixed(2)}</p>`; 
    }else {
        console.error("El contenedor de resultados no se encontró.");
    }

})
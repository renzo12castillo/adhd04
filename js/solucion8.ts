const BTN_DET_PERFECTO = document.getElementById('btn_det_perfecto') as HTMLButtonElement; 
let numeroIngresado = document.getElementById('txt_perfecto') as HTMLInputElement; 
const CONTENEDOR = document.getElementById('contenedor_de_resultados') as HTMLElement; 

function esNumeroPerfecto(n: number): boolean {
    if (n <= 1 || !Number.isInteger(n)) {
        return false; 
    }
    let suma = 0; 
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            suma += i;
        }
    }
    return suma === n; 
}

BTN_DET_PERFECTO?.addEventListener('click', ()=>{
    const VALOR = parseInt(numeroIngresado.value); 

    if (isNaN(VALOR)){
        CONTENEDOR.textContent = "Por favor ingrese un numero valido"; 
        return;
    }
    const NUMERO_PERFECTO = esNumeroPerfecto(VALOR); 

    CONTENEDOR.textContent = NUMERO_PERFECTO 
    ? `${VALOR} es un numero perfecto`
    : `${VALOR} no es un numero perfecto`; 
}); 
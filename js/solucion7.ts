const BTN_CALCULAR = document.getElementById('btn_calcular') as HTMLButtonElement; 
let numeroFactorial = document.getElementById('txt_factorial') as HTMLInputElement; 

function factorial(n: number): number {
    if (n < 0) {
        throw new Error("El factorial no puede ser un numero negativo"); 
    }
    let resultado = 1; 
    for (let i = 2; i <= n; i++) {
        resultado *= i; 
    }
    return resultado; 
}

BTN_CALCULAR?.addEventListener('click', ()=>{
    const CONTENEDOR = document.getElementById('contenedor_de_resultados') as HTMLElement; 
    let conversionNumero = parseFloat(numeroFactorial.value); 
    let operacionFactorial = factorial(conversionNumero); 

    CONTENEDOR.innerHTML = `El resultado es ${operacionFactorial}`;
})
const BTN_VERIRF_PRIMO = document.getElementById('btn_det_primo') as HTMLButtonElement; 
let ingresarNumero = document.getElementById('txt_primo') as HTMLInputElement; 
const CONTENEDOR = document.getElementById('contenedor_de_resultados') as HTMLElement; 

function determinarPrimo(n: number): boolean {
    if(n <= 1 || n % 1 !== 0) return false; 
    if(n === 2) return true; 
    if(n % 2 === 0) return false; 

    const LIMITE = Math.sqrt(n); 

    for(let i = 3; i <= LIMITE; i += 2){
        if(n % i === 0 ) return false; 
    }
    return true; 
}

BTN_VERIRF_PRIMO?.addEventListener('click', ()=> {
    const VALOR_CONV = parseInt(ingresarNumero.value); 

    if(isNaN(VALOR_CONV)){
        CONTENEDOR.textContent = "Por favor ingrese caracteres validos"; 
        return; 
    }
    const NUMERO_PRIMO = determinarPrimo(VALOR_CONV); 

    CONTENEDOR.textContent = NUMERO_PRIMO
    ?`${VALOR_CONV} es un numero primo`
    :`${VALOR_CONV} no es un numero primo`; 
}); 
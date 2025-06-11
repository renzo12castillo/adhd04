const BTN_ELEVAR = document.getElementById("btn_elevar") as HTMLButtonElement;
let base = document.getElementById("txt_base") as HTMLInputElement;
let exponente = document.getElementById("txt_exponente") as HTMLInputElement;

const CONTENEDOR = document.getElementById("contenedor_de_resultados") as HTMLElement;

BTN_ELEVAR?.addEventListener('click', () => {
    const BASE_FILTRO = parseFloat(base.value);
    const EXPONENTE_FILTRO = parseFloat(exponente.value);
    
    let elevar = BASE_FILTRO ** EXPONENTE_FILTRO;
    CONTENEDOR.innerHTML = `El resultado de la potencia es: ${elevar}`;
})
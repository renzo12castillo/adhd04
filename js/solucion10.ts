const BTN_CONTAR_VOCALES = document.getElementById('btn_find_vocales') as HTMLButtonElement; 
let extraerTexto = document.getElementById('txt_parrafo') as HTMLInputElement; 
const BLOQUE_TEXTO = document.getElementById('contenedor_de_resultados') as HTMLElement; 

function contarVocales(texto: string): number {
    const VOCALES = ['a', 'e', 'i', 'o', 'u']; 
    let contador = 0; 

    for (const LETRA of texto.toLocaleLowerCase()){
        if(VOCALES.includes(LETRA)) {
            contador++;
        }
    }
    return contador; 
}

BTN_CONTAR_VOCALES?.addEventListener('click', ()=> {
    const TEXTO = extraerTexto.value; 
    const CANTIDAD = contarVocales(TEXTO); 

    BLOQUE_TEXTO.textContent = `El texto tiene ${CANTIDAD} vocal${CANTIDAD !== 1 ? 'es' : ''}.`;

    
});
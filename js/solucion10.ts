const BTN_CONTAR_VOCALES = document.getElementById('btn_find_vocales') as HTMLButtonElement; 
const BLOQUE_TEXTO = document.getElementById('contenedor_de_resultados') as HTMLElement; 

function contarVocales(texto: string): number {
    const VOCALES = ['a', 'e', 'i', 'o', 'u']; 
    let contador = 0; 

    for (const LETRA of texto.toLocaleLowerCase()){
        if(VOCALES.includes(LETRA)) {
            contador 
        }
    }
}
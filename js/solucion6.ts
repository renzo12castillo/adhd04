const BTN_INVERTIR = document.getElementById("btn_invertir") as HTMLButtonElement;
let texto = document.getElementById('txt_parrafo') as HTMLInputElement;
const CONTENEDOR = document.getElementById('contenedor_de_resultados') as HTMLElement; 

function invertirTexto (texto: string): string {
    return texto.split('').reverse().join('');
}

BTN_INVERTIR?.addEventListener('click', ()=>{
    const TEXTO_ORIGINAL = texto.value; 
    const TEXTO_INVERTIDO = invertirTexto(TEXTO_ORIGINAL);
    CONTENEDOR.innerHTML = `<p>${TEXTO_INVERTIDO}</p>`; 
})
const BTN_ENCONTRAR = document.getElementById("btn_encontrar") as HTMLButtonElement; 
let numeroUno = document.getElementById("txt_uno") as HTMLInputElement; 
let numeroDos = document.getElementById("txt_dos") as HTMLInputElement; 
let numeroTres = document.getElementById("txt_tres") as HTMLInputElement; 

BTN_ENCONTRAR?.addEventListener('click', ()=>{
    const UNO_FILTRADO = parseFloat(numeroUno.value); 
    const DOS_FILTRADO = parseFloat(numeroDos.value);
    const TRES_FILTRADO = parseFloat(numeroTres.value); 

    const MAYOR = Math.max(UNO_FILTRADO, DOS_FILTRADO, TRES_FILTRADO);
    const MENOR = Math.min(UNO_FILTRADO, DOS_FILTRADO, TRES_FILTRADO);
    const CONTENEDOR = document.getElementById("contenedor_de_resultados") as HTMLElement; 

    CONTENEDOR.innerHTML = `<p>El numero mayor es ${MAYOR} y el numero menor es ${MENOR}</p>`;

    }
)
const BTN_CALCULAR_AREA = document.getElementById("btn_calcular_promedio") as HTMLButtonElement; 
let base = document.getElementById("txt_base") as HTMLInputElement; 
let altura = document.getElementById("txt_altura") as HTMLInputElement; 

BTN_CALCULAR_AREA?.addEventListener('click', ()=> {

    const BASE_CONV = parseFloat(base.value); 
    const ALTURA_CONV = parseFloat(altura.value); 

    if (isNaN(BASE_CONV) || isNaN(ALTURA_CONV)){
        console.error("Por favor ingrese valores numericos validos e intente nuevamente"); 
        const CONTENEDOR = document.getElementById("contenedor_de_resultados") as HTMLElement; 
        if (CONTENEDOR){
            CONTENEDOR.innerHTML = `<p>Error: Ingrese valores numéricos válidos.</p>`;
        }
        return; 
    }

    const RESULTADO = (BASE_CONV * ALTURA_CONV) / 2; 
})
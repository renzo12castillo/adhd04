const BTN_DETERMINAR = document.getElementById("btn_determinar_numero") as HTMLButtonElement; 
let numero = document.getElementById("txt_num_par_inpar") as HTMLInputElement; 

BTN_DETERMINAR?.addEventListener('click', ()=>{

    const CONVERSION = parseFloat(numero.value);

    if (isNaN(CONVERSION)){
        console.error ("Ingreso un dato invalido, verifique e intente nuevamente"); 
        const CONTENEDOR = document.getElementById("contenedor_de_resultados") as HTMLElement;

        if(CONTENEDOR){
            CONTENEDOR.innerHTML = `<p>Error: Ingrese valores numéricos válidos.</p>`;
        }
        return;
    }

    const CONTENEDOR = document.getElementById("contenedor_de_resultados") as HTMLElement;
    if (CONVERSION % 2 === 0){
        CONTENEDOR.innerHTML = `<p>${CONVERSION} es un numero par</p>`;
    } else {
        CONTENEDOR.innerHTML = `<p>${CONVERSION} es un numero impar</p>`; 
    }

    
})
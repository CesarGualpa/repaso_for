function ejercicio1(){
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }
}

function mostrar(opcion){
    switch(opcion){
        case 1:
            ejercicio1();
            break;

        default:
            console.log("Opción no válida");
    }
}
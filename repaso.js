function ejercicio1(){
    for(let i = 1; i <= 5; i++){
        console.log(i);
    }
}

function ejercicio2(){
    for(let i = 2; i <= 10; i+=2){
        console.log(i);
    }
}

function ejercicio3(){
    for(let i = 10; i >= 1; i--){
        console.log(i);
    }
}

function mostrar(opcion){
    switch(opcion){
        case 1:
            ejercicio1();
            break;
        case 2:
            ejercicio2();
            break;
        case 3:
            ejercicio3();
            break;
        default:
            console.log("Opción no válida");
    }
}
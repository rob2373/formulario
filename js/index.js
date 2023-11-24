var  bandera = false;

function validar(){
    if(bandera){
        console.log("Validación completa");

    }
}
function correctCaptcha() {
    console.log("Captacha resulto correctamente")
    bandera = true;
}
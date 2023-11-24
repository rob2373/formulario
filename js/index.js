var  bandera = false;

function validar(){
    /* alert($("#user").val());
    alert($("#password").val()); */
    if(bandera){
        console.log("Validación completa");

    }

    function correctCaptcha() {
        console.log("Captacha resulto correctamente")
        bandera = True;
    }

}
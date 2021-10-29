let registros = [];
function validar_captcha(rcaptcha) {
if (rcaptcha == 5) {
    return true
} 
else {
    return false
}
}
function iniciar_sesion(usuario, contrasena, rcaptcha) {
let buscar_u = registros.find(element => element.usuario == usuario);
if (buscar_u != undefined && validar_captcha(rcaptcha) != false){
    if (buscar_u.contrasena == contrasena){
        return true
    } 
    else {
        return false
    }
}
else {
    return false
}
}
function agregarRegistro(){
    var usuario = document.getElementById("in_nombre_usuario").value;
    var contrasena= document.getElementById("in_contrasena").value;
    var confirmar_contrasena=document.getElementById("in_confirmar_contrasena").value;
    
    var datos={
    "usuario":usuario,
    "contrasena":contrasena,
    "confirmar_contrasena":confirmar_contrasena,
    }
    registros.push(datos);
    
}
module.exports.registros = registros;
module.exports.validar_captcha = validar_captcha;
module.exports.iniciar_sesion = iniciar_sesion;
module.exports.agregarRegistro = agregarRegistro;
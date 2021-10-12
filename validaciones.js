
function validar_nombre_usuario(string)
{
    const nombre_usuario=document.getElementById("in_nombre_usuario").value;
    if (nombre_usuario.lenght > 6 && nombre_usuario.lenght < 30 && /^\s+$/.test(nombre_usuario))
    {
        return true;
    }else
    {
        return true;
    }
}

function validar_contrasena(string)
{
    const in_contrasena=document.getElementById("in_contrasena")
    if (in_contrasena.lenght >= 6 && /^\s+$/.test(in_contrasena ) && /^[0-9]+$/.test(in_contrasena))
    {
        return false;
    }else
    {
        return true;
    }       
}

function confirmar_contrasena(stringA, stringB)
{
    const confir_contrasena=document.getElementById("in_confirmar_contrasena").value;

}

module.exports.validar_nombre_usuario=validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.confirmar_contrasena=confirmar_contrasena;
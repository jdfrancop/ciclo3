
let registros = [];

function agregarRegistro()
{
    var usuario=document.getElementById('in_nombre_usuario').value;
    var contrasena=document.getElementById('in_contrasena').value;
    var confirmar_contrasena=document.getElementById('in_confirmar_contrasena').value;

    var datos=
    {
        'usuario':usuario,
        'contrasena':contrasena,
        'confirmar_contrasena':confirmar_contrasena
    }
    console.log(datos);
    registros.push(datos);

}

function OrdenarArreglo(arreglo)
{
    arreglo.sort((a, b) => {
        const usuario1 = a.usuario;
        const usuario2 = b.usuario;
        if (usuario1 < usuario2) {
        return -1;
        }
    
        if (usuario1 > usuario2) {
        return 1;
        }
    
        return 0;
    });
    return arreglo;   
}
module.exports.registros=registros;
module.exports.OrdenarArreglo=OrdenarArreglo;
module.exports.agregarRegistro=agregarRegistro;
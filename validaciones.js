
function validar_nombre_usuario(string) {

    //console.log(valor);
    let validacion = /^[a-zA-Z]{6,30}$/.test(string);
    if (validacion === true) {
      //console.log(validacion);
      return true;
    } else {
      // console.log(validacion);
      return false;
    }
  
  }
  
  function validar_contrasena(string) {
    let validacion = /^[a-zA-Z0-9\_\-]{4,16}$/.test(string);
    if (validacion === true) {
      //console.log(validacion);
      return true;
    } else {
      // console.log(validacion);
      return false;
    }
  }
  
  function confirmar_contrasena(stringA, stringB) {
  
    if (stringA === stringB) {
      return true;
    } else {
      return false;
    }
  }
  
  module.exports.validar_nombre_usuario = validar_nombre_usuario;
  module.exports.validar_contrasena = validar_contrasena;
  module.exports.confirmar_contrasena = confirmar_contrasena;

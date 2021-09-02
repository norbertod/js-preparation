//Calcular la suma de todos los números pares que se encuentren entre el 10 y el 50.

var creaFuncion = function() {
    var arreglo = [];

    for (var i=0; i < 3; i++) {
      arreglo.push(
        function(){
          console.log(i);
        }
      )
    }
    return arreglo;
  }

 var arr = creaFuncion();
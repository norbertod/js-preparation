function concatenar(){
	string_to_return = [];
	for (var i=0; i < arguments.length; i++){
		string_to_return += arguments[i];
	}
	return string_to_return
}

function invocarFunciones(){
	var string = [];
	for (var i=0; i < arguments.length; i++){
		string += arguments[i]();
	}
	return string;
}

function creadorDeIncrementos(incremento){
	  return numero => numero + incremento;
}

function invocacionUnica(func){
	var ejecuto = false, solo_una;
    return function() {
        if (ejecuto) return solo_una;
        ejecuto = true;
        return solo_una = func.call(this);
    }
}

function objetoConClousure(){
	var valor = 0;
	var obj = {
		//valor : 0,
		incremento : function(){
			valor += 1;
		},
		incrementoPor10 : function(){
			valor += 10;
		},
		pedirValor : function(){
			return valor;
		},
		cambiarValor : function(nuevo){
			valor = nuevo;
		}
	}
	return obj;
}

function ListaDeFuncionesInvitados(invitados, codigo){
	var array = [];
	for (var i=0; i < invitados.length; i++){
		array.push((function(j){
				return function(cod){
					if (cod === codigo){
						return invitados[j];
					}else {
						return 'código secreto: invalido';
					}
				}
			}(i))
		)
	}
	return array;
}

function armarListaDeInvitados(funcionesInvitados, codigoSecreto){
	var array_list_invitados = [];
	for (var i=0; i < funcionesInvitados.length; i++){
		array_list_invitados[i] = funcionesInvitados[i](codigoSecreto);
	}
	return array_list_invitados;
}
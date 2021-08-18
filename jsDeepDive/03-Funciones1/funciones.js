/*function crearCalculadora() {
  this.resultado = 0;
  this.valor = function(){return this.resultado};
  this.sumar = function(cantidad){this.resultado += cantidad};
  this.restar = function(cantidad){this.resultado -= cantidad};
  this.reset = function(){this.resultado = 0};
}*/

var obj = {
	resultado : 0,
	valor : function(){
		return this.resultado;
	},
	sumar : function(cantidad){
		this.resultado += cantidad;
	},
	restar : function(cantidad){
		this.resultado -= cantidad;
	},
	reset : function(){
		this.resultado = 0;
	}
}

function crearCalculadora(){
	obj.reset();
	return obj;
}
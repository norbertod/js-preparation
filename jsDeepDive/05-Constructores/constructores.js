function CalculadoraNPI(){
	this.lista = [];
	this.parcial = 0;
};

CalculadoraNPI.prototype.agregar = function(numero){ 
    this.lista.push(numero);
};

CalculadoraNPI.prototype.sumar = function(){
    if (this.lista.length > 1){
    	let suma = this.lista.pop() + this.lista.pop();
    	this.parcial = suma;
    	this.lista.push(suma);
    }else throw "La calculadoraNPI necesita por lo menos 2 números";
};

CalculadoraNPI.prototype.restar = function(){
	if (this.lista.length > 1){
		let restando1 = this.lista.pop();
		let resta = this.lista.pop() - restando1;
		this.parcial = resta;
		this.lista.push(resta);
	}else throw "La calculadoraNPI necesita por lo menos 2 números";
};

CalculadoraNPI.prototype.multiplicar = function(){ 
    if (this.lista.length > 1){
    	let multiplicacion = this.lista.pop() * this.lista.pop();
    	this.parcial = multiplicacion;
    	this.lista.push(multiplicacion);
    }else throw "La calculadoraNPI necesita por lo menos 2 números";
};

CalculadoraNPI.prototype.dividir = function(){
	if (this.lista.length > 1){
		let divisor = this.lista.pop();
		let division = this.lista.pop() / divisor;
		this.parcial = division;
		this.lista.push(division);
	}else throw "La calculadoraNPI necesita por lo menos 2 números";
};

CalculadoraNPI.prototype.valor = function(){
	return this.parcial;
};
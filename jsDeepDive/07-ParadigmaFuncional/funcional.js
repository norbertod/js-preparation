var duplicar = num => num * 2;

function map(array, funcion){
	var maped = [];
	for (let i=0; i < array.length; i++){
		maped.push(funcion(array[i]));
	}
	return maped;
}

function filter(array, funcion){
	var filtered = [];
	for (let i=0; i < array.length; i++){
		if (funcion(array[i])) filtered.push(array[i]);
	}
	return filtered;
}

function contains(array, element){
	if (typeof(array) === 'object'){
		let values = Object.values(array);
		for (let i=0; i < values.length; i++){
			if (values[i] === element) return true;
		}
	}
	return false;
}

function cuentaPalabras(string){
	var sentences = [];
	string = string.replace (/[ ]+/g," "); // con esto quito espacios en blanco repetidos, sino los cuenta como palabras.
	sentences = string.split(' ');
	return sentences.length;
}

function reduce(array, inic, funcion){
	var resultado = inic;
	if (Number.isInteger(array)){
		resultado = funcion(array);
	}
	for (var i=0; i < array.length; i++){
		resultado = funcion(resultado, array[i]);
	}
	return resultado;
}

function suma(array){
	var suma = (a,b) => a + b;
	return reduce(array, 0, suma);
}

function cuentaPalabrasReduce(total, string){
	return total + cuentaPalabras(string);
}

function every(array, funcion){
	for (let i=0; i < array.length; i++){
		if (reduce(array[i], true, funcion) === false) return false; 
		//if (funcion(array[i]) === false) return false;
	}

	return true;
}

function any(array, funcion){
	for (let i=0; i < array.length; i++){
		if (reduce(array[i], false, funcion)) return true; 
		//if (funcion(array[i]) === false) return false;
	}

	return false;
}
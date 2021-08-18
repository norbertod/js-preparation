var saludar = (nombre = "") => {
	if (nombre != ""){
		nombre = ", " + nombre;
	}
	return ("Hola" + nombre + "!");
}

var sumar = (a, b) => a + b;
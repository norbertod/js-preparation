function factorial(num, fact=1){
	if (num === 0) return fact;
	fact *= num;
	num -= 1;
	return factorial(num, fact);
}

function factorialIterativo(num){
	if (num === 0) return 1;
	var fact = 1;
	while (num > 0){
		fact *= num;
		num -= 1;
	}
	return fact;
}

function fib(numero){
	if (numero <= 1) return 1;
	return fib(numero - 1) + fib(numero - 2);
}

//refinando la funcion queda como la de arriba, con razon la formula fib(n)*2-1 veces

/*function fib(pos, sec = 1, ult = 1, penult = 0){
	if (sec === pos || pos === 0 || pos === 1) return (ult + penult);
	var numero = ult + penult;
	penult = ult;
	ult = numero;
	sec += 1;
	return fib(pos, sec, ult, penult);
}*/

function factores(num, arr_facts = []){
	if (num === 1) return arr_facts;
	for (var i=2; i <= num; i++){
		if (num % i === 0){
			num = num / i;
			arr_facts.push(i);
			return factores(num, arr_facts);
		}
	}
}
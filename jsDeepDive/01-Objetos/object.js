function setPropsOnObj(obj){
	obj.p = 5;
	obj.javascript = 5;
	obj.proximo = (num=obj.p) => num += 1;
	obj.la = {clave : {secreta : {es : 404}}};
}

function setPropsOnArr(arr){
	arr[0] = 5;
	arr['hola'] = nombre => "Hola!";
	arr['river'] = 'plate';
	arr['doble'] = num => num * 2;
}

function functionObject(){
	functionObject();
}

function setPropsOnFunc(func){
	func.year = "2017";
	func.mitad = num => num / 2;
	func.prototype = {helloWorld : function(){return "Hello World"}};
}
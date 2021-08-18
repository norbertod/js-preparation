describe('Propiedades de un object-literal', function() {
  var obj;
  // `beforeEach` recibe una funcion que corre justo antes de que se ejecute cada test.
  beforeEach(function() {
    // Cada test asigna un object-literal vacío a la variable `obj` declarada mas arriba.
    obj = {}; 
    // La función `setPropsOnObj` es la que tenemos que definir nosotros en nuestro archivo.
    // Va a recibir un objeto vacío (el recién creado) al que le tenemos que agregar las propiedades.
    setPropsOnObj(obj);
  });

  describe('Función `setPropsOnObj`', function() {

    it('agrega la propiedad p con valor 5', function() {
      expect(obj.p).toEqual(5);
    });

    it('agrega la propiedad plataforma también a 5', function() {
      // Podemos acceder a la propiedad con `dot-notation` o con el bracket-notation.
      expect(obj['plataforma']).toEqual(5);
    });

    it("agrega la propiedad 'proximo', con una función que devolverá el próximo valor al pasado por parámetro", function() {
      expect(obj.proximo(4)).toEqual(5);
      expect(obj['proximo'](123)).toEqual(124);
    });

    it('agrega objetos anidados para guardar la clave secreta 404', function() {
      expect(obj.la.clave.secreta.es).toEqual(404);
    });
  });

});

/* 
  Como sabemos los Arreglos también son Objetos, solo que son un caso particular de ellos,
  y por eso tienen algunas propiedades especiales.
  De todas maneras lo que sea que podemos hacer con Objetos lo podemos hacer con Arreglos.
*/
describe('Propiedades de un Objeto de tipo Arreglo', function() {
  var array;

  beforeEach(function() {
    array = [];
    setPropsOnArr(array);
  });

  describe('Función `setPropsOnArr`', function() {
    it('agrega la propiedad `hola` con una función que devuelva `Hola!`', function() {
      expect(array.hola()).toEqual('Hola!');
    });

    it('agrega la propiedad `river` con referencia a `plate`', function() {
      // También podemos acceder a las propiedades con bracket-notation sin problema.
      expect(array['river']).toEqual('plate');
    });

    it('accede al indice `0` del Arreglo', function() {
      expect(array[0]).toEqual(5);
    });

    it('agrega la propiedad `doble` con la función que duplique el parámetro ingresado', function() {
      expect(array.doble(4)).toEqual(8);
      expect(array['doble'](123)).toEqual(246);
    });

  });

});

/*
  ¿Pensaron que pasa entonces con las funciones? Si, también son Objetos y tiene la posibilidad
  de usar todas sus propiedades.
*/
describe('Propiedades en una Función', function() {
  var functionObject;

  beforeEach(function() {    
    functionObject = function() {
      return 'Soy una función con propiedades!';
    };
    
    setPropsOnFunc(functionObject);
  });

  describe('Función `functionObject`', function() {
    it('devuelve correctamente el string que se declaro en el `beforeEach` para `functionObject`', function() {
      expect(functionObject()).toEqual('Soy una función con propiedades!');
    });
  });

  describe('Función `setPropsOnFunc`', function() {
    it('define el año (`year`) de la función a 2017', function() {
      expect(functionObject.year).toEqual('2017');
    });

    it('agrega la propiedad `mitad` con una función que divida el valor ingresado por parámetro a la mitad', function() {
      expect(functionObject.mitad(6)).toEqual(3);
    });

    /*
      Siempre que definimos una función en JavaScript esta tiene propiedades en su estructura similares
      a las de los arreglos, `Array.length` por ejemplo. Entre estas propiedades hay una que es única a las
      funciones llamada `prototype`, es un objeto con un comportamiento particular, pero como todo objeto
      podemos modificarlo a nuestro gusto.
      Por ahora solo vamos a notar su existencia, mas adelante veremos mas a fondo que es lo que hace.
    */
    it('agrega una propiedad al objeto `prototype` que es propio de las funciones', function() {
      expect(functionObject.prototype.helloWorld()).toEqual('Hello World');
    }); 
  });

});


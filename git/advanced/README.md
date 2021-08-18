# Advanced Git

## Ramas o Branches

Hasta ahora podíamos guardar y enviar archivos a nuestro repositorio remoto, pero que pasa si queremos trabajar varias personas en el mismo proyecto? podríamos hacerlo como veníamos haciéndolo, pero tendríamos que ser extremadamente ordenados o acostumbrarnos a que los archivos que se trabajen en conjunto tengan problemas a la hora de combinar el código.

Para evitar estos problemas _git_ tiene un sistema llamado __*branches*__. Un _branch_ es una versión en paralelo de la linea principal de trabajo, se usan principalmente para agregar un feature nuevo, arreglar algun bug, o crear un entorno seguro para experimentar alguna idea nueva.

Finalmente cuando el trabajo esta terminado fusionamos nuestra branch a su original y solo tenemos que lidiar una vez con el llamado '_merge_'.

### Git Branch

Arrancamos como veníamos haciendo para todos los módulos anteriores a trabajar en nuestra carpeta `test`.

Vamos a usar el comando `git branch` para listar las branches existentes en nuestro repositorios.

``` bash
$ git init

$ git branch
```

>Cuando la unica branch es 'master', la branch por defecto, entonces no se va listar nada.

Agreguemos un archivo con algo de contenido sobre el cual podamos trabajar.

``` bash
$ touch hola.js && echo 'console.log("hola como va?")' > hola.js

$ node hola
```
> Pueden agregar el contenido desde el editor de texto si no se sienten cómodos con la consola.

Revisemos el estado con `git status`, deberia aparece el archivo como _Untracked_.

Ahora guardemoslo para tener algo que comparar con una futura _branch_.

``` bash
$ git add hola.js

$ git commit -m 'agrego hola.js'
```

### Git Checkout

Ya tenemos en _master_ contenido guardado, armemos una nueva _branch_ con esta versión del proyecto.

``` bash
$ git checkout -b test
# switched to a new branch 'test'
```

Nuestra _branch_ fue creada con exito y ahora estamos parados en ella, entonces cualquier cambio se mantendra es el entorno de la branch test.

> Si probamos ver el estado con `git status` vemos que la primer linea del output nos dice _`On branch test`_.

Como toda _branch_ se crea para dar algún tipo de funcionalidad o arreglar errores, hagamos una modificación nosotros también.

``` bash
$ echo 'console.log("modificado")' > hola.js

$ node hola
# modificado

$ git status
```

Ya tenemos los cambios y aparece como estado _modified_, vamos a guardarlos en esta branch

``` bash
$ git add hola.js

$ git commit -m 'cambio'
```

Ya que tenemos guardados los cambio podemos volver a la branch 'master'

``` bash
$ git checkout master
```

Veamos como esta la situación acá.

``` bash
$ git status
# On branch master
# nothing to commit, working directory clean
```

No tenemos archivos modificados (logicamente), asique tendríamos que tener los cambios originales del master, veamos.

``` bash
$ node hola
# hola como va?
```

### Git merge

Nuestro próximo paso es juntar las branches para que los cambios que hicimos en la ramificación se reflejen en nuestro código principal, esto lo vamos a hacer con el comando `git merge`

Pero antes una pregunta...

*__¿Qué pasaría si ahora juntáramos las branches 'master' y 'test'?__*

Como `test` surgió de 'master' decimos que _partio de la misma base_. Luego hizo un _commit_ a partir de ese mismo punto.

Entonces lo único que pasaría es que el _commit_ de test se sumaria a la linea de _commits_ de 'master' bajo el nombre de __*fastfoward*__, porque realmente las _branches_ nunca se bifurcaron en la linea de contenido.

Esa seria la solución fácil, pero se van a encontrar con situaciones donde las _branch_ modificaron el mismo archivo separándose de la base en la que se dividieron. Simulemos este caso :)

``` bash
$ echo 'console.log("estoy en el master")' > hola.js

$ node hola

$ git status
```

Ahora tenemos en *master* unos nuevos cambios que **no** están en *test*, y en *test* cambios que **no** están en *master*, por lo que podemos decir que las branches se _bifurcaron_.

Guardemos dichos cambios 

``` bash
$ git add hola.js
$ git commit -m 'cambios en el master'
```

Entonces pensemos, si yo tratara de hacer el _merge_ (union) entre *master* y *test*,¿con cual cambio se deberia quedar git? el archivo `hola.js` ¿debería loggear "estoy en el master" o "modificado"?.

La respuesta es ninguno, git detectaría un `merge conflict` y dejaría al usuario seleccionar entre las lineas de código que fueron modificadas, con cual se quisiera quedar.

Hagamos la prueba practica. 'Mergeamos' *test* desde *master* (estando parados en master)

``` bash
$ git merge test
# Auto-merging hola.js
# CONFLICT (content): Merge conflict in hola.js
# Automatic merge failed; fix conflicts and then commit the result.
```

En la linea 3 del output podemos ver el problema:
`CONFLICT (content): Merge conflict in hola.js`

En estos casos git solo nos va a avisar del problema y tenemos que pasar nosotros a solucionarlo.
Veamos el archivo `hola.js` un poco mas cómodo en el sublime.

``` bash
$ subl hola.js
```

``` javascript
<<<<<<< HEAD
console.log('hola estoy en el master')
=======
console.log("modificado")
>>>>>>> test
```

Como podemos ver tenemos las dos opciones encerradas por unos simbolos de mayor y menor, estos son los separadores que usa git para avisarte que lineas están en conflicto.

La primera parte es la versión que tenemos en el branch en el que estamos parados(en este caso *master*), y la segunda es la versión del branch al que 'pulleamos'(*test*).

Ahora podemos seleccionar que versión queremos que quede y listo.

> No se olviden de borrar los separadores de git, debería quedar solo las lineas de código que nosotros consideremos la ultima versión.

Una vez que terminamos guardamos el archivo, commiteamos los cambios y terminamos con nuestro 'merge'.

``` bash
$ git add hola.js

$ git commit -m 'merge w/test'
```

> Recuerden que master, si bien es la branch principal, es una branch como cualquier otra, y estos pasos pueden ser usados para mergear cualquier branch entre ellas.

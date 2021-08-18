# Git Local

## Instalando Git

Según el SO que tengan, para instalar git sigan una de las siguientes instrucciones:

* [Windows](https://git-for-windows.github.io/)
* [Osx y Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Usando Git

Vamos a poner en practica los conceptos de _git_ con un poco de ejemplos.

Hay una carpeta llamada `test` con 4 archivos, un _html_, un _css_ y dos _js_.
sobre esta carpeta vamos a trabajar, así que abramos la consola en esa direccion.

Uso `ls` para revisar que hay en la carpeta que estoy parado.
``` bash
$ ls
# index.html  index.js  style.css  utils.js
```

Tengo mis archivos, entonces inicialicemos la carpeta como un repositorio de git (podríamos hacerlo aunque la carpeta este vacía).

``` bash
$ git init
# Initialized empty Git repository in /home/cafeparatodos/plataforma5/prep/git/local/test/.git/
```

Excelente! nos dice que se creo el repositorio, ¿que implica eso? que se creo una carpeta oculta `.git` con todos los archivos y configuraciones propias de nuestro repositorio.

### __Estado de los archivo__

El comando `git status` nos va a permitir ver el estado actual de nuestros archivos y el repositorio en si (branch y commits). Va a ser uno de los comandos mas usados, es clave poder tener una instantánea del estado porque casi todo comando de git lo afecta y modifica.

``` bash
$ git status
# On branch master
#
# Initial commit
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#   index.html
#   index.js
#   style.css
#   utils.js
#
# nothing added to commit but untracked files present (use "git add" to track)

```

Un archivo puede pasar por alguno de estos estados del ciclo de vida:

![lifecycle](../img/lifecycle.png)

* __Untracked__: Son archivos nuevos, que no están en ningún snapshot anterior (o sea que nunca fueron comiteados), ni están en el área de preparación (no fueron stageados).
* __Unmodified__: Son archivos que estaban en el snapshot anterior, pero que no sufieron cambios todavía.
* __Modified__: Si modificamos un archivo que estaba en _unmodified_ git lo detectará y lo marcará como _modificado_.
* __Staged__: Si marcamos al archivo modificado como staged, este pasa al área de preparación.

> Cualquier archivo que este en un estado _unmodified_, _modified_ o _stages_, decimos que es un archivo que está __trackeado__.

Entonces ¿Que información podemos sacar de este _output_?

Sabemos que estamos en la _branch_ master (no se preocupen por esto ahora) y como podemos ver todos los archivo están en la tabla de __*untracked files*__ , porque hasta ahora nunca le dijimos a git que los tenga en cuenta. Para cambiar eso vamos a usar un nuevo comando `git add`.

### __Pasando archivos al Stagin Area__

``` bash
$ git add index.html
```

Vemos que al parecer no paso nada porque no hay output, pero en realidad el archivo `index.html` fue agregado al `staging area`. Se tomo la versión actual del archivo agregado y se guardo una copia de este en el listado de archivos listos para commitear.

Si volvemos a correr `git status` vamos a ver el cambio.

``` bash
$ git status
# On branch master
#
# Initial commit
#
# Changes to be committed:
#   (use "git rm --cached <file>..." to unstage)
#
#   new file:   index.html
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#   index.js
#   style.css
#   utils.js
```

`index.html` aparece en la lista de 'Changes to be committed', pero el resto sigue sin estar trackeados, podríamos solucionar eso agregando uno a uno los archivos, o podríamos indicarle que agregue todos los archivos pendientes (suponiendo que queremos conservar todos los cambios).


``` bash
$ git add .
```

Uso `git add .` para agregar todos los archivos, fíjense que uso el `.` para agregar todos los archivos de **la carpeta en la que estoy parado**, si estuviera parado en una carpeta mas adentro y quisiera agregar todos los archivos del repositorio y no solo esa carpeta puedo usar el asterisco `*`.

``` bash
$ git status
# On branch master
#
# Initial commit
#
# Changes to be committed:
#   (use "git rm --cached <file>..." to unstage)
#
#   new file:   index.html
#   new file:   index.js
#   new file:   style.css
#   new file:   utils.js
```

Ahora que vemos que todos nuestros cambios están en el stagin area listos para commitear vamos a guardarlos en la base de datos local.

El comando de commit recibe un flag `-m` de _message_ y un argumento que indica cual es el mensaje que se le asigna al commit explicando cuales fueron los cambios.

### __Guardando nuestros cambios__

``` bash
$ git commit -m "testing commit"
# [master (root-commit) a267c95] testing commit
#  4 files changed, 18 insertions(+)
#  create mode 100644 index.html
#  create mode 100644 index.js
#  create mode 100644 style.css
#  create mode 100644 utils.js
```

4 archivos fueron cambiados y 18 'insertions' (indica cuantas lineas se modificaron) dice en nuestro output por lo el commit fue exitoso. Hay bastante información que pueden sacar de las respuestas de git, con la practica van a llegar a entender todos las posibles opciones.

Ahora que guardamos esta versión de nuestro programa, ¿Cual es el estado de git?

``` bash
$ git status
# On branch master
# nothing to commit, working directory clean
```

Lógicamente no hay cambios que no hayamos guardado por lo que no tenemos nada para commitear, ni archivos modificados.

Hasta ahora vimos archivos _untracked_ y archivos creados (_new file_), ahora modifiquemos alguno para ver el estado, _modified_.

> Entren con sublime y modifiquen el string del `console.log()` de index.js

``` bash
$ git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#   modified:   index.js
#
# no changes added to commit (use "git add" and/or "git commit -a")
```

Ahora `index.js` aparece como un archivo modificado, podríamos agregarlo con `git add index.js`, pero ¿qué pasa si nos arrepentimos de esos cambios y queremos volver al estado del commit anterior? La respuesta esta en el output anterior, vamos a usar `git checkout` 

### __Borrando cambios y archivos__

``` bash
$ git checkout index.js
```

Si no tenemos output entonces todo salio bien! Veamos como esta el estado de nuestro repositorio.

``` bash
$ git status
# On branch master
# nothing to commit, working directory clean
```

Ya no hay cambios, entonces revisen el archivo que modificaron, debería haber vuelto a la versión anterior.

El hecho de que git pueda modificar archivos y llevarlos a la versiones anteriores es gracias a que guarda cada commit de el repositorio, esto lo hace muy poderoso porque siempre vamos a poder volver a distintas instancias de nuestro programa sin problemas.

Pero pensándolo mejor no quiero ni la versión anterior de este archivo, quiero borrarlo así que voy a usar el comando `git rm index.js`

``` bash
$ git rm index.js
# rm 'index.js'
```

El archivo ya no esta mas en nuestra carpeta

``` bash
$ ls
# index.html  style.css  utils.js
```

¿Y en git?

``` bash
$ git status
# On branch master
# Changes to be committed:
#   (use "git reset HEAD <file>..." to unstage)
#
#   deleted:    index.js
#
```

Vemos que hay nuevo tipo de estado, el _deleted_, que indica cuando un archivo fue borrado, para que esto pase a nuestra próxima versión vamos a tener que commitearlo.

>Noten que no tengo que agregarlo con `git add`, esa es la diferencia entre hacer `git rm` o solo `rm` con la consola.

``` bash
$ git commit -m 'index.js deleted'
# [master f97ee24] index.js deleted
#  1 file changed, 3 deletions(-)
#  delete mode 100644 index.js
```

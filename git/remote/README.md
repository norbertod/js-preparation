# Git - Trabajando con Remotos

![Git](../img/gitLogo.png)

Para poder colaborar en cualquier proyecto Git, necesitamos saber cómo gestionar nuestros repositorios remotos. __Los repositorios remotos son versiones de tu proyecto que se encuentran alojados en Internet o en algún punto de la red__. Colaborar con otros implica gestionar estos repositorios remotos, y mandar (__push__) y recibir (__pull__) datos de ellos cuando necesitemos compartir cosas.

## __GitHub__

Lo primero que tenemos que hacer es registrarnos en [GitHub](https://github.com/join).

GitHub es una javascript de desarrollo colaborativo, es gratuita y te permite guardar repositorios de git para trabajar de manera distribuida solo o con tu equipo.

### Nuevo repositorio

Para ver como funciona vamos a crear un [nuevo](https://help.github.com/articles/creating-a-new-repository/) repositorio personal. 

1- Arriba la derecha, haciendo click en el signo `+` y opción `New Repository`vamos a ir al menú de nuevos repositorios.

2- Seleccionamos el nombre para nuestro repositorio.

3- Todos los repositorios son públicos salvo que tengas una cuenta privada.

> Podemos agregar una licencia para nuestro proyecto o un .gitignore que te permite agregar un listado de archivos que quieras que git ignore a la hora de guardar tus cambios, pero no es importante que se preocupen por eso por ahora.

4- `Create Repository` para finalizar.

### Vinculando repositorios

Una vez creado el _repositorio_, al estar vacío, git nos da unas recomendaciones de como arrancar, nosotros vamos a optar por la opción de crear un repositorio local y vincularlo al remoto.

Pero primero agreguemosle un `README.md`, un archivo de texto, o mejor dicho _markdown_, que se muestra por defecto si abrimos el repositorio en GitHub y se usa generalmente para explicar de que se trata el proyecto y como usarlo (de ser software).

Para esto entren al link de 'README' que aparece en el sector de 'Quick Setup', y agreguemos una pequeña descripción.

Una vez que hayamos seteado nuestro repositorio remoto, pasemos a trabajar en el local, abramos la consola en la carpeta de trabajo `test` e inicialicemos el repositorio.

``` bash
$ git init
# Initialized empty Git repository in /home/cafeparatodos/javascript/prep/git/remote/test/.git/

```

Ahora queremos relacionarlo este repositorio(vació) al remoto en GitHub, para esto vamos a usar el comando `git remote`.

### Git Remote

Veamos que remotos tenemos asociados a este repositorio local

``` bash
$ git remote -v
```

Como no hubo output eso significa que no hay ninguna relación, así que creemos la nuestra. Usando `git remote add` vamos a poder hacer la vinculación.

``` bash
$ git remote add origin https://github.com/dvelezroman/test.git
```

Como podemos ver este comando tiene varios argumentos, `origin` es el nombre que con el que vamos a asociar nuestro remoto, es el nombre por convencion, pero podemos poner cualquier nombre que lo represente. Vamos a usar este nombre cuando nos conectemos con el servidor así que no se lo olviden! (aunque pueden buscarlo siempre en `git remote -v`).

El siguiente argumento es la dirección de el remoto, en mi caso es mi cuenta de github y el nombre del repositorio es 'test'.

Para ver si el vinculo se produjo correctamente volvemos a correr `git remote -v`.

``` bash
$ git remote -v
# origin  https://github.com/dvelezroman/test (fetch)
# origin  https://github.com/dvelezroman/test (push)
```

Genial, ya tenemos nuestros repositorios vinculados para ida y vuelta de información.

### Git Pull

Ahora ¿Cual es la diferencia entre ambos repositorios? Que al local le falta el `README.md`! Cambiemos eso, vamos a usar el comando `git pull` pasando como argumento `origin` haciendo referencia al repositorio remoto (o el nombre que le hayan puesto) y luego `master` para especificarle que queremos la 'branch' principal del proyecto (no se preocupen por eso ahora).

``` bash
$ git pull origin master
```

Para poder identificar quien es el usuario que esta conectándose a GitHub tenemos que configurar nuestra cuenta.

>remplacen 'username' por su usuario y 'mail' por su mail registrado en GitHub

``` bash
$ git config --global user.name username
$ git config --global user.email mail
```

Finalmente deberíamos llegar a un output de este estilo.

``` bash
$ git pull origin master
# remote: Counting objects: 3, done.
# remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
# Unpacking objects: 100% (3/3), done.
# From https://github.com/dvelezroman/test
#  * branch            master     -> FETCH_HEAD
#  * [new branch]      master     -> origin/master
```

Una linea clave de este output es `Unpacking objects: 100% (3/3), done.`, nos confirma que el `pull` salio como esperábamos y tenemos nuestro repositorio local igual al remoto (podemos comprobarlo en nuestra carpeta test).

### Git Push

Así como podemos traer información de nuestro remoto también podemos enviar, y lo vamos a hacer con el comando `git push`.

Vamos a hacer un cambio en el `README.md` y despues agregar un nuevo archivo.

``` bash
$ touch app.js  //creo el archivo
$ echo 'console.log("Hola")' > app.js  // agrego un comando al archivo(tambien pueden usar sublime)
```

Si vemos el estado actual de nuestro repositorio, están los cambios.

``` bash
$ git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#   modified:   README.md
#
# Untracked files:
#   (use "git add <file>..." to include in what will be committed)
#
#   app.js
#
# no changes added to commit (use "git add" and/or "git commit -a")

```

Ahora tenemos un archivo no guardado y uno no 'trackeado', guardemos los cambios como sabemos hacerlo.

``` bash
$ git add *
$ git commit -m 'cambio README y agrego app.js'
# [master 99187e6] cambio README y agrego app.js
#  2 files changed, 2 insertions(+), 1 deletion(-)
#  create mode 100644 app.js
```

Ahora nuestro repositorio local esta guardado con la ultima versión disponible, pero si vemos el repositorio remoto de GitHub sigue con la versión anterior. Esto se debe a que son 2 repositorios aislados, que si bien estan vinculados entre ellos, no significa que los cambios se hagan automaticamente.

Vamos a copiar nuestro repositorio local hacia el remoto. Usamos el comando `git push` y como argumento pasamos el nombre que le pusimos al remoto (en mi caso 'origin') y luego la _branch_ que estamos trabajando (por defecto 'master').

``` bash
$ git push origin master
```

>Nos va a pedir _username_ y _password_ para ver si tenemos permitido modificar este repositorio.

``` bash
$ git push origin master
# Username for 'https://github.com': dvelezroman
# Password for 'https://dvelezroman@github.com': 
# Counting objects: 4, done.
# Delta compression using up to 4 threads.
# Compressing objects: 100% (2/2), done.
# Writing objects: 100% (4/4), 345 bytes | 0 bytes/s, done.
# Total 4 (delta 0), reused 0 (delta 0)
# To https://github.com/dvelezroman/test
#    6d51e91..99187e6  master -> master
```


Si ahora pasamos a GitHub en el browser, debería haber actualizado los cambios y los repositorios se deberían ver iguales.

### Git Clone

Nos va a pasar que no siempre empezamos nosotros un repositorio desde cero, muchas veces queremos arrancar con un repositorio ya existente, para eso podemos usar `git clone`, con este comando vamos a poder generar automáticamente un repositorio local completamente igual al remoto y ya vinculados entre si. 

Entonces salgamos de la carpeta test y borremosla.

``` bash
$ cd ..
$ rm -r test
```

Y ahora clono el repositorio que esta en GitHub ya armado.

``` bash
$ git clone https://github.com/dvelezroman/test
# Cloning into 'test'...
# remote: Counting objects: 7, done.
# remote: Compressing objects: 100% (3/3), done.
# remote: Total 7 (delta 0), reused 4 (delta 0), pack-reused 0
# Unpacking objects: 100% (7/7), done.
# Checking connectivity... done.
```

Ahora se nos creo la carpeta test con los archivos que subimos antes, pruébenlo!

``` bash
$ cd test
$ ls
# app.js  README.md
```

Con esos comandos básicos ya podemos guardar las diferentes versiones de nuestro proyecto en un servidor remoto.

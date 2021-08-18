## Comandos Compuestos

### Super User

Todo este tiempo cuando estuvimos enviando comandos lo hicimos bajo nuestro nombre de usuario (a la izquierda del '@'), esto pasa porque en los sistemas UNIX siempre estamos logeados bajo una sesión de usuario y no con el administrador del SO.

Nos va a pasar que cuando queramos realizar una acción que influya a otros usuarios (por ejemplo: instalar programas de manera global o modificar archivos de la carpeta root) nos va a pedir autorización para ejecutar la acción. Para solucionar esto tenemos que ejecutar esos comandos como root user (administrador) usando el programa `sudo`.

`sudo` (**s**uper **u**ser **do**​) es un programa de los sistemas operativos tipo Unix, como Linux o MacOS, que, luego de ingresar la contraseña del sistema, nos permite ejecutar programas con los privilegios de seguridad de otro usuario (normalmente el usuario root) de manera segura, convirtiéndonos temporalmente en _súper usuario_. Se instala por defecto en /usr/bin.

``` bash
$ sudo apt-get install git
```

### Uniendo comandos

* #### concatenación
  
Si quisiéramos ejecutar una serie de comandos y escribirlos todos juntos podemos, usando el operador `&&`

``` bash
$ mkdir carpeta && cd carpeta
```

Este ejemplo nos va a crear una carpeta y luego entrar en ella.

* #### enlaces

el operador `>` nos permite guardar el output de un comando como input a un archivo.

``` bash
$ touch file
$ echo "hello world" > file
$ cat file
# hello world
```

* #### pipes

También podemos hacer que un comando repercuta sobre otro con el operados `|` (pipe), al terminar un comando el segundo va a actuar en base al resultado (output) del primero.

``` bash
$ ps -aux | grep chrome
```

> `ps` lista los procesos activos actuales 

> `grep` filtra resultados en base al argumento pasado y un archivo como argumento, o si no recibe archivo el input que reciba anteriormente.

``` bash
$ grep wor file
# hello world
```

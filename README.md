# App de pruebas Docker 🐳🔥

## Comandos usados ⌨

#### ▪ <u>Imágenes</u> 

|Comando|Notas|
|:----------|:-----------|
|`docker images`|Listar las imágenes existentes en docker.|
|`docker pull NOMBREIMAGEN:TAG`|Descargar una imagen (https://hub.docker.com/).|
|`docker image rm NOMBREIMAGEN:TAG`|Eliminar imagen.|
|``||

#### ▪ <u>Contenedores</u> 

|Comando|Notas|
|:----------|:-----------|
|`docker create NOMBREIMAGEN`|Crear contenedor a partir de imagen (https://docs.docker.com/engine/reference/commandline/create/).|
|`docker create --name NOMBREPERSONALIZADO NOMBREIMAGEN`|Crear contenedor con un nombre personalizado.|
|`docker create -p PUERTOANFITRION:PUERTOCLIENTE NOMBREIMAGEN`|Crear contenedor mapeando puertos, de forma que desde el puerto anfitrión se acceda al puerto cliente.|
|`docker run NOMBREIMAGEN`|Descargar imagen en caso de ser necesario + Crear contenedor + Iniciar contenedor. Se pueden aplicar también los argumentos **--name**, **-p**, etc... *Con el argumento **-d** no muestra el log y lo hace en segundo plano*|
|`docker ps`|Listar los contenedores iniciados.|
|`docker ps -a`|Listar todos los contenedores (iniciados e inactivos).|
|`docker start NOMBRECONTENEDOR`|Iniciar contenedor.|
|`docker stop NOMBRECONTENEDOR`|Parar contenedor.|
|`docker rm -f NOMBRECONTENEDOR`|Eliminar contenedor (-f para forzar en caso de que esté iniciado)|
|`docker logs NOMBRECONTENEDOR`|Mostrar logs del contenedor.|
|`docker logs --follow NOMBRECONTENEDOR`|Mostrar logs permanentemente.|

#### ▪ <u>Redes</u> 

|Comando|Notas|
|:----------|:-----------|
|``||
|``||
|``||
|``||
|``||

## Fuentes 📌

<https://github.com/m4n50n/docker_cheat_sheet>
<https://www.youtube.com/watch?v=4Dko5W96WHg>

💻 _Jose Clemente García Rodríguez_ (<https://github.com/m4n50n>)

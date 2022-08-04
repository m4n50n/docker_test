# App de pruebas Docker 🐳

#### ▪ <u>Imágenes</u> 

#### ***<https://hub.docker.com>***

|Comando|Notas|
|:----------|:-----------|
|`docker images`|Listar las imágenes existentes en docker.|
|`docker pull NOMBRE_IMAGEN:TAG`|Descargar una imagen.|
|`docker image rm NOMBRE_IMAGEN:TAG`|Eliminar imagen.|
|`docker build`|Crear una imagen a partir de un fichero *Dockerfile*|

#### ▪ <u>Contenedores</u> 

|Comando|Notas|
|:----------|:-----------|
|`docker ps`|Listar los contenedores iniciados.|
|`docker ps -a`|Listar todos los contenedores (iniciados e inactivos).|
|`docker create NOMBRE_IMAGEN:TAG`|Crear contenedor a partir de imagen. En caso de no encontrarla, la descargará (https://docs.docker.com/engine/reference/commandline/create/).|
|`docker create --name NOMBREPERSONALIZADO NOMBRE_IMAGEN`|Crear contenedor con un nombre personalizado.|
|`docker create -p PUERTOANFITRION:PUERTOCLIENTE NOMBRE_IMAGEN`|Crear contenedor mapeando puertos, de forma que desde el puerto anfitrión se acceda al puerto cliente.|
|`docker create --network NOMBRE_RED NOMBRE_IMAGEN`|Crear un contenedor asignándole una red.|
|`docker run NOMBRE_IMAGEN`|Descargar imagen en caso de ser necesario + Crear contenedor + Iniciar contenedor. Se pueden aplicar también los argumentos **--name**, **-p**, etc... *Con el argumento **-d** no muestra el log y lo hace en segundo plano*|
|`docker run -e ENVIRONMENT_VARIABLE=valor`|Con el argumento ***-e*** definimos una variable de entorno. Este argumento se pondrá tantas veces como variables de entorno queramos pasar al contenedor.|
|`docker start NOMBRE_CONTENEDOR`|Iniciar contenedor.|
|`docker stop NOMBRE_CONTENEDOR`|Parar contenedor.|
|`docker rm -f NOMBRE_CONTENEDOR`|Eliminar contenedor (-f para forzar en caso de que esté iniciado)|
|`docker logs NOMBRE_CONTENEDOR`|Mostrar logs del contenedor.|
|`docker logs --follow NOMBRE_CONTENEDOR`|Mostrar logs permanentemente.|

#### ▪ <u>Redes</u> 

|Comando|Notas|
|:----------|:-----------|
|`docker network`|Muestra una lista de comandos disponibles para networks.|
|`docker network ls`|Lista todas las redes creadas.|
|`docker network create NOMBRE_RED`|Crear una nueva red.|

## Fuentes 📌

<https://github.com/m4n50n/docker_cheat_sheet>

<https://www.youtube.com/watch?v=4Dko5W96WHg>

💻 _Jose Clemente García Rodríguez_ (<https://github.com/m4n50n>)

# App de pruebas con Docker 🐳

### ◼ Comandos usados:

#### ▪ <u>Imágenes</u> *(**<https://hub.docker.com>**)*

|Comando|Notas|
|:----------|:-----------|
|`docker images`|Listar las imágenes existentes en docker.|
|`docker pull NOMBRE_IMAGEN:TAG`|Descargar una imagen.|
|`docker image rm NOMBRE_IMAGEN:TAG`|Eliminar imagen.|
|`docker build -t NOMBRE_APP:TAG UBICACION_DEL_PROYECTO`|Crear una imagen en base a un fichero *Dockerfile*|

#### ▪ <u>Contenedores</u> 

|Comando|Notas|
|:----------|:-----------|
|`docker ps`|Listar los contenedores iniciados.|
|`docker ps -a`|Listar todos los contenedores (iniciados e inactivos).|
|`docker create NOMBRE_IMAGEN:TAG`|Crear contenedor a partir de imagen. En caso de no encontrarla, la descargará (https://docs.docker.com/engine/reference/commandline/create/).|
|`docker create --name NOMBREPERSONALIZADO NOMBRE_IMAGEN:TAG`|Crear contenedor con un nombre personalizado.|
|`docker create -p PUERTOANFITRION:PUERTOCLIENTE NOMBRE_IMAGEN:TAG`|Crear contenedor mapeando puertos, de forma que desde el puerto anfitrión se acceda al puerto cliente.|
|`docker create --network NOMBRE_RED NOMBRE_IMAGEN:TAG`|Crear un contenedor asignándole una red.|
|`docker create -e ENVIRONMENT_VARIABLE=valor NOMBRE_IMAGEN:TAG`|Con el argumento ***-e*** definimos una variable de entorno. Este argumento se pondrá tantas veces como variables de entorno queramos pasar al contenedor.|
|`docker run NOMBRE_IMAGEN:TAG`|Descargar imagen en caso de ser necesario + Crear contenedor + Iniciar contenedor. Se pueden aplicar también los argumentos de *create*, como **--name**, **-p**, **-e**, etc... *Con el argumento **-d** <u>no muestra el log</u> y lo hace en segundo plano*|
|`docker start/stop NOMBRE_CONTENEDOR`|Iniciar/Parar contenedor.|
|`docker rm -f NOMBRE_CONTENEDOR`|Eliminar contenedor (-f para forzar en caso de que esté iniciado)|
|`docker logs NOMBRE_CONTENEDOR`|Mostrar logs del contenedor.|
|`docker logs --follow NOMBRE_CONTENEDOR`|Mostrar logs permanentemente.|

#### ▪ <u>Redes</u> 

|Comando|Notas|
|:----------|:-----------|
|`docker network`|Muestra una lista de comandos disponibles para networks.|
|`docker network ls`|Lista todas las redes creadas.|
|`docker network create NOMBRE_RED`|Crear una nueva red.|

#### ▪ <u>docker-compose</u> 

|Comando|Notas|
|:----------|:-----------|
|`docker compose up`|Ejecutar docker compose.|
|`docker compose pull`|Actualizar todas las imágenes. `docker compose pull plex` para actualizar una sola (en este ejemplo, plex)|
|`docker compose down`|Eliminar contenedores, imágenes y networks creadas con docker compose.|
|`docker compose -f docker-compose-dev.yml up`|El parámetro **-f** se usa para indicar un fichero *docker-compose* con distinto nombre.|

### ❗❗ Resolución del ejercicio con <u>comandos</u>:
`docker network create red_mongo` // Crear red
`docker run -d -p 27017:27017 --name mongodb --network red_mongo -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=pass mongo` // Crear contenedor mongo
`docker build -t miapp:1 .` // Crear imagen de la aplicación (raíz del proyecto, donde se ubique el fichero *Dockerfile*)
`docker run -d -p 3000:3000 --name miappDocker --network red_mongo miapp:1` // Crear contenedor con la aplicación construida anteriormente

### ❗❗ Resolución del ejercicio con <u>***docker-compose.yml***</u>:
`docker compose up` // Construir contenedor con compose (desde el fichero ***docker-compose-yml***)

Después de esto, en el navegador:
1. http://localhost:3000/ // Endpoint **/** del fichero *index.js*
2. http://localhost:3000/crear // Endpoint **/crear** del fichero *index.js*
3. http://localhost:3000/ // Visualización del registro creado
4. En los logs del contenedor de la aplicación podremos ver los console.logs del fichero *index.js*.

## Fuentes 📌

<https://github.com/m4n50n/docker_cheat_sheet>

<https://www.youtube.com/watch?v=4Dko5W96WHg>

💻 _Jose Clemente García Rodríguez_ (<https://github.com/m4n50n>)

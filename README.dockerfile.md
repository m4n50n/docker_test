#### Notas sobre el fichero Dockerfile 🐳
#### Imagen que usará el contenedor
`FROM NOMBRE_IMAGEN:TAG`

#### Etiquetas que podemos darle al contenedor con el fin de ayudar a organizar las imágenes por proyecto o registrar otro tipo de información
<https://dockerlabs.collabnix.com/beginners/dockerfile/Label_instruction.html>
`LABEL description="This is an image" version=1.0 vendor=user_test`

### Comando que se ejecutará al crear el contenedor
`RUN comando`

#### Copiar ficheros entre anfitrión y cliente al crear el contenedor
`COPY UBICACION_ANFITRION UBICACION_CLIENTE`

#### Exponer el puerto por el que accederemos al servidor
`EXPOSE 3000`

#### Declarar variable de entorno en el contenedor
`ENV NOMBRE_VARIABLE VALOR_VARIABLE`

#### Carpeta de trabajo por defecto del contenedor
`WORKDIR RUTA_ABSOLUTA_CARPETA_TRABAJO`

#### De forma predeterminada, los contenedores se ejecutan como root. Con USER especificaremos un usuario no root. Si el servicio no crea su propio usuario, se podrá crear un usuario y un grupo en Dockerfile.
<http://redhatgov.io/workshops/security_containers/exercise1.2/>
`USER NOMBRE_USUARIO`

#### Archivo <u>.dockerignore</u>. Antes de que docker lea el archivo Dockerfile verificará si existe el archivo .dockerignore. El uso de .dockerignore ayudará a evitar agregar archivos y directorios que no queramos durante la copia de archivos.

#### Comando que se ejecutará siempre que se inicie el contenedor
`CMD comando`

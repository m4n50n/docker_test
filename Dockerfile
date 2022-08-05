# Las siguientes instrucciones se ejecutarán al crear el contenedor
# Imagen que usará el contenedor
FROM node:latest

# Carpeta donde se ubicará el código fuente de la aplicación
RUN mkdir -p /home/app 

# COPY ubicación_anfitrión ubicación_cliente para copiar los ficheros
COPY . /home/app

# Puerto que usará el contenedor
EXPOSE 3000

# Comando que se ejecutará cada vez que se INICIE el contenedor (array formado por el comando y sus argumentos -en el siguiente caso, el comando sería node /home/app/index.js)
# Esto ejecutará al fichero index.js
CMD ["node", "/home/app/index.js"]

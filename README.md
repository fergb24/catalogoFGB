# Musify

Este proyecto trata sobre una lista con nombre de canciones. Aparte del nombre, en cada canción también aparecerá: El título, el género musical yel autor

## Registro Musical

El proyecto contiene un archivo json que contiene varias canciones con sus titulos, genero musical y sus autores

Para poder visualizar todas ellas, basta con que hagamos clic en "Repertorio Musical" y nos saldrá un desglose de todas ellas. Las canciones se pueden filtrar por género

## Instrucciones para poner en marcha la web

1. Primero tendremos que tener instalado "Node.js" y "Angular CLI"
2. Después, tendremos que descargarnos el proyecto y extraerlo donde queramos
3. Una vez tengamos el proyecto, tendremos que abrir una terminal y dirigirnos hacia la ruta raíz del proyecto
4. Ahí, tendremos que poner el comando "npm install"
5. Una vez que se hayan instalado todos los paquetes necesarios, tendremos que instalar json server (si lo tienes ya instalado, no hagas este paso). Para ello, en la terminar windows pondremos "npm install -g json-server"
6. Ahora tendremos que iniciar el servicio, para ello, en la terminal de windows, nos iremos a la raíz del proyecto de nuevo y pondremos "json-server --watch db.json"
7. Y por último, para ejecutar la web, bastará con que en la misma ruta, en otra terminal de windows, ejecutemos el siguiente comando "ng serve"

## Autor

Proyecto creado por Fernando García Bernabé

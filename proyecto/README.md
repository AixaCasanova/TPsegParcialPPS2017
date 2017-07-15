# TPsegParcialPPS2017
Segundo parcial de PPS 2017 IONIC 2
========================================

## Documentación

- Ionic App Id
```json
{
    "app_id": "eb45150c"
}
```

## Login

Login con jwt Firebase: El login está diseñado para que un usuario con correo y password puedan loguearse en el sistema previamente con un rol asignado y se rootea a los diferentes roles que puedan llegar a tener, administrador, administrativo, profesor y alumno.
Se utiliza FirebaseAuth y además hace una validación en un WS de usuarios online.
Cuenta con los botones para ingresar con los usuarios de testing. Además valida que los campos no estén vacios y correspondan a un email y password.

### Tareas

- Generación de estilos de login
- Validación de usuario
- Validación de tipos de datos en campos
- Botones de testing
- Funcionabilidad Firebase jwt
- Funcionabilidad WS jwt
- Traducción en diferentes idiomas según el usuario que inicia sesión.

## Perfíl Profesor

El profesor es el encargado de generar las encuestas con las preguntas correspondientes, para si luego asignarlas a un curso.

### Tareas

- Generacion de estilos de paginas
- Generacion de menus interactivos
- Generacion de toast notification
- Creacion de encuestas con WS
- Asignacion de cursos con WS
- Encuestas dinámicas con los datos que requiera el profesor
- Efectos para agregar preguntas, deslizando el cursor a la izquierda parado sobre la encuesta
- Utilizacion de iconos de Ionic

## Perfíl Administrativo

Visualizará los resultado de los alumnos a través de gráficos realzados con hight-charts y asignara alumnos a cursos.

### Tareas
- Podrá asociar/agregar un alumno a un curso
- Visualizará los resultados en gráficos hight-charts
- Cantidad de Respuestas por pregunta (pudiendo seleccionar cada pregunta)
- Cantidad de encuestas por curso (pudiendo seleccionar 1 o todos los cursos)
- Cantidad de alumnos por curso (pudiendo seleccionar 1 o todos los cursos)

## Perfíl Administrador

Administrara todo los tipos de usuarios, los cursos y comisiones pudiendo realizar las alta, bajas y modificaciones, y el guardado de los cursos en un archivo txt.

### Tareas

- ABM de usuarios (alumnos, profesores, administradores y administrativos)
- ABM de cursos
- ABM de comisiones
- Guardado de cursos en archivo txt

## Perfíl Alumno

El alumno podrá ver las encuestas completadas y pendientes, su ubicación actual y la ubicación fija de la UTN FRA.
Las encuestas Pendientes son aquellas que el usuario todavía no ha realizado.
Las encuestas Completadas son aquellas que el usuario ya terminó.

### Tareas

- Al acceder a encuestas pendientes, se listan las encuestas del curso al que el alumno pertenece. Una vez que se accede a una encuesta se empiezan a mostrar las preguntas, una por una. Una vez finalizada la encuesta se muestra un toast con un mensaje y luego se vuelve a la página de encuestas pendientes.
- Al acceder a encuestas completadas se listan las encuestas que el usuario ya completó. Al acceder a cada encuesta se listan las preguntas y respuestas del alumno.
- Al acceder a Mi ubicacion (geolocalizacion) e podra ubicar en un mapa la ubicacion actual del usuario logueado y si el mismo esta cerca de la UTN FRA visualizara la marca de ubicacion de la facultad.

## Traducciones

La aplicación cuenta con diferentes traducciones. Al iniciar sesión cada usuario tiene asignado un idioma, en base a este cambia todo el idioma de la aplicación.

### Información de cómo se agragaron las traducciones

1. Se instaló el plugin de traducción:
```bash
$ npm install @ngx-translate/core @ngx-translate/http-loader --save
```
2. Se creó la carpeta "assets/i18n".
3. Se crearon los archivos de traduccion es.json y en.json  dentro de la carpeta creada en el paso 1.
4. Se agregaron las traducciones en cada archivo json con sus respectivas traducciones en formato json. Ej:
```json
{
        "titulo": "Mi título",
        "descripcion": "Mi descripción."
}
```
5. Se agregó un algoritmo para detectar el idioma del usuario y en base a este cargar el archivo json correspondiente a traves del TranslateService.

-----------------------

## Los elementos agregados de "FrameWork Ionic"

- PopUp
- Action Sheet

## Plugins utilizados

- $cordovaCamera
- $cordovaBarcodeScanner
- $cordovaVibration
- $cordovaDevice
- $cordovaToast
- $cordovaNativeAudio
- $cordovaGeolocation
- $cordovaFile
- @ngx-translate/core @ngx-translate/http-loader

## Items generales agregados

- Splashscreen personalizada y un icono personalizado diseñado en https://www.canva.com.
- Menús y navegación.
- Servidor Slim(PHP) para el ABM de todas las tablas necesarias.
- Login con distintos perfiles de usuarios, con distintas vistas y atributos.
- Uso de JWT (autentificación).
- Login con action sheet con opciones para cargar los datos de cada perfil en los cuadros de texto.
- ABM de las entidades y listado.
- Distintos permisos por perfiles de usuario.
- 3 gráficos informativos e interactivos.

## Tablas SQL

<img src="https://raw.githubusercontent.com/AixaCasanova/TPsegParcialPPS2017/traducciones/esquema_tablas.jpg">

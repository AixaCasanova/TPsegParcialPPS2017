App Traducciones
=====================

Aplicaciones para demostrar el funcionamiento del plugin de traducción.

## Crear proyecto

Crear aplicación:

```bash
$ ionic start traducciones blank --v2
```

Instalar plugin ngx-translate:

```bash
$ npm install @ngx-translate/core @ngx-translate/http-loader --save
```

Pasos para agregar traducciones.
```bash
1. Crear carpeta "assets/i18n".
2. Crear archivos de traduccion ej: es.json, en.json y ponerlos dentro de la carpeta creada en el paso 1.
3. Agregar las traducciones en cada archivo json con sus respectivas traducciones en formato json. Ej:

{
        "titulo": "Mi título"
}

4. Agregar la plataforma android para testear con el siguiente comando:
$ ionic platform add android

5. Testear la aplicación en el dispositivo con el siguiente comando:
$ ionic run android
```

Pasos para cambiar splashscreen y logo.
```bash
1. Modificar las imagenes resources/splash.png y resources/icon.png
2. Ejecutar:
$ ionic resources
3. Listo.
```


More info on this can be found on the Ionic [Getting Started](http://ionicframework.com/docs/v2/getting-started/) page.

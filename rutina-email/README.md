#Rutina email
***
Este pequeño programa lo puedes utilizar para enviar correos de alerta con mon(1). (O cualquier otra cosa que desees :wink:)

Siguiendo el ejemplo que tomamos en el curso tendrías que cambiar el comando a algo como esto:

```sh
$ mon -d nginx -p mon-pids/nginx.pid -R "node rutina-email/email-admin.js"
```

Ingresa en el archivo `email-admin.js` y cambia los valores de las variables que se indican.

Recuerda ejecutar `npm install` para descargar las dependencias.

#!/bin/bash

# tomamos la hora

hora="$(date -u)"

# y mandamos el correo
# RECUERDA CAMBIAR ESTA LINEA PARA PONER TU CORREO

echo "¡Alerta! El proceso de Nginx se ha reiniciado." $hora | mail -s "Alerta mon(1)" tucorreo@tudominio.com

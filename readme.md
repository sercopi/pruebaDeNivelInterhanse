# prueba de nivel Interhanse

Algunas aclaraciones al código:

##### Optimización SEO

Una de las reglas del SEO, es la de no repetir elementos HTML en el código para que google no los lea doble y penalice al SEO. 

Algunos de los elementos de la prueba se ocultan con display:none, aunque lo óptimo sería averiguar el viewport en el backend y renderizar una vista HTML adaptada para cada dispositivo sin estos elementos.

##### Ofuscación

Está hecha en el texto Subtítulo ofuscado

La práctica normal, por lo que tengo entendido, es que los enlaces ofuscados tienen que venir del backend encriptados (normalmente como base64) y se desencriptan en el front con un script como el que aquí se usa, que luego se oculta a Google por robots.txt, por ello he colocado el enlace ya encriptado en base64 simulando un backend.

##### Formulario y proteccíon reCaptcha

La animación está hecha en el enlace de contáctenos en el header

La protección con reCaptcha se completa en el backend con una petición a la API de google usando una clave privada proporcionada al crear la aplicación, para verificar el token generado por el captcha. **la validación que se hace aquí en cliente no es suficiente por sí sola.**

Además, para que funcione la carga del carptcha, la url tiene que ser localhost o 127.0.0.1, (con lo que si lanza la prueba con un servidor privado o local y usa otra url lo más probable es que no funcione, por ello incluyo unas capturas del funcionamiento!).

###### De nuevo muchas gracias por su tiempo, y si tiene cualquier duda puede contactar conmigo en los datos proporcionados en mi curriculum o en mi email :)


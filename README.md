Information Security con HelmetJS
Realizado por: Lucia Jenizeth Jiménez Cruz - 211150121 - 8SA

Para la materia de Sistemas avanzados de Seguridad Informatica

El repositorio tiene como propósito ofrecer un conjunto de plantillas (boilerplates) y recursos básicos para aprender y practicar seguridad informática. Este es un "boilerplate" que es un código base que es reutilizado y modificado para las lecciones sin tener que comenzar desde cero de Information Security with HelmetJS. Este es el repositorio para la primera parte del curso Information Security lessons. Las instrucciones para resolverlo estan en https://www.freecodecamp.org/learn/information-security/information-security-with-helmetjs/

Metodologia Utilizada:

Express incluye por defecto la cabecera X-Powered-By: Express en las respuestas, lo que revela que tu sitio usa Express. Esto puede ayudar a hackers a explotar vulnerabilidades conocidas. Para ocultarlo, usa el middleware helmet.hidePoweredBy() y así mejoras la seguridad.

=======
# Information Security con HelmetJS 

Realizado por: Lucia Jenizeth Jiménez Cruz - 211150121 - 8SA

Para la materia de Sistemas avanzados de Seguridad Informatica

El repositorio tiene como propósito ofrecer un conjunto de plantillas (boilerplates) y recursos básicos para aprender y practicar seguridad informática. Este es un "boilerplate" que es un código base que es reutilizado y modificado para las lecciones sin tener que comenzar desde cero de Information Security with HelmetJS. Este es el repositorio para la primera parte del curso Information Security lessons. Las instrucciones para resolverlo estan en https://www.freecodecamp.org/learn/information-security/information-security-with-helmetjs/

Metodologia Utilizada:

Express incluye por defecto la cabecera X-Powered-By: Express en las respuestas, lo que revela que tu sitio usa Express. Esto puede ayudar a hackers a explotar vulnerabilidades conocidas. Para ocultarlo, usa el middleware helmet.hidePoweredBy() y así mejoras la seguridad.

>>>>>>> 1aeabeea66a89a28a59a1b82a11ebd52229eb1f1
Tu página puede ser cargada en un <iframe> sin permiso, lo que permite ataques de clickjacking, engañando al usuario para hacer clic en elementos ocultos. Para evitarlo, usa helmet.frameguard({ action: 'deny' }), que bloquea que tu sitio sea mostrado en un frame.

Cross-site scripting (XSS) es un ataque en el que se inyectan scripts maliciosos en páginas web para robar datos sensibles, como cookies de sesión o contraseñas. Los navegadores modernos ofrecen protección, como el encabezado HTTP X-XSS-Protection, que detecta scripts maliciosos y los neutraliza, aunque con soporte limitado. Herramientas como helmet.xssFilter() también pueden ayudar a sanitizar la entrada enviada al servidor.

Los navegadores pueden ignorar el encabezado Content-Type, lo que puede ser riesgoso. Para evitarlo, se usa el encabezado X-Content-Type-Options: nosniff. Usa helmet.noSniff() en tu servidor para aplicar esta protección.

<<<<<<< HEAD
Algunas aplicaciones web sirven HTML no confiable para su descarga. En versiones antiguas de Internet Explorer, estos archivos se abren en el contexto del sitio, lo que podría permitir que el HTML malicioso haga cosas dañinas. Para evitarlo, se debe configurar el encabezado X-Download-Options: noopen, lo que impide que los usuarios de IE ejecuten descargas en el contexto del sitio. Usa el método helmet.ieNoOpen() en tu servidor para aplicar esta protección.
=======
Algunas aplicaciones web sirven HTML no confiable para su descarga. En versiones antiguas de Internet Explorer, estos archivos se abren en el contexto del sitio, lo que podría permitir que el HTML malicioso haga cosas dañinas. Para evitarlo, se debe configurar el encabezado X-Download-Options: noopen, lo que impide que los usuarios de IE ejecuten descargas en el contexto del sitio. Usa el método helmet.ieNoOpen() en tu servidor para aplicar esta protección.
>>>>>>> 1aeabeea66a89a28a59a1b82a11ebd52229eb1f1

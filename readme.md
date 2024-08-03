# Proyecto: Banco de Ortesis
![Logo](https://raw.githubusercontent.com/No-Country-simulation/s16-06-m-java-react/desarrolloPablo/Pasos%20firmes%202.webp?token=GHSAT0AAAAAACR6DOVV4FPNPOCGEYRRHDSSZVM6CZQ)
## Introducción
En América latina, se observa una problemática generalizada.

En 2020, unas 85 millones de personas con discapacidad viven en América Latina y el Caribe, lo que representa el 14.7% de la población regional. Los datos indican que los hogares donde viven personas con discapacidad son más pobres y en 1 de cada 5 hogares en situación de pobreza extrema vive una persona con discapacidad. Se estima que en 1 de cada 3 hogares vive una persona con discapacidad. - fuente banco mundial

En Argentina se estima que la prevalencia de población con algún grado de incapacidad, dificultad o discapacidad es del 10,2% en edades mayores a 6 años. Estimando un número de 3.571.983 de personas en 2018. -fuente censo indec (2018)

Una de las principales dificultades es el acceso a equipamiento ortopédico debido a la falta de recursos, altos costos de producción y acceso a materiales para su fabricación.

### Descripción del Proyecto

Este proyecto nace con la idea de darle una solución a esta problemática a través de la formación de una "red solidaria" que facilite el acceso a dispositivos ortopédicos.

Todos en algún momento hemos necesitado o hemos tenido alguien cercano a nosotros que ha necesitado el acceso a una silla de ruedas, una muleta, una cama ortopédica, etc. Y así como lo han necesitado, muchos lo han dejado de usar, lo que lleva a que estos elementos queden en desuso, guardados para alguna eventualidad en futuro. Eso lleva a que estos elementos queden en el olvido.’

La idea de esta red es animar a estas personas creando una ‘red’ que ponga a disposición estos elementos a personas que realmente lo necesitan o están transitando algún tipo de incapacidad o discapacidad.

### Objetivo

Crear una red solidaria que facilite el acceso a equipamiento ortopédico a personas con discapacidad o dificultades de movilidad, promoviendo la reutilización y el intercambio de dispositivos en desuso, y fomentando la colaboración comunitaria para mejorar la calidad de vida de quienes más lo necesitan.

### Audiencia

Todo público

### Casos de Uso

Un usuario puede:
- Registrarse y Loguearse
- Subir / Publicar Artículos
- Recibir Notificaciones
- Buscar Artículos (filtros de búsqueda)
- Ver sus artículos disponibles.
- Comentar/Responder Preguntas
- Contactar usuario mediante Link de contacto

Artículo:
- Tiene una ficha técnica
    - Categoría
    - Descripción
    - Estado
    - Cantidad 

La página en general posee un instructivo de uso (con una breve introducción del proyecto y de que trata invitando a colaborar a la red).

#### Requerimientos Funcionales
- Login de Usuarios
- Registro de usuarios.
- Inicio de sesión de usuarios.
- Gestión de Productos
    - Publicación de productos (con ficha técnica: categoría, descripción, estado, cantidad).
    - Edición de productos publicados.
    - Eliminación de productos publicados.
    - Búsqueda de productos con filtros (categoría, estado, ubicación).
- Interacción entre Usuarios
    - Sistema de comentarios y respuestas en las publicaciones de artículos.
- Notificaciones
    - Envío de notificaciones a los usuarios sobre actividad relevante (comentarios, respuestas, nuevos artículos publicados en su categoría de interés).
- Página Informativa
    - Instructivo de uso de la plataforma.
    - Breve introducción del proyecto y su propósito, invitando a colaborar con la red.

### Instalación y Configuración

1. Clona el repositorio:
   ```
   git clone <https://github.com/No-Country-simulation/s16-06-m-java-react>
   ```
2. Navega al directorio del proyecto:
   ```
   cd banco-de-ortesis
   ```
3. Configura la base de datos en MySQL y ajusta los parámetros de conexión en el archivo de configuración de Spring Boot.
4. Ejecuta el backend:
   ```
   mvn spring-boot:run
   ```
5. Navega al directorio del frontend:
   ```
   cd frontend
   ```
6. Instala las dependencias:
   ```
   npm install
   ```
7. Ejecuta el frontend:
   ```
   npm start
   ```
   
### Uso

1. Regístrate y loguéate en la plataforma.
2. Publica artículos ortopédicos que ya no uses.
3. Busca y contacta a otros usuarios que ofrezcan los artículos que necesitas.

## Despliegue

La aplicación está desplegada en Vercel. Puedes acceder a la versión en vivo a través del siguiente enlace:

[**Acceder a la aplicación**](https://pasos-deploy-front.vercel.app/login)

No dudes en explorar la aplicación y probar sus funcionalidades. ¡Esperamos que te guste!
### Tecnologías a Utilizar

## Backend
- Java
  ![Java](https://img.icons8.com/?size=50&id=lTKW3iI3wIT0&format=png&color=000000)
- Lenguaje de programación robusto y ampliamente utilizado para el desarrollo de aplicaciones empresariales.
- Spring Boot
  ![Springboot](https://img.icons8.com/?size=50&id=90519&format=png&color=000000)
- Framework de desarrollo de aplicaciones Java que simplifica la creación de aplicaciones basadas en Spring.
- Maven
  ![Maven](https://img.icons8.com/?size=50&id=t5FJr3NzrPSm&format=png&color=000000)
- Herramienta de gestión de proyectos de software utilizada para la construcción y gestión de dependencias.


## Frontend
- React
  ![React](https://img.icons8.com/?size=50&id=asWSSTBrDlTW&format=png&color=000000)
- Biblioteca de JavaScript para construir interfaces de usuario interactivas.
- JavaScript
  ![JS](https://img.icons8.com/?size=50&id=108784&format=png&color=000000)
- Lenguaje de programación fundamental para el desarrollo web.
- Node.js
  ![Node js](https://img.icons8.com/?size=50&id=hsPbhkOH4FMe&format=png&color=000000)
- Entorno de ejecución de JavaScript del lado del servidor.

## Base de datos
- MySQL
  ![Mysql](https://img.icons8.com/?size=50&id=UFXRpPFebwa2&format=png&color=000000)
- Sistema de gestión de bases de datos relacional ampliamente utilizado.

## Pruebas y Documentación de API
- Postman
  ![Postman](https://cdn.iconscout.com/icon/free/png-64/free-postman-3628992-3030217.png?f=webp&w=64)
- Plataforma para probar APIs y realizar solicitudes HTTP.
- Swagger
![Swagger](https://img.icons8.com/?size=100&id=rdKV2dee9wxd&format=png&color=000000)
- Proporciona una interfaz visual para interactuar con la API y facilita la comprensión de sus endpoints y parámetros.
- La documentación de la API está disponible y se puede explorar mediante Swagger en la siguiente dirección:
- Swagger UI: 
https://upbeat-commitment-production.up.railway.app/swagger-ui/index.html
## Diseño UX/UI
- En esta sección se describe el enfoque combinado de Diseño de Experiencia de Usuario (UX) y Diseño de la Interfaz de Usuario (UI).

### Colaboración en Figma
![Figma](https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000)
- Permite la colaboración en tiempo real, esto ha mejorado nuestra eficiencia y ha asegurado una mejor integración entre el diseño y el desarrollo.

## Control de versiones
- Git
  ![Git](https://img.icons8.com/?size=50&id=AZOZNnY73haj&format=png&color=000000)
- Sistema de control de versiones distribuido utilizado para rastrear cambios en el código fuente.

## IDE Frontend
- Visual Studio Code
  ![Visual Code](https://img.icons8.com/?size=50&id=9OGIyU8hrxW5&format=png&color=000000)
- Editor de código fuente liviano y altamente personalizable para el desarrollo web.

## IDE Backend
- IntelliJ
  ![Intellij](https://img.icons8.com/?size=50&id=61466&format=png&color=000000)
- Entorno de desarrollo integrado (IDE) para Java y otras tecnologías.


### Contribución

Para contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una rama con tus cambios:
   ```
   git checkout -b mi-rama-de-cambios
   ```
3. Haz commit de tus cambios:
   ```
   git commit -m "Descripción de mis cambios"
   ```
4. Haz push a la rama:
   ```
   git push origin mi-rama-de-cambios
   ```
5. Abre un Pull Request.


### Conclusión

El proyecto Banco de Ortesis, a través de la red solidaria "Pasos Firmes", busca transformar la vida de miles de personas con movilidad reducida en Argentina, al facilitar el acceso a equipamientos ortopédicos reutilizables, promovemos la inclusión y mejoramos la calidad de vida de quienes más lo necesitan. Con la colaboración de la comunidad y el uso de tecnologías modernas, aspiramos a crear un impacto positivo y duradero en la sociedad.

Invitamos a todos a unirse a esta iniciativa, ya sea contribuyendo con dispositivos ortopédicos en desuso, participando activamente en la plataforma, o difundiendo el proyecto para llegar a más personas que puedan beneficiarse de esta red solidaria. Juntos, podemos hacer una diferencia significativa en la vida de muchas personas.

### Colaboradores
| Nombre                   | Rol      | LinkedIn                                               |
|--------------------------|----------|--------------------------------------------------------|
| **Pablo Velasco**        | Frontend | [LinkedIn](https://www.linkedin.com/in/pablo-r-velasco/)  |
| **Ramiro Gonzalez**      | Frontend | [LinkedIn](https://www.linkedin.com/in/ramiro-gonzalez-98b28722a/) |
| **Gonzalo Bolognese**    | Backend  | [LinkedIn](https://www.linkedin.com/in/gonzalo-bolognese/) |
| **Maria Eugenia Giraldo**| Backend  | [LinkedIn](https://www.linkedin.com/in/maria-eugenia-giraldo) |
| **Joaquin Brassinne**    | Backend  | [LinkedIn](https://www.linkedin.com/in/joaquin-brassinne-736a2b27b) |
| **Micaela Dallavia**     | UX/UI    | [LinkedIn](https://www.linkedin.com/in/micaela-dallavia-designer-ux-ui) |
| **Lucia Florencia Gangi**| UX/UI    | [LinkedIn](https://www.linkedin.com/in/luciagangi/) |

Gracias a [Banco Mundial](https://www.worldbank.org/) y [Censo INDEC](https://www.indec.gob.ar/) por los datos estadísticos.


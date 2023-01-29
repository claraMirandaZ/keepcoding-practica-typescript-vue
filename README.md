<h1 align=center>Práctica de TypeScript y Vue.js</h1>

### Guía de inicio rápido

Para ejecutar la aplicación (una vez clonado el repositorio) hay que tener instalado [Node JS](https://nodejs.org/) y establecer las dependencias usando el comando:

```
npm install
```

Para poder compilarlo y desplegarlo en el servidor local se utiliza:

```
npm run serve
```

Y con este comando se compila y _minifica_ el proyecto para producción:

```
npm run build
```

Esto crea una carpeta fuera de `src/` denominada `dist/` (o `build/`), donde se almacenan los archivos finales ya procesados (por ejemplo, en formato .js o .css) que irán desplegados en el servidor o web en producción definitiva (este comando se utiliza, por ejemplo, para el despliegue del proyecto en GitHub Pages).

> En Vue.js, los archivos procesados en modalidad de desarrollo (`npm run serve`) se almacenan directamente en memoria, ya que está _Webpack_ configurado para ello. Sólo se almacenarán en la carpeta `dist/` si creamos una _build_ en la modalidad de producción con `npm run build`.

Para más información relevante sobre la **estructura de carpetas** de Vue.js recomiendo un vistazo a [este enlace](https://lenguajejs.com/vuejs/introduccion/estructura-carpetas/). Además, se puede acceder al **manual de configuración de Vue CLI** [pinchando aquí](https://cli.vuejs.org/config/).

## Enunciado

Para esta práctica realizaremos una pequeña simulación de una tienda. Para ello nos serviremos de la API de pruebas de Platzi:

- https://fakeapi.platzi.com/

Para las conexiones a esta API nos serviremos de [Axios](https://axios-http.com/es/docs/intro).

### Vistas

La aplicación debe constar de de cuatro vistas (_views_) muy sencillas. Se pueden hacer todos los componentes que se deseen, pero sólo será necesario entregar estas cuatro vistas.
Como todas las vistas que no son la del _login_, en la parte superior se mostrará un **menú de navegación con un botón para hacer _logout_**. En todas estas pantallas **no se podrá navegar de ninguna manera sin tener un _token_ guardado**. Si no se tiene, la navegación llevará a la pantalla de _login_.
El menú tendrá dos enlaces, uno para la vista de **Listado de productos** y otro para la vista del **Perfil**. El botón de _logout_ **borrará el _token_ guardado de todos los sitios donde esté y navegará al _login_**.

#### 1. Login

Se requiere un formulario sencillo de _login_ con dos _inputs_: uno de tipo `email` y otro de tipo `password`. Ambos campos serán obligatorios y **no debería realizar la petición** en caso de que:

- Alguno de los campos esté vacío.
- El campo de e-mail no tenga una dirección válida.

Si todo es correcto, al pulsar el botón de "acceder" se hará una petición a:

```ts
[POST] https://api.escuelajs.co/api/v1/auth/login
```

Consulta la [documentación de la API](https://fakeapi.platzi.com/en/rest/auth-jwt) para más detalles sobre cómo hacer esta petición. Si es correcta, (devuelve un _status 201_ y un `data` con el _token_) se guardará el _token_ en el estado y en el _localStorage_ y se navegará al listado de productos.
Si la petición es incorrecta (_status 401_), se **debe mostrar un error**.

#### 2. Listado de productos

El listado **podrá filtrarse por título** y por defecto se mostrarán los resultados sin filtrar. Para filtrar es necesario meter al menos tres caracteres. La **paginación** en esta pantalla es opcional, pero se valora positivamente.
Para cada producto se mostrará un componente con los datos básicos y una de las imágenes. Pulsando en el producto (en el nombre, un botón o donde se quiera) se navega al **detalle del producto**.

Para obtener los productos se utilizará:

```ts
[GET] https://api.escuelajs.co/api/v1/products
[GET] https://api.escuelajs.co/api/v1/products/?title=Generic
```

Más info [aquí](https://fakeapi.platzi.com/en/rest/products).

#### 3. Detalle del producto

Esta pantalla mostrará los mismos datos que los componentes de la anterior, pero en este caso hay que hacer algún sistema para poder ir **cambiando entre las imágenes del producto**. Para esto se podrán utilizar productos de terceros.
Será posible navegar a esta pantalla introduciendo la dirección en la barra de navegación.

Para obtener el detalle:

```ts
[GET] https://api.escuelajs.co/api/v1/products/4
```

#### 4. Perfil

Por último, se creará una vista con la información del usuario autenticado. Para ello obtendremos los datos desde:

```ts
[GET] https://api.escuelajs.co/api/v1/auth/profile
```

Consulta la documentación para más detalles de cómo hacer esta petición.

_Más información sobre requisitos, criterios de evaluación e imágenes en el .pdf incluido en la carpeta documents._

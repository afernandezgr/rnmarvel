# Práctica React_native

## Keepcoding Mobile Development Bootcamp VI

Consiste en crear una aplicación de haciendo uso de React Native con los siguientes requisitos:


### Requisitos: 

* Pantalla con un listado FlatList y datos cargados desde el web services sobre la temática elegida. En este caso se ha hecho uso de [https://developer.marvel.com/docs ]() para lo cual nos hemos registrado en la web y obtenido una key free. 
* Pantalla de vista detalle, al pulsar una celda iremos a su vista detalle, que será otra pantalla con la vista individual del elemento de la lista elegido.
* Deberá contar con un formulario funcional donde se lleva contro de los datos introducidos. No se ha implementado persistencia al no permitirlo la API elegida (MARVEL)*
* La app deberá usar uno de los componentes de navegación mostrados en las diapositivas del curso (Recomendado [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)).
* Deberá hacer uso de la librería Redux.
* Uso de al menos una animación con Animated


### Instalación:
* Para realizar la práctica se han utilizado dos componentes adicionales:
	* [React-native-image-picker](https://github.com/react-community/react-native-image-picker), para la gestión de las imágenes al momento de crear un nuevo comic.
	
* Para instalar la aplicación, tras clonar o descargar el proyecto hay que ejecutar el comando `npm install`, con ello se descargarán todas las dependencias necesarias para ejecutar la app.

* La aplicación está en modo debug, por tanto para ejectutarla debemos arrancar el servidor de Node, con el comando `npm start`.

* Para ejecutarla en iOS basta con ejecutar `react-native run-ios` o en Android `react-native run-android`
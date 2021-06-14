# CrewTable

- Figma : [Diseño CrewTable](https://www.figma.com/file/JiLWAOJncnrNmJkT23dqTU/CrewTable?node-id=0%3A1)

- Trello : [CrewTable](https://trello.com/b/XNgl3ZbJ/crewtable)

## API Utilizada

[Board Games Atlas](https://www.boardgameatlas.com/api/docs) 

## Descripción

CrewTable es una web basada en los juegos de mesa, existe una comunidad muy grande de jugadores de mesa, y existe una variedad de juegos de mesa 
aun mayor de lo que podriamos imaginar.

La idea principal de la web es tomar de una API la informacion de los juegos de mesa, de esta forma mostraremos
en la web todos los juegos de mesas disponible con varios filtros segun las categorias de los juegos, pero lo interesante, es que quiero que la web 
sea una especie de Forum Sobre juegos de mesas. la actividad principal, seria un apartado para la creacion de eventos.
  
## Funcionamiento 

### Inicio
En la vista de inicio podemos ver todos los juegos de mesa que obtenemos de la API, con diferetes filtros, en esta seccion podemos observer
los siguientes datos de los juegos de mesa:

  - Nombre.
  - Precio.
  - Año de publicación.
  - Minimo de jugadores.
  - Maximo de jugadores.
  - Minimo de edad recomendada.
  - Imagen.
  - Descripción.
  
  Dichos juegos de mesas podran ser ordenados por diferentes categorias.
  
  ###  Secciones
  Esta vista es sencilla, nos aparecen las tres categorias por las que se diferencian los Eventos de la web, a seleccionar 
  una nos llevara directamente a su seccion en la vista Eventos.
  
  
  
  ### Eventos
  La vista donde se desarrolla la Función principal de la web.
  
  Aquí encontramos el boton principal para publicar Eventos, que al hacer click en el nos llevara a un formulario:
   
   - Imagén 
   - Descripción
   - Ubicación (Obligatorio)
   - Fecha  (Obligatorio)
   - Categoria (Obligatorio)
   - Titulo (Obligatorio)
   - Numero de plazas (Obligatorio)
   
  Tambien encontramos las diferentes listas de Eventos dependiendo de la categoria a la que han sido añadido.
  Las categorias 
  
   - Duelos de cartas
   - Juegos clasicos
   - Juegos de tablero
   
  Una vez veamos un evento que nos llame la atención hacemos click en el y llevara a la vista en la que se nos mostrara,
  los datos del evento en esta vista si no estan completas las plazas, podremos apuntarnos a el evento pulsando en el 
  boton "Unirme al Evento".
  
  ### Perfil 
  Mostramos el perfil del usuario (que debe de esta registrado y logeado, para poder acceder a esta fucción), 
  en el perfil encontramos los datos del usuario que seran modificables cuando el lo deseé y una lista con los eventos
  a los que se ha unido y hacer click en dicho evento para visualizarlo.
   
  

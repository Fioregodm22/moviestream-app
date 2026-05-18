# Reflexión — Modelo Documental MovieStream

## 1. 

Lo que haría diferente es definir primero qué consultas necesitaba
antes de diseñar las colecciones. Al inicio asumí la estructura sin
pensar en cómo iba a consumir los datos, y cuando llegué al CRUD me
di cuenta que tener actores como referencia separada complicaba
operaciones simples. 

## 2.

La operación más incómoda fue mostrar una película con sus actores.
En SQL hubiera sido un JOIN directo en una sola query. En MongoDB
necesité el `.populate('actors')` que hace una segunda consulta por
debajo, y en el formulario de edición tuve que traer todos los actores
por separado para mostrar el select. 

## 3. La pregunta honesta

Para MovieStream específicamente, el modelo relacional original era
mejor opción. MovieStream tiene relaciones claras y estructuradas entre
películas, clientes y ventas que encajan naturalmente en tablas con
joins. NoSQL sería mejor si el dominio tuviera documentos con estructuras
variables, pero MovieStream no tiene ese problema. La experiencia construyendo la
app confirmó que cada vez que quería mostrar datos relacionados
terminaba simulando un JOIN con populate, que es exactamente lo que
SQL hace de forma nativa y optimizada. 

# MovieStream App

Una aplicación web para gestionar películas y actores, construida sobre la base de datos MovieStream.

## ¿Qué hace el proyecto?

Permite interactuar con una base de datos MongoDB de películas y actores a través de una interfaz web simple. El usuario puede listar, crear, editar y eliminar películas, así como gestionar actores. 
Las películas tienen una relación de referencia hacia los actores, lo que permite explorar decisiones de diseño de modelos documentales.

---

## ¿Cómo correrlo desde cero?

### 1. Clona el repositorio
```bash
git clone https://github.com/Fioregodm22/moviestream-app.git
cd moviestream-app
```

### 2. Instala dependencias
```bash
npm install
```

### 3. Crea el archivo `.env`
```env
MONGODB_URI=mongodb+srv://admin:TU_PASSWORD@clusterprueba.ce1nm68.mongodb.net/moviestream?appName=Clusterprueba
PORT=3000
```

### 4. Pobla la base de datos
```bash
node seed.js
```
Esto crea 20 películas y 10 actores de prueba.

### 5. Corre la app
```bash
node app.js
```
Abre tu navegador en `http://localhost:3000`

## Stack utilizado
| Node.js + Express | Servidor ligero y rápido de configurar |
| MongoDB Atlas | Base de datos documental gratuita en la nube |


Se eligió este stack por ser el más directo para demostrar un modelo documental en acción, sin agregar complejidad innecesaria de frameworks de frontend.


## URL pública

[https://moviestream-app-1gbw.onrender.com](https://moviestream-app-1gbw.onrender.com)

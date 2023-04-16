# Microservicio de Ubicación de Usuarios

Este proyecto es un microservicio en Node.js que permite guardar y actualizar la ubicación de un usuario (latitud y longitud) en un índice de Pinecone.

## Requisitos

- Node.js (versión recomendada: 16.x)
- NPM (incluido con Node.js)

## Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/jitrodriguez/NodeJs-Contact-Tracing-Vector-Search.git
cd user-location-microservice
```

2. Instala las dependencias del proyecto:

```bash
npm install
```

3. Configura las credenciales de Pinecone y otras opciones en el archivo config.js:

```
module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  PINECONE_APIKEY: process.env.PINECONE_APIKEY || 'myapikey',
  PINECONE_NAMESPACE: process.env.PINECONE_NAMESPACE || 'myapp',
  PINECONE_ENVIRONMENT: process.env.PINECONE_ENVIRONMENT || 'development',
};
```

# Uso

1. Ejecuta el microservicio:

```
node app.js
```

2. Realiza solicitudes PUT a /user/:userId/location con un objeto JSON que incluya 'latitude' y 'longitude' para guardar o actualizar la ubicación del usuario en el índice de Pinecone.

Ejemplo de solicitud:

```
curl -X PUT -H "Content-Type: application/json" -d '{"latitude": 40.712776, "longitude": -74.005974}' http://localhost:3000/user/1/location
```

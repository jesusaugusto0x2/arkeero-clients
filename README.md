Este es un proyect [Next.js](https://nextjs.org/) creado con [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Fue desarrollado bajo la version `20.11.1` de NodeJS

## Empezando

1.- Instalacion de dependencias

```
npm install
```

2.- Copia y pega las variables existentes en el archivo `.env.example` en uno nuevo bajo el nombre `.env.local`

3.- Corre el servidor en local

```
npm run dev
```

3.- Abre [http://localhost:3000](http://localhost:3000) en tu navegador para visualizar el resultado

## Notas

- Se hizo un deploy del proyecto utilizando Vercel, [en esta URL](https://arkeero-clients.vercel.app/clients) por lo que no necesitarias descargar el proyecto.
- Al principio se hizo la consulta de datos desde el servidor, sin embargo al ser los requerimientos utilizar redux y hacer logica de paginado, estas consultas se hacen desde el lado del cliente.

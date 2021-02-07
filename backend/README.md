# Backend

![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

> In this repository there is the backend of the Know Weather project.

The backend is responsible for taking the name of the city passed by the frontend and passing that name to the weather query API. After the response from the API, the backend configures the response, passing only the important data to the application frontend.

The free version of the API [Weatherstack](https://weatherstack.com) was used.

The backend was deployed on the heroku platform, using a free plan.

## Development server

### Prequisites

First, install all Node-related dependencies with `npm install`. After that, copy over `.template.env` to `.env` and adjust all required values (surrounded by `""`).

### Building

If everything is set up correctly, running `npm run build` will compile the typescript fonts. After that, just use `npm start` to start the backend with the specified configuration values.

### Watching

If you are developing, you can use `npm run dev` to automatically compile typescript as you work.

### Routes

The controllers for the routes can be found in the `src/controllers` folder. This backend has only one route. She is:

- `[GET]/getWeather/:city`. To use it, just pass the name of the city to be used to get the weather data. The name must be passed as the param `:city` of the request.

# License

[MIT](http://opensource.org/licenses/MIT)
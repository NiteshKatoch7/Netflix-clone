# Netflix UI

This repository contains the frontend UI for a Netflix clone application, built using React and various modern libraries. The application allows users to browse trending movies and manage their movie preferences.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API Integration](#api-integration)
- [Redux Reducers](#redux-reducers)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/netflix-ui.git
    ```
2. Navigate to the project directory:
    ```sh
    cd netflix-ui
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the development server:
    ```sh
    npm start
    ```

## Usage

After starting the development server, the application will be running locally. You can access it in your web browser at `http://localhost:3000`.

## Features

- Browse trending movies and TV shows
- View movies by genre
- Manage liked movies
- Responsive UI built with Material-UI and styled-components

## API Integration

This application interacts with the following APIs:

- **TMDB API:** For fetching genres, trending movies, and movies by genre
- **Custom Backend API:** For managing user liked movies

## Redux Reducers

The Redux reducers in this file manage the state for the Netflix UI application. These reducers play a crucial role in handling actions, such as fetching data from APIs and updating the UI accordingly.

#### `initialState`

This object defines the initial state of the Redux store, including properties for `movies`, `genresLoaded`, and `genres`.

#### Data Fetching Thunks

- **`getGenres`**: Fetches the list of movie genres from the TMDB API. Upon successful completion, it updates the `genres` state with the fetched data and sets `genresLoaded` to `true`.
- **`fetchMovies`**: Fetches trending movies from the TMDB API for a specified time period and type. It updates the `movies` state with the fetched result.
- **`fetchMoviesByGenre`**: Fetches movies belonging to a specific genre from the TMDB API. It updates the `movies` state accordingly.
- **`getUserLikedMovies`**: Fetches the list of movies liked by a user from a custom backend API. It updates the `movies` state with the fetched data.

#### Utility Functions

- **`createArrayFromRawData`**: Processes raw movie data received from the TMDB API and creates an array of movie objects with selected properties.
- **`getRawData`**: Fetches raw movie data from the TMDB API based on provided parameters. It iterates over multiple pages of API results to collect a sufficient number of movies.

#### Action Type Handlers

The `extraReducers` section listens for specific action types' fulfilled states and updates the Redux store accordingly. For example, it updates `genres` when `getGenres` action is fulfilled, or updates `movies` when data fetching actions are fulfilled.

These reducers collectively manage the state of the Netflix UI application, ensuring smooth data flow and seamless user experience.


## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgements

- [React](https://reactjs.org/)
- [Material-UI](https://mui.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TMDB API](https://www.themoviedb.org/documentation/api)

---

Feel free to add more details or modify the sections according to your project's specifics!

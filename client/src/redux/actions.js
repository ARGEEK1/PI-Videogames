import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_DETAIL_ID = "GET_DETAIL_ID";
export const GET_GENRES = "GET_GENRES";
export const GET_PLATFORMS = "GET_PLATFORMS";
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_RATING = "ORDER_RATING";
export const FILTER_GENRE = "FILTER_GENRE";
export const FILTER_CREATED = "FILTER_CREATED";
export const RESET_FILTERS = "RESET_FILTERS";
export const CREATE_VIDEOGAME = "CREATE_VIDEOGAME";
export const DELETE_GAME = "DELETE_GAME";
export const LOADING = "LOADING";

export const getVideogames = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const games = await axios.get("https://pi-videogames-production-7c12.up.railway.app/videogames");
      return dispatch({ type: GET_VIDEOGAMES, payload: games.data });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const getDetailById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const gameId = await axios.get(`https://pi-videogames-production-7c12.up.railway.app/videogames/${id}`);
      return dispatch({ type: GET_DETAIL_ID, payload: gameId.data });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const getGenres = () => {
  return async (dispatch) => {
    const genres = await axios.get("https://pi-videogames-production-7c12.up.railway.app/genres");
    dispatch({ type: GET_GENRES, payload: genres.data });
  };
};

export const getPlatforms = () => {
  return async (dispatch) => {
    const platforms = await axios.get("https://pi-videogames-production-7c12.up.railway.app/platforms");
    dispatch({ type: GET_PLATFORMS, payload: platforms.data });
  };
};

export const getVideogamesByName = (name) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const videogamesByName = await axios.get(
        `https://pi-videogames-production-7c12.up.railway.app/videogames?name=${name}`
      );
      return dispatch({
        type: GET_GAMES_BY_NAME,
        payload: videogamesByName.data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const createVideoGame = (newGame) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const newVideoGame = await axios.post(
        "https://pi-videogames-production-7c12.up.railway.app/videogames",
        newGame
      );
      if (newVideoGame.data) {
        console.log(newVideoGame.data);
        alert("video game created successfully");
      }
      return dispatch({
        type: CREATE_VIDEOGAME,
        payload: newVideoGame.data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const deleteGame = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING });
      const response = await axios.delete(
        `https://pi-videogames-production-7c12.up.railway.app/videogames/${id}`
      );
      alert(response.data);
      return dispatch({
        type: DELETE_GAME,
        payload: id
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const orderByName = (value) => {
  return (dispatch) => {
    dispatch({ type: ORDER_NAME, payload: value });
  };
};

export const orderByRating = (value) => {
  return (dispatch) => {
    dispatch({ type: ORDER_RATING, payload: value });
  };
};

export const filterByGenre = (value) => {
  return (dispatch) => {
    dispatch({ type: FILTER_GENRE, payload: value });
  };
};

export const filterByCreated = (value) => {
  return (dispatch) => {
    dispatch({ type: FILTER_CREATED, payload: value });
  };
};

export const resetFilters = () => {
  return (dispatch) => {
    dispatch({ type: RESET_FILTERS });
  };
};

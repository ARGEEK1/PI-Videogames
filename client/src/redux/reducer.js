import {
  GET_VIDEOGAMES,
  GET_DETAIL_ID,
  GET_GENRES,
  GET_PLATFORMS,
  GET_GAMES_BY_NAME,
  ORDER_NAME,
  ORDER_RATING,
  FILTER_GENRE,
  FILTER_CREATED,
  ADD_GAME,
  CREATE_VIDEOGAME,
} from "./actions";

const initialState = {
  onLoad: true,
  videogames: [],
  videosgamesFiltering: [],
  videogameDetail: [],
  genres: [],
  platforms: [],
  videogamesByName: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        onLoad: false,
        videogames: payload,
        videosgamesFiltering: payload,
      };

    case GET_DETAIL_ID:
      return {
        ...state,
        videogameDetail: payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };

    case GET_PLATFORMS:
      return {
        ...state,
        platforms: payload,
      };

    case GET_GAMES_BY_NAME:
      return {
        ...state,
        videogamesByName: payload,
      };

    case ORDER_NAME:
      let orderName = [...state.videosgamesFiltering];
      if (payload === "All") {
        return {
          ...state,
          videosgamesFiltering: state.videogames,
        };
      }
      if (payload === "a-z") {
        orderName.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
      } else {
        orderName.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
      }
      return {
        ...state,
        videosgamesFiltering: orderName,
      };

    case ORDER_RATING:
      let orderRating = [...state.videosgamesFiltering];
      if (payload === "All") {
        return {
          ...state,
          videosgamesFiltering: state.videogames,
        };
      }
      if (payload === "0-5") {
        orderRating.sort((a, b) => {
          if (a.rating > b.rating) return 1;
          if (a.rating < b.rating) return -1;
          return 0;
        });
      } else {
        orderRating.sort((a, b) => {
          if (a.rating < b.rating) return 1;
          if (a.rating > b.rating) return -1;
          return 0;
        });
      }
      return {
        ...state,
        videosgamesFiltering: orderRating,
      };

    case FILTER_GENRE:
      let filterGenre = [];
      if (payload === "All") {
        filterGenre = [...state.videogames];
      } else {
        filterGenre = [...state.videogames].filter((game) =>
          game.genres.some((genre) => genre.name === payload)
        );
      }
      return {
        ...state,
        videosgamesFiltering: filterGenre,
      };

    case FILTER_CREATED:
      let filterCreated = [...state.videogames];
      if (payload === "created") {
        filterCreated = [...state.videogames].filter(
          (game) => game.created === true
        );
      }
      if (payload === "notCreated") {
        filterCreated = [...state.videogames].filter((game) => !game.created);
      }
      return {
        ...state,
        videosgamesFiltering: filterCreated,
      };

    // case ADD_GAME:
    //   state.videogames.unshift(payload);
    //   return {
    //     ...state,
    //     videosgamesFiltering: [...state.videogames],
    //   };

    case CREATE_VIDEOGAME:
      state.videogames.unshift(payload);
      return {
        ...state,
        videosgamesFiltering: [...state.videogames],
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

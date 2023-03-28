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
  RESET_FILTERS,
  CREATE_VIDEOGAME,
  DELETE_GAME,
  LOADING,
  CLEAN_DETAIL
} from "./actions";

const initialState = {
  onLoad: true,
  videogames: [],
  videosgamesFiltering: [],
  videogameDetail: [],
  genres: [],
  platforms: [],
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
        onLoad: false,
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
        videosgamesFiltering: payload,
        onLoad: false,
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

    case RESET_FILTERS:
      return {
        ...state,
        videosgamesFiltering: [...state.videogames],
      };

    case CREATE_VIDEOGAME:
      state.videogames.unshift(payload);
      return {
        ...state,
        videosgamesFiltering: [...state.videogames],
        onLoad: false,
      };

    case DELETE_GAME:
      return {
        ...state,
        videosgamesFiltering: [...state.videogames].filter(
          (game) => game.id !== payload
        ),
        onLoad: false,
      };

    case LOADING:
      return {
        ...state,
        onLoad: true,
      };

      case CLEAN_DETAIL:
      return {
        ...state,
        videogameDetail: [],
        onLoad: false,
      };

    default:
      return {
        ...state,
      };
  };
};

export default rootReducer;

const initState = {
  active: true,
  data: [],
};

const reducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TRUE":
      return {
        ...state,
        active: false,
      };

    case "FALSE":
      return {
        ...state,
        active: true,
      };

    case "PAIRS":
      return {
        ...state,
        data: payload,
      };

    case "TOKEN":
      return {
        ...state,
        data: payload,
      };

    case "SEARCH":
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};

export { reducer };

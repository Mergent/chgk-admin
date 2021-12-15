export const reducer = (state, action) => {
  switch (action.type) {
    case "isAuthentication":
      console.log("LOG -> reducer -> action", action)
      return {
        ...state,
        isAuthentication: action.payload,
      }

    default:
      return state
  }
}

export const initialState = {
  baseUrl: 'https://api.rating.chgk.net/',
  isAuthentication: false,
}
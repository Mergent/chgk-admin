export const reducer = (state, action) => {
  switch (action.type) {
    case "updateToken":
      console.log("LOG -> reducer -> action", action)
      return {
        ...state,
        baseUrl: action.payload,
      }

    default:
      return state
  }
}

export const initialState = {
  baseUrl: 'https://api.rating.chgk.net/',
  token: '',
}
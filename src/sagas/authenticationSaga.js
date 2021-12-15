import axios from "axios";


export function fetchAuthentication(params, baseUrl, dispatch) {
  axios.post(`${baseUrl}authentication_token`, params)
    .then((response) => {
      console.log("LOG -> .then -> response", response)
      localStorage.setItem('token', response.data.token);
      dispatch({type: 'isAuthentication', payload: true});
    })

}
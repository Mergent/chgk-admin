import axios from "axios";


export function fetchAuthentication(baseUrl, dispatch) {
  const params = {
    "email": "makachino93@gmail.com",
    "password": "24042006"
  }
  
  axios.post(`${baseUrl}authentication_token`, params)
    .then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data.token);
      console.log("LOG -> .then -> localStorage", localStorage)
      dispatch({type: 'updateToken', payload: response.data.token});
    })
}
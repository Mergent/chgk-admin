import axios from "axios";


export function fetchAuthentication(baseUrl, dispatch) {
  const params = {
    "email": "makachino93@gmail.com",
    "password": "24042006"
  }
  
  axios.post(`${baseUrl}authentication_token`, params)
    .then((response) => {
      localStorage.setItem('token', response.data.token);
    })
}
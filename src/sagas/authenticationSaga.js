import axios from "axios";


export function fetchAuthentication(params, baseUrl, dispatch) {
  axios.post(`${baseUrl}authentication_token`, params)
    .then((response) => {
      console.log("LOG -> .then -> response", response)
      localStorage.setItem('token', response.data.token);
      dispatch({type: 'isAuthentication', payload: true});
    })
}

export const authProvider = {
  login: ({ username, password }) => {
    const params = {
      email: username,
      password,
    }

    const request = new Request('https://api.rating.chgk.net/authentication_token', {
        method: 'POST',
        body: JSON.stringify(params),
        headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    return fetch(request)
        .then(response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(({ token }) => {
            const decodedToken = token;
            localStorage.setItem('token', token);
            localStorage.setItem('permissions', decodedToken.permissions);
        });
},
checkError: (error) => { /* ... */ },
checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
},
logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('permissions');
    return Promise.resolve();
},
getIdentity: () => { /* ... */ },
getPermissions: () => {
    const role = localStorage.getItem('permissions');
    return role ? Promise.resolve(role) : Promise.reject();
}
};

import React, { useContext } from 'react';
import {
  HydraAdmin,
  fetchHydra as baseFetchHydra,
  hydraDataProvider as baseHydraDataProvider,
  ListGuesser
} from "@api-platform/admin";
import { parseHydraDocumentation } from "@api-platform/api-doc-parser";
import { Context } from './state';
import { fetchAuthentication } from './sagas/authenticationSaga';
import ResourceGuesser from '@api-platform/admin/lib/ResourceGuesser';
import TeamTournamentsList from './components/TeamTournaments';

const App = (props) => {
  const [ state, dispatch ] = useContext(Context);

  fetchAuthentication(state.baseUrl, dispatch);

  const fetchHeaders = { Authorization: `Bearer ${window.localStorage.getItem("token")}` };
  const fetchHydra = (url, options = {}) => baseFetchHydra(url, {
    ...options,
    headers: new Headers(fetchHeaders),
  });

  const apiDocumentationParser = entrypoint => parseHydraDocumentation(entrypoint, {headers: new Headers(fetchHeaders)})
  .then(
    ({api}) => ({api}),
    (result) => {
      switch (result.status) {
        // case 401:
        //   return Promise.resolve({
        //     api: result.api,
        //     customRoutes: [
        //       <Route path="/" render={() => {
        //         window.localStorage.getItem("token") ? window.location.reload() : <Redirect to="/login" />
        //       }} />
        //     ],
        //   });

        default:
          return Promise.reject(result);
      }
    },
  );



  const entrypoint = 'https://api.rating.chgk.net';

  const dataProvider = baseHydraDataProvider(entrypoint, fetchHydra, apiDocumentationParser);

  // const dataProvider = hydraDataProvider({
  //   entrypoint,
  //   httpClient: fetchHydra,
  //   apiDocumentationParser: parseHydraDocumentation,
  //   mercure: true,
  //   useEmbedded: true,
  // });


  return (
    <HydraAdmin
        dataProvider={dataProvider}
        entrypoint={entrypoint}
    >
        <ResourceGuesser
          name='countries'
          list={TeamTournamentsList} 
        />
    </HydraAdmin>
  )
}

export default App;

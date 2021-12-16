import {
  HydraAdmin,
  fetchHydra as baseFetchHydra,
  hydraDataProvider as baseHydraDataProvider,
  useIntrospection,
} from "@api-platform/admin";
import { parseHydraDocumentation } from "@api-platform/api-doc-parser";
import ResourceGuesser from '@api-platform/admin/lib/ResourceGuesser';
import { Redirect, Route } from "react-router-dom";
import { authProvider } from "../sagas/authenticationSaga";
import { Resource } from "react-admin";
import { CountriesCreate, CountriesEdit, CountriesList } from "./Lists/Countries";
import { PlayersCreate, PlayersEdit, PlayersList } from "./Lists/Players";

const Admin = (props) => {
  const getHeaders = () => localStorage.getItem("token") ? {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  } : {};
  
  const fetchHydra = (url, options = {}) =>
  baseFetchHydra(url, {
    ...options,
    headers: getHeaders,
  });

  const RedirectToLogin = () => {
    const introspect = useIntrospection();
  
    if (localStorage.getItem("token")) {
      introspect();
      return <></>;
    }
    return <Redirect to="/login" />;
  };

  const apiDocumentationParser = async (entrypoint) => {
    try {
      const { api } = await parseHydraDocumentation(entrypoint, { headers: getHeaders });
      return { api };
    } catch (result) {
      if (result.status === 401) {
        // Prevent infinite loop if the token is expired
        localStorage.removeItem("token");
  
        return {
          api: result.api,
          customRoutes: [
            <Route path="/" component={RedirectToLogin} />
          ],
        };
      }
  
      throw result;
    }
  };

  const dataProvider = baseHydraDataProvider({
    entrypoint: localStorage.getItem('apiUrl'),
    httpClient: fetchHydra,
    apiDocumentationParser,
    mercure: true,
  });

  return (
    <HydraAdmin dataProvider={dataProvider} entrypoint={localStorage.getItem('apiUrl')} authProvider={authProvider}>
      <Resource name='countries' list={CountriesList} edit={CountriesEdit} create={CountriesCreate} />
      <Resource name='players' list={PlayersList} edit={PlayersEdit} create={PlayersCreate} />
      <ResourceGuesser name='players' />
      <ResourceGuesser name='regions' />
      <ResourceGuesser name='releases' />
      <ResourceGuesser name='seasons' />
      <ResourceGuesser name='teams' />
      <ResourceGuesser name='tournaments' />
      <ResourceGuesser name='tournament_flags' />
      <ResourceGuesser name='tournament_types' />
      <ResourceGuesser name='towns' />
      <ResourceGuesser name='venues' />
    </HydraAdmin>
  )
}

export default Admin
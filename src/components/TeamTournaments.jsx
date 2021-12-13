import FieldGuesser from "@api-platform/admin/lib/FieldGuesser";
import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import { TextField } from "react-admin";


const TeamTournamentsList = (props) => (
  <ListGuesser {...props}>
    <FieldGuesser source="teamTournaments" />
    {/* Use react-admin components directly when you want complex fields. */}
    <TextField label="Author first name" source="author.firstName" />
  </ListGuesser>
);

export default TeamTournamentsList
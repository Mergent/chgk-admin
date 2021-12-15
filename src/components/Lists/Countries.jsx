import FieldGuesser from "@api-platform/admin/lib/FieldGuesser";
import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import { TextField } from "react-admin";


const CountriesList = (props) => {
    return (
    <ListGuesser {...props}>
      <FieldGuesser source="name" />
    </ListGuesser>
  )
};

export default CountriesList
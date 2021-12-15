import FieldGuesser from "@api-platform/admin/lib/FieldGuesser";
import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import { Pagination } from "react-admin";

const CountriesPagination = props => <Pagination rowsPerPageOptions={[30, 100, 500]} {...props} />;

const CountriesList = (props) => {
    return (
    <ListGuesser {...props} pagination={<CountriesPagination />}>
      <FieldGuesser source="name" />
    </ListGuesser>
  )
};

export default CountriesList
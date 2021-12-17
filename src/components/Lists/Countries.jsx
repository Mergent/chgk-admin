import { Pagination, List, TextField, Datagrid, EditButton, Resource, Edit, SimpleForm, TextInput, required, Create, ReferenceInput, SelectInput, SearchInput } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import { CustomPagination, rowStyle, styles } from "./styles";

// const CountriesPagination = props => <Pagination rowsPerPageOptions={[10, 30, 100]} {...props} />;

const countiesFilters = [
  <SearchInput source="name" alwaysOn />,
  // <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
  //     <SelectInput optionText="name" />
  // </ReferenceInput>,
];

export const CountriesEdit = (props) => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled label="Id" source="id" />
          <TextInput source="name" validate={required()} />
      </SimpleForm>
  </Edit>
);

export const CountriesCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="name" />
      </SimpleForm>
  </Create>
);

export const CountriesList = (props) => {
  return (
    <List {...props} pagination={<CustomPagination />} filters={countiesFilters}>
      <Datagrid classes={makeStyles(styles)()} rowStyle={rowStyle}>
        <TextField source="name" />
        <EditButton />
      </Datagrid>
    </List>
  )
};

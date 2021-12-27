import { List, TextField, Datagrid, EditButton, Edit, SimpleForm, TextInput, required, Create, SearchInput } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import { CustomPagination, rowStyle, styles } from "./styles";

const countiesFilters = [
  <SearchInput source="name" alwaysOn />,
];

export const CountriesEdit = (props) => (
  <Edit mutationMode="undoable" {...props}>
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

export const CountriesList = (props) => (
  <List {...props} pagination={<CustomPagination />} filters={countiesFilters}>
    <Datagrid classes={makeStyles(styles)()} rowStyle={rowStyle}>
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

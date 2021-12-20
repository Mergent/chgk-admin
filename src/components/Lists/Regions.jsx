import { List, TextField, Datagrid, EditButton, Edit, SimpleForm, TextInput, required, Create, SearchInput } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import { CustomPagination, rowStyle, styles } from "./styles";

const regionsFilters = [
  <SearchInput source="name" alwaysOn />,
];

export const RegionsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const RegionsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const RegionsList = (props) => (
  <List {...props} pagination={<CustomPagination />} filters={regionsFilters}>
    <Datagrid classes={makeStyles(styles)()} rowStyle={rowStyle}>
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);
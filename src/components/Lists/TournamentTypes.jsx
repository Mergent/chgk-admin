import { List, TextField, Datagrid, EditButton, Edit, SimpleForm, TextInput, required, Create } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import { CustomPagination, rowStyle, styles } from "./styles";

export const TournamentTypeEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const TournamentTypeCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const TournamentTypeList = (props) => (
  <List {...props} pagination={<CustomPagination />}>
    <Datagrid classes={makeStyles(styles)()} rowStyle={rowStyle}>
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);
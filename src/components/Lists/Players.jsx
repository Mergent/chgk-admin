import { List, TextField, Datagrid, EditButton, Edit, SimpleForm, TextInput, required, Create, SearchInput } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import { CustomPagination, rowStyle, styles } from "./styles";

const playersFilters = [
  <SearchInput source="name" alwaysOn />,
];

export const PlayersEdit = (props) => (
  <Edit mutationMode="undoable" {...props}>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="name" validate={required()} />
    </SimpleForm>
  </Edit>
);

export const PlayersCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

export const PlayersList = (props) => (
  <List {...props} pagination={<CustomPagination />} filters={playersFilters}>
    <Datagrid classes={makeStyles(styles)()} rowStyle={rowStyle}>
      <TextField source="surname" />
      <TextField source="name" />
      <TextField source="patronymic" />
      <EditButton />
    </Datagrid>
  </List>
);

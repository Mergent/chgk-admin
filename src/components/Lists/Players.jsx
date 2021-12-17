import { List, TextField, Datagrid, EditButton, Resource, Edit, SimpleForm, TextInput, required, Create, ReferenceInput, SelectInput, SearchInput } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import { CustomPagination, rowStyle, styles } from "./styles";

const playersFilters = [
  <SearchInput source="name" alwaysOn />,
  // <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
  //     <SelectInput optionText="name" />
  // </ReferenceInput>,
];

export const PlayersEdit = (props) => (
  <Edit {...props}>
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

export const PlayersList = (props) => {
  return (
    <List {...props} pagination={<CustomPagination />} filters={playersFilters}>
      <Datagrid classes={makeStyles(styles)()} rowStyle={rowStyle}>
        <TextField source="surname" />
        <TextField source="name" />
        <TextField source="patronymic" />
        <EditButton />
      </Datagrid>
    </List>
  )
};

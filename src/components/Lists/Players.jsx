import { Pagination, List, TextField, Datagrid, EditButton, Resource, Edit, SimpleForm, TextInput, required, Create, ReferenceInput, SelectInput, SearchInput } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';

const PlayersPagination = props => <Pagination rowsPerPageOptions={[10, 30, 100]} {...props} />;

const playersFilters = [
  <SearchInput source="name" alwaysOn />,
  // <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
  //     <SelectInput optionText="name" />
  // </ReferenceInput>,
];

const useStyles = makeStyles({
  table: {
      backgroundColor: 'Lavender',
  },
  headerCell: {
      backgroundColor: 'MistyRose',
  },
});

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
console.log("LOG -> PlayersList -> props", props)
  const classes = useStyles();
  return (
    <List {...props} pagination={<PlayersPagination />} filters={playersFilters}>
      <Datagrid classes={classes}>
        <TextField source="surname" />
        <TextField source="name" />
        <TextField source="patronymic" />
        <EditButton />
      </Datagrid>
    </List>
  )
};

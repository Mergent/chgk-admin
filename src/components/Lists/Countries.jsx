import { Pagination, List, TextField, Datagrid, EditButton, Resource, Edit, SimpleForm, TextInput, required, Create, ReferenceInput, SelectInput, SearchInput } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';

const CountriesPage = (props) => <Resource name='countries' list={CountriesList} edit={CountriesEdit} />

const CountriesPagination = props => <Pagination rowsPerPageOptions={[10, 30, 100]} {...props} />;

const countiesFilters = [
  <SearchInput source="name" alwaysOn />,
  // <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
  //     <SelectInput optionText="name" />
  // </ReferenceInput>,
];

const useStyles = makeStyles({
  table: {
      backgroundColor: '#f4f0cb',
  },
  headerCell: {
      backgroundColor: '#f8f8f8',
      'border-color': '#e7e7e7',
      'border-radius': '4px',
      'color': '#555',
  },
});

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
  const classes = useStyles();
  return (
    <List {...props} pagination={<CountriesPagination />} filters={countiesFilters}>
      <Datagrid classes={classes}>
        <TextField source="name" />
        <EditButton />
      </Datagrid>
    </List>
  )
};

export default CountriesPage;
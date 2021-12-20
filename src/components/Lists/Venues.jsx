import { Pagination, List, TextField, Datagrid, EditButton, Resource, Edit, SimpleForm, TextInput, required, Create, ReferenceInput, SelectInput, SearchInput, AutocompleteInput } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import { CustomPagination, rowStyle, styles } from "./styles";

const venuesFilters = [
  <SearchInput source="name" alwaysOn />,
  // <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
  //     <SelectInput optionText="name" />
  // </ReferenceInput>,
];

export const VenuesEdit = (props) => {
console.log("LOG -> props", props)
  return (
  <Edit {...props}>
      <SimpleForm>
          <TextInput disabled label="Id" source="id" />
          <TextInput source="name" validate={required()} />
      </SimpleForm>
  </Edit>
  )};

export const VenuesCreate = (props) => {
console.log("LOG -> VenuesCreate -> props", props)
  return (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="name" />
          <ReferenceInput label="Town" source="town" reference="towns" perPage={100} >
            <AutocompleteInput optionText="name" suggestionLimit={10} />
          </ReferenceInput>
      </SimpleForm>
  </Create>
)};

export const VenuesList = (props) => {
  return (
    <List {...props} pagination={<CustomPagination />} filters={venuesFilters}>
      <Datagrid classes={makeStyles(styles)()} rowStyle={rowStyle}>
        <TextField source="name" />
        <EditButton />
      </Datagrid>
    </List>
  )
};

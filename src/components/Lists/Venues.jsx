import { List, TextField, Datagrid, EditButton, Edit, SimpleForm, TextInput, Create, ReferenceInput, SearchInput, AutocompleteInput, SelectInput } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import { CustomPagination, rowStyle, styles } from "./styles";

const venuesFilters = [
  <SearchInput source="name" alwaysOn />
];

export const VenuesEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
    <TextInput source="name" />
      <ReferenceInput label="Town" source="town" reference="towns" perPage={100} >
        <AutocompleteInput optionText="name" suggestionLimit={10} />
      </ReferenceInput>
      <SelectInput label="Type Id" source="typeId" choices={[
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
      ]} />
    </SimpleForm>
  </Edit>
);

export const VenuesCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceInput label="Town" source="town" reference="towns" perPage={100} >
        <AutocompleteInput optionText="name" suggestionLimit={10} />
      </ReferenceInput>
      <SelectInput label="Type Id" source="typeId" choices={[
        { id: 1, name: '1' },
        { id: 2, name: '2' },
        { id: 3, name: '3' },
        { id: 4, name: '4' },
      ]} />
    </SimpleForm>
  </Create>
);

export const VenuesList = (props) => (
  <List {...props} pagination={<CustomPagination />} filters={venuesFilters}>
    <Datagrid classes={makeStyles(styles)()} rowStyle={rowStyle}>
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);

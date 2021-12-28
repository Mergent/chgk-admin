import { List, TextField, Datagrid, EditButton, Edit, SimpleForm, TextInput, Create, ReferenceInput, SearchInput, AutocompleteInput, SelectInput, UrlField, useRecordContext } from "react-admin";
import { makeStyles } from '@material-ui/core/styles';
import { CustomPagination, rowStyle, styles } from "./styles";
import { useState } from "react";

const venuesFilters = [
  <SearchInput source="name" alwaysOn />
];

export const VenuesEdit = (props) => (
  <Edit mutationMode="undoable" {...props}>
    <SimpleForm>
    <TextInput source="name" />
      {/* TODO: perPage={-1} */}
      <ReferenceInput label="Town" source="town" reference="towns" perPage={1400} >
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
      {/* TODO: perPage={-1} */}
      <ReferenceInput label="Town" source="town" reference="towns" perPage={1400} >
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

const VenueUrls = (props) => {
  const record = useRecordContext(props);
  const [showUrls, setShowUrls] = useState(false);

  const urls = record.properties?.urls;
  const urlComponents = []


  if (urls) {
    for (let i = 1; i < urls?.length; i++) {
      urlComponents.push(<div key={i}><a href={record.properties?.urls[i]} target="_blank" rel="noreferrer">{record.properties?.urls[i]}</a></div>)
    }
  }

  return (
    <div>
      <a href={record.properties?.urls[0]} target="_blank" rel="noreferrer">{record.properties?.urls[0]}</a>
      {record.properties?.urls[1] && (
        <>
          <button onClick={() => setShowUrls(!showUrls)} className="urls-show-more-button">...</button>
          {showUrls && urlComponents}
        </>
      )}
    </div>
  )
}

export const VenuesList = (props) => (
  <List {...props} pagination={<CustomPagination />} filters={venuesFilters}>
    <Datagrid classes={makeStyles(styles)()} rowStyle={rowStyle}>
      <TextField source="name" />
      <VenueUrls />
      <TextField source="properties.address" />
      <EditButton />
    </Datagrid>
  </List>
);

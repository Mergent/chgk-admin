import { Pagination } from "react-admin";

export const styles = {
  headerCell: {
    backgroundColor: '#f8f8f8',
    'border-color': '#e7e7e7',
    'border-radius': '4px',
    'color': 'black',
    'font-weight': 'bold',
    'font-size': '15px',
  },
}

export const rowStyle = (record, index) => ({
  backgroundColor: index % 2 === 0 ? '#ded29e' : '#f4f0cb',
});

export const CustomPagination = props => <Pagination rowsPerPageOptions={[10, 30, 100]} {...props} />;
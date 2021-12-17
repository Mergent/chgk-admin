import { Menu } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  sidebar: {
    backgroundColor: 'red',
  }
};

const MyMenu = ({ classes, ...props }) => (
    <Menu className={classes.menu} {...props} />
);

export default withStyles(styles)(MyMenu);
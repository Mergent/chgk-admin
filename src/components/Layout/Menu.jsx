import { Menu } from 'react-admin';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    // menu: {
    //     backgroundColor: 'red',
    // },
};

const MyMenu = ({ classes, ...props }) => (
    <Menu className={classes.menu} {...props} />
);

export default withStyles(styles)(MyMenu);
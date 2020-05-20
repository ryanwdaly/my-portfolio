import React from 'react';
import { Link } from 'react-router-dom';


import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    flex: {
        flex: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
});

const TopBar = withStyles(styles)(({ classes }) => (
    <div className={classes.root }>
        <AppBar position="fixed">
            <Toolbar>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                >
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography
                    variant="title"
                    color="inherit"
                    className={classes.flex}
                >
                    Ryan W. Daly
                </Typography>
                <Link color="inherit" to='/'>Home</Link>
                <Link color="inherit" to='/portfolio'>Portfolio</Link>
                <Link color="inherit" to='/contact'>Contact</Link>
            </Toolbar>
        </AppBar>
    </div>
));

export default TopBar;

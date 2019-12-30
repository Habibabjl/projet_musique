import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom'
import { AppBar, Typography } from "@material-ui/core";
import App from './App';
import MenuArtist from './components/MenuArtist.js'; 
import TopArtist from './components/TopArtist.js'; 
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker';
import Toolbar from '@material-ui/core/Toolbar';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


/*import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  }));
const classes = useStyles();
   <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                    Material-UI
                </Typography>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
      </AppBar>
      import { SearchBar } from 'react-native-elements';
*/
const routing = (
     <Router>
         <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">
                Projet web
                </Typography>
                <div className="search">
                    <div className="searchIcon">
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: "inputRoot",
                        input: "inputInput",
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
          </AppBar>
        <div>
            <ul>
            <li>
            <NavLink exact activeClassName="active" to="/">
                Home
            </NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="/MenuArtist">
            MenuArtist
            </NavLink>
            </li>
            <li>
            <NavLink activeClassName="active" to="/TopArtist">
            TopArtist
            </NavLink>
            </li>
        </ul>
        <hr />
            <Switch>
                <Route path="/" component={App} />
                <Route path="/MenuArtist" component={MenuArtist} />
                <Route path="/TopArtist" component={TopArtist} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </Router>
  )


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NewsSearch from "./NewsSearch"
import axios from "axios"
import { NewsContextProvider } from "../NewsContext"
import News from "./News"


const useStyles = makeStyles((theme) => ({
    
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
    padding: theme.spacing(0, 2),
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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [search,setSearch]=useState({})
  const [open,setOpen] = useState(false)
console.log(Object.keys(search).length)
  

  return (
    <div className={classes.root}>
      <AppBar position="fixed" >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            UK News
          </Typography>
          <div className={classes.search}   onClick={()=>{setOpen(true);console.log('open',open)}}>
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
              // value={search}
            
              // onChange={(e)=>{setSearch(e.target.value)}}
            />
          </div>
          {open? <NewsSearch open={open} setOpen={setOpen} setSearch={setSearch}/>:null}
        </Toolbar>
      </AppBar>
     


    {search.q?
    (  <NewsContextProvider search={search}>
          <News />
         </NewsContextProvider>)
         :null}
    </div>
  );
}

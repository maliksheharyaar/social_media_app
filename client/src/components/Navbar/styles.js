import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 50px',
    backgroundColor: '#d9004b',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      padding: "1rem 0px"
    },
    
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '2em',
    fontWeight: 300,
  },
  image: {
    marginLeft: '10px',
    marginTop: '5px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '18rem',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 20,
      
      justifyContent: 'space-between'
    },
  },
  signin: {
    border: "1px solid",
    borderColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: '0 2px 2px 2px rgba(255, 105, 135, .3)',
    color: '#FF8E53',
    '&:hover': {
      color: "white"
    },
    height: 30,
    fontWeight: 'bold',
    padding: '0 20px',
  },
  logout: {
    
    border: "1px solid",
    borderColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    backgroundColor: "white",
    borderRadius: 5,
    boxShadow: '0 2px 2px 2px rgba(255, 105, 135, .3)',
    color: '#FF8E53',
    '&:hover': {
      color: "white",
    },
    height: 30,
    fontWeight: 'bold',
    padding: '0 20px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: 'white',
    padding: '0 5px',
    lineHeight: '1.2rem',
    [theme.breakpoints.down('sm')]: {
      padding: '0 10px',
      fontSize: '1.2rem'
      
    },
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));
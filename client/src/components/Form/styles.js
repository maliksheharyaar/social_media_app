import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
    borderColor: "black",
    borderRadius: 5,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  buttonClear: {
    marginBottom: 10,
    border: "1px solid",
    borderColor: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 5,
    boxShadow: '0 2px 2px 2px rgba(255, 105, 135, .3)',
    color: '#FF8E53',
    height: 48,
    padding: '0 30px',
    margin: "10px 0"
  },
}));
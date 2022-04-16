import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    borderRadius: "15px",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  title: {
    color: "#474755"
  },
  avatar: {
    margin: theme.spacing(1),
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
    borderColor: "black",
    padding: "6px 16px",
  },
  demoSubmit: {
    margin: theme.spacing(2, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#fff",
    color: "#474747",
    '&:hover': {
      backgroundColor: '#fff',
      color: "#3585f3",
  }
  },
  switchText: {
    color: "#3585f3"
  }
}));
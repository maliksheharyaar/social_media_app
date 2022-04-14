import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: "5px",
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0 10px"

  },
  pagination: {
    borderRadius: "5px",
    marginTop: '1rem',
    padding: '16px',
  },
  searchContainer: {
    width: '100%',
    padding: "0 10px",
    borderRadius: "5px"
  },
  tagContainer: {
    margin: "8px",
    
  },
  postsContainer: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
}));
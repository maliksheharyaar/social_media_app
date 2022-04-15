import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: "0 10px",
    boxShadow: '0 3px 5px 2px #f7f8fc',
    backgroundColor:"#f7f8fc"
  },
  pagination: {
    borderRadius: "5px",
    marginTop: '1rem',
    padding: '16px',
  },
  searchContainer: {
    padding: "10px 10px",
    borderRadius: "5px",
    
  },
  tagContainer: {
    margin: "8px",
    paddingBottom: "10px",
    marginTop: "15px"
    
  },
  postsContainer: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center"
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
}));
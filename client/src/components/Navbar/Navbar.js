import React, { useState, useEffect} from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import { AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import social_blog from '../../images/Social_Blog.png';
import logo from '../../images/coffee_logo.png';  
import useStyles from './styles';



const Navbar = () => {

    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const logout = () => {
        dispatch({ type: 'LOGOUT'});

        history.push('/');
        setUser(null);
    }

    useEffect(() => {
        const token = user?.token;

        if(token){
            const decodedToken = decode(token);

            if(decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        //Check JWT 
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location])


    return (
        <AppBar className={classes.appBar} position='static' color='inherit' elevation={1}>
            <Link to="/" className={classes.brandContainer}>
                <img src={social_blog} alt='social blog' height="30" />
                <img className={classes.imageLogo} src={logo} alt="icon" height="35px"/>
            </Link>
        <Toolbar className={classes.toolbar}>
            {user ? (
                <div className={classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant="subtitle1">{user.result.name}</Typography>
                    <Button variant='contained' className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                </div>
            ) : (
                <Button className={classes.signin} component={Link} to="/auth" variant='contained' color='secondary'>Sign In</Button>
            )}
        </Toolbar>
        </AppBar>
    )
}

export default Navbar
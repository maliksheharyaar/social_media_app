import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getPostsBySearch } from '../../actions/posts';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import Pagination from '../Pagination';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';
import SearchIcon from '@material-ui/icons/Search';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const query = useQuery();
    const history = useHistory();
    const dispatch = useDispatch();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    const searchPost = () => {
        if (search.trim() || tags) {
            // dispatch -> fetch search post
            dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            history.push('/');
        }
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            searchPost();
        }
    }
    //<Container maxWidth="xl">  </Container>
    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));
    return (
        <Grow in>
            <Container className={classes.searchContainer} maxWidth="xl" >
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3} className={classes.gridContainer}>

                    <AppBar className={classes.appBarSearch} position="static" color="inherit">
                        <TextField
                            name="search"
                            variant='outlined'
                            label="Search posts"
                            onKeyDown={handleKeyDown}
                            fullWidth
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}

                        />

                        <ChipInput
                            className={classes.tagContainer}
                            value={tags}
                            onAdd={handleAdd}
                            onDelete={handleDelete}
                            label="Search by tags"
                            fullWidth
                            variant="outlined"
                        />

                        <Button onClick={searchPost} className={classes.searchButton} ><SearchIcon /></Button>
                    </AppBar>


                    <Grid className={classes.postsContainer} item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>

                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                        {(!searchQuery && !tags.length) && (
                            <Paper elevation={1} className={classes.pagination}>
                                <Pagination page={page} />
                            </Paper>
                        )}

                    </Grid>

                </Grid>
            </Container>
        </Grow>
    )
}

export default Home
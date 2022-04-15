import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const history = useHistory();

    useEffect(() => {
        if (!post?.title) clear();
        if (post) setPostData(post);
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createPost({...postData, name: user?.result?.name}, history));
            clear();
        } else {
            
            dispatch(updatePost(currentId, {...postData, name: user?.result?.name}));
            clear();
        }

    }

    const clear = () => {
        setCurrentId(0);
        setPostData({ title: '', message: '', tags: [], selectedFile: '' });
    }
    const handleAddChip = (tag) => {
        setPostData({ ...postData, tags: [...postData.tags, tag] });
    };

    const handleDeleteChip = (chipToDelete) => {
        setPostData({ ...postData, tags: postData.tags.filter((tag) => tag !== chipToDelete) });
    };

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please sign in to create personal blog posts and to like others'
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper className={classes.paper} elevation={1}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a blog post</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                <TextField name="message" variant="outlined" multiline rows={4} label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                <div style={{ padding: '5px 0', width: '94%' }}>
                    <ChipInput
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        fullWidth
                        value={postData.tags}
                        onAdd={(chip) => handleAddChip(chip)}
                        onDelete={(chip) => handleDeleteChip(chip)}
                    />
                </div>
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.buttonClear} variant="outlined" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}

export default Form;
import React from 'react';
import { Typography } from '@material-ui/core';
import mainStyle from '../mainStyle';

const Footer = () => {
    const classes = mainStyle();
    return (
        <div className={classes.Footer}>
            <Typography variant="body2" justify="center" >
                All images used courtesy of the <a rel="noopener noreferrer" href="https://dog.ceo" target="_blank">Dogs API</a>;
                as such, images are subject to copyright were applicable
                <br />
                This app was built by Nick Morales Copyright &copy; 2020 Some rights reserved, check out the source code <a rel="noopener noreferrer" target="_blank" href="https://github.com/nickmora/dog-images-generator">here</a>
                <br />
                To see more neat projects, check out my <a href="https://github.com/nickmora">GitHub</a> or my website: <a rel="noopener noreferrer" target="_blank" href="https://nickmorales.dev">NickMorales.dev</a>
            </Typography>
        </div>
    );
}

export default Footer;
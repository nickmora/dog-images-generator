import React from 'react';
import { Typography } from '@material-ui/core';
import mainStyle from '../mainStyle';

const Footer = () => {
    const classes = mainStyle();
    return (
        <div className = {classes.Footer}>
            <Typography variant = "body2" justify = "center" >
                All images used courtesy of the <a href = "https://dog.ceo" target = "_blank">Dogs API</a>;
                as such, images are subject to copyright were applicable.
                <br />
                This app was built by Nick Morales, check out the <a target = "_blank" href = "https://github.com/nickmora/dog-images-generator"> source code here</a>
                <br />
                To see more neat projects, check out my <a href = "https://github.com/nickmora">GitHub</a> or check out my website: <a target = "_blank" href = "https://nickmorales.dev">NickMorales.dev</a>
            </Typography>
        </div>
    );
}

export default Footer;
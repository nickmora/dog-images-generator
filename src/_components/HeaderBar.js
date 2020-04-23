import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

const HeaderBar = () => {
    return (
        <AppBar position="static" justify="center">
            <Typography variant="h3">
                Dog Images Generator!
            </Typography>
        </AppBar>
    );
}

export default HeaderBar;
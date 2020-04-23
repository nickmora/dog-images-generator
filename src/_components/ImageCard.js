import React, { Fragment } from 'react';
import { Card, CardActions, Button, Grid, Paper } from "@material-ui/core";
const ImageCard = (props) => {
    return (
        <Grid style={{ paddingTop: 150 }} container spacing={10} justify="center">
            <Card>
                <Paper style={{ padding: 15 }}>
                    <Grid item xs={12}>
                        {props.image ? (
                            <img
                                style={{ height: "100%" }}
                                src={props.image}
                                alt="A joyous looking dog"
                            />) : (
                                <Fragment>
                                    <p>Loading...</p>
                                    <img src = {require("../media/Infinity-2.5s-357px.gif")} />
                                </Fragment>
                            )}
                    </Grid>
                </Paper>
                <CardActions>
                    <Grid item xs={12} sm={6}>
                        <Button onClick={props.reset}>
                            See a New Dog
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button onClick={props.reset}>
                            Save this Dog
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ImageCard;
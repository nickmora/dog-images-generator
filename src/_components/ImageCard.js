import React, { Fragment } from 'react';
import { Card, CardActions, Button, Grid, Paper } from "@material-ui/core";
const loadingImage = require("../media/Infinity-2.5s-357px.gif")
const ImageCard = (props) => {
    //     const downloadImage = () =>{
    //         console.log(props.image)
    //         fetch(props.image,{
    //             mode: "no_cors"
    //         })
    //             .then(resp=>console.log(resp)) 
    //         //     .then(resp => resp.ok ? resp.blob() : console.log("network response was not OK", resp))
    //         //     .then(dogImage =>{
    //         //         console.log(dogImage)
    //         //         debugger;
    //         //         const url = window.URL.createObjectURL(dogImage)
    //         //         const link = document.createElement("a");
    //         //         link.href = url;
    //         //         link.setAttribute('download', 'happy_dog.jpg');
    //         //         document.getElementById("download-button").appendChild(link)
    //         //         link.click();
    //         //     })
    //     }
    return (
        <Grid style={{ paddingTop: 150 }} container spacing={10} justify="center">
            <Card style = {{padding:15}}>
                <Paper style={{ padding: [15, 15, 15, 0] }}>
                    <Grid item xs={12}>
                            <Fragment>
                                <img
                                    style={{ height: "auto", maxHeight: "100%", maxWidth:1250 }}
                                    src={!props.loading ? props.image : loadingImage }
                                    alt="A joyous looking dog"
                                />
                            </Fragment>
                    </Grid>
                </Paper>
                <CardActions>
                    <Grid item xs={12} sm={6}>
                        <Button
                            onClick={props.reset}
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            See a New Dog
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            // onClick={downloadImage} 
                            id="download-button"
                            disabled
                            fullWidth
                        >
                            Download Image
                        </Button>
                    </Grid>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ImageCard;
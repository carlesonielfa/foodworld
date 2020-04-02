import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core";
import pizza from "./assets/pizza.png";

const styles = makeStyles(theme => ({
    root:{
        display: "flex",
        align: "center",
        margin: '20px'
    },
    imageContainer:{
        width: "90%"
    },
}))

export default function MenuItem(props) {
    const classes = styles();

    return (
    <div className={classes.root}>
        <div>
            <img className={classes.imageContainer} src={props.image}></img>
        </div>
        <div>
            <Typography variant="h3">
                {props.title}
            </Typography>
            <Typography >
                {props.description}
            </Typography>
            <Typography variant="subtitle1" color="secondary">
                {props.prize}
            </Typography>
        </div>
    </div>
    );
}

import React from 'react';
import { makeStyles, Typography, ButtonBase } from "@material-ui/core";
import { Link } from "react-router-dom";

const buttonItemMenu = makeStyles(theme => ({
    root: {
        position: "center",
        height: 40,
        width: "80%",
        marginTop: "15px",
        marginBot: "20px",
        backgroundColor: theme.palette.accent.main
    },
}));

export default function FoodButton(props){
    const buttons = buttonItemMenu();
    return(
        <div align="center">
            <ButtonBase className={buttons.root} props>
                <Typography variant="h2" color="inherit">
                    {props.text}
                </Typography>
            </ButtonBase>
        </div>
    )
}
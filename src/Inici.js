import React from 'react';
import Typography from '@material-ui/core/Typography';
import sharing from "./assets/sharing.jpg";


export default function Inici(){
    return(
        <div>
            
            <Typography align="center" variant="h2">
                Header 2
            </Typography>
            <Typography align="center" variant="h3">
                Header 3
            </Typography>
            <Typography align="center">
                Body
            </Typography>
            <div align="center">
            <img src={sharing} width="350px"></img>
            </div>
            
        </div>

    );
}
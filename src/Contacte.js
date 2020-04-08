import React from "react";
import {Typography} from "@material-ui/core/";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import GoogleMap from 'google-map-react';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import PlaceIcon from '@material-ui/icons/Place';
import { Grid } from '@material-ui/core'
import RoomIcon from '@material-ui/icons/Room';


const useStyles = makeStyles((theme) => ({
    root: {
      padding : '20px',
      paddingLeft: '10%',
    },
    contactBox: {
        paddingLeft: "40px"
    }
  }));

  const Marker = ({ title }) => (
    <div>
        <RoomIcon/>
        <Typography display='inline' align= "center" noWrap>
            {title}
        </Typography>
    </div>
  );

export default function Contacte() {
    const classes = useStyles();

  return (
    <div>
        <div align="center">
            <Typography  className={classes.root} align="left" variant="h2">
                Contacte
            </Typography>
        </div>
        <div align="left" className={classes.contactBox}>
            <Grid container direction="row" alignItems="center" >
                <Grid item>
                    <PhoneIcon fontSize="large" />
                </Grid>
                <Grid item>
                    <Typography  className={classes.root} variant="h3" >
                        930001122 
                    </Typography>
                </Grid>
            </Grid>
        </div>
        <div align="left" className={classes.contactBox}>
            <Grid container direction="row" alignItems="center" >
                <Grid item>
                    <MailIcon fontSize="large" />
                </Grid>
                <Grid item>
                    <Typography  className={classes.root} variant="h3">
                        info@foodworld.com
                    </Typography>
                </Grid>
            </Grid>
        </div>
        <div align="left" className={classes.contactBox}>
            <Grid container direction="row" alignItems="center" >
                <Grid item>
                    <PlaceIcon fontSize="large" />
                </Grid>
                <Grid item>
                    <Typography  className={classes.root} variant="h3">
                        Av. Diagonal 1234
                    </Typography>
                </Grid>
            </Grid>
        </div>

        <div style={{width:'100%', height:'70%', align:"center",}}>
        <GoogleMap
        bootstrapURLKeys={{ key: 'AIzaSyCW-ZfgFahCgZlHqbFfpUq8yuGCqFF_T5Y' }}
        center={{ lat: 41.3876167, lng: 2.1617593 }}
        zoom={15}
        >
        <Marker
        title={"Direcció d'entrega"}
        lat={41.3866167}
        lng={2.1607593}/>
        
        </GoogleMap>
    </div>
        
    </div>

  );
}
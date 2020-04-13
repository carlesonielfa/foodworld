import React from "react";
import { Typography, Paper } from "@material-ui/core/";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import GoogleMap from "google-map-react";
import RoomIcon from "@material-ui/icons/Room";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";
import KitchenIcon from "@material-ui/icons/Kitchen";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import FastfoodIcon from "@material-ui/icons/Fastfood";

const Marker = ({ title }) => (
  <div>
    <RoomIcon />
    <Typography display="inline" align="center" noWrap>
      {title}
    </Typography>
  </div>
);
const ColorlibConnector = withStyles((theme) => ({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  completed: {
    "& $line": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: "#eaeaf0",
    borderRadius: 1,
  },
}))(StepConnector);
const useColorlibStepIconStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  },
  completed: {
    backgroundColor: theme.palette.primary.main,
  },
}));
const useStyles = makeStyles((theme) => ({
  stepper: {
    backgroundColor: theme.palette.background.main,
  },
}));
function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;

  const icons = {
    1: <KitchenIcon />,
    2: <DirectionsBikeIcon />,
    3: <FastfoodIcon />,
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

function getSteps() {
  return ["Preparació", "En Camí", "Ha arribat"];
}
export default function Seguiment() {
  const classes = useStyles();
  const activeStep = React.useState(1)[0];
  const steps = getSteps();
  return (
    <div>
      <Typography style={{ marginBottom: "20px" }} align="left" variant="h3">
        Seguiment
      </Typography>
      <Paper
        elevation={4}
        style={{ width: "100%", height: "50vh", align: "center" }}
      >
        <div style={{ width: "100%", height: "30%", align: "center" }}>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={<ColorlibConnector />}
            className={classes.stepper}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel StepIconComponent={ColorlibStepIcon}>
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>

        <div style={{ width: "100%", height: "70%", align: "center" }}>
          <GoogleMap
            bootstrapURLKeys={{
              key: "AIzaSyCW-ZfgFahCgZlHqbFfpUq8yuGCqFF_T5Y",
            }}
            center={{ lat: 41.3876167, lng: 2.1617593 }}
            zoom={15}
          >
            <Marker
              title={"Direcció d'entrega"}
              lat={41.3866167}
              lng={2.1607593}
            />
            <Marker title={"Repartidor"} lat={41.391447} lng={2.157698} />
          </GoogleMap>
        </div>
      </Paper>
    </div>
  );
}

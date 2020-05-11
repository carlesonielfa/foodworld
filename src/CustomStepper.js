import React from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { FormulariEnviament, FormulariPagament } from "./Formularis";
import Seguiment from "./Seguiment";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from "react-redux";

const QontoConnector = withStyles((theme) => ({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: theme.palette.accent.main,
    },
  },
  completed: {
    "& $line": {
      borderColor: theme.palette.accent.main,
    },
  },
  line: {
    borderColor: theme.palette.primary.light,
    borderTopWidth: 3,
    borderRadius: 1,
  },
}))(StepConnector);

const useQontoStepIconStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.light,
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: theme.palette.accent.main,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: theme.palette.accent.main,
    zIndex: 1,
    fontSize: 22,
  },
}));

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  active: PropTypes.bool,
  completed: PropTypes.bool,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  buttonContainer: {
    position: "fixed",
    left: "50%",
    bottom: "12%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  stepper: {
    backgroundColor: theme.palette.background.main,
  },
  snackbar: {
    position:"absolute",
    bottom: theme.spacing(15)
  }
}));

function getSteps() {
  return ["Dades", "Pagament", "Seguiment"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <FormulariEnviament />;
    case 1:
      return <FormulariPagament />;
    case 2:
      return <Seguiment />;
    default:
      return "Unknown step";
  }
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function CustomStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const dispatch = useDispatch();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === 1){
      setOpen(true);
      dispatch({ type: "CLEAR_CART"});
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  }; 
  const handleClose = () => {
    setOpen(false);
  }; 
  const buttons = (activeStep) =>{
    if(activeStep === steps.length - 1)
    {
      return <div/>
    }
    else{
    return(<div className={classes.buttonContainer}>
      <Button
        disabled={activeStep === 0}
        onClick={handleBack}
        className={classes.button}
      >
        Enrere
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        className={classes.button}
      >
        Següent
      </Button>
    </div>)
    }
  };
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
        className={classes.stepper}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            {buttons(activeStep)}
            <Snackbar
             open={open}
             autoHideDuration={3000}
             onClose={handleClose}
             className={classes.snackbar}>
              <Alert onClose={handleClose} severity="success">
              Comanda realitzada amb èxit!
              </Alert>
            </Snackbar>
          </div>
        )}
      </div>
    </div>
  );
}

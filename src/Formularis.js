import React from "react";
import { Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

const styles = makeStyles((theme) => ({
  field: {
    margin: "10px",
  },
  smallField: {
    margin: "10px",
  },
  number: {
    display: "flex",
    marginTop: "10px",
  },
}));

const dadesEnviament = ["Provincia", "Localitat", "Carrer i número"];

function FormulariEnviament() {
  const classes = styles();
  return (
    <div>
      <Typography align="left" variant="h3">
        Dades d'enviament
      </Typography>
      <form>
        <div>
          {dadesEnviament.map((dada) => (
            <div>
              <TextField
                className={classes.field}
                id="standard-basic"
                label={dada}
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}

const dadesPagament = ["Titular de la targeta", "Número de la targeta"];

function FormulariPagament() {
  const [mes, setMes] = React.useState("1");
  const [errorCCV, setErrorCCV] = React.useState(false);
  const handleChangeCCV = (event) =>{
    let s = event.target.value;
    setErrorCCV(s.length !== 3 || !/^\d+$/.test(s));
  };

  const [errorTitular, setErrorTitular] = React.useState(false);
  const handleErrorTitular = (event) =>{
    let s = event.target.value;
    setErrorTitular(!/^[a-zA-Z\s]*$/.test(s));
  };
  
  const [errorNum, setErrorNum] = React.useState(false);
  const handleChangeNum = (event) =>{
    let s = event.target.value;
    setErrorNum(s.length <= 13 || s.length >= 18 || !/^\d+$/.test(s));
  };

  const handleChangeMes = (event) => {
    setMes(event.target.value);
  };
  const [any, setAny] = React.useState("2020");
  const handleChangeAny = (event) => {
    setAny(event.target.value);
  };
  const classes = styles();

  return (
    <div>
      <Typography align="left" variant="h3">
        Dades de Pagament
      </Typography>
      <form>
        <div>
            <div>
            <TextField
              className={classes.field}
              id="standard-basic1"
              label="Titular de la tarjeta"
              onChange = {handleErrorTitular}
              error = {errorTitular}
              helperText={errorTitular ? "Nomès s'accepten lletres i espais": ""}
            />
            </div>
            <div>
            <TextField
              className={classes.field}
              id="standard-basic2"
              label="Número de la tarjeta"
              onChange = {handleChangeNum}
              error = {errorNum}
              helperText={errorNum ? "Nomès és un número de tarjeta vàlid" :""}
            />
            </div>
          <div className={classes.number}>
            <div className={classes.field}>
              <InputLabel>Mes</InputLabel>
              <Select value={mes} onChange={handleChangeMes}>
                {[...range(1, 12)].map((val) => (
                  <MenuItem value={val}>{val}</MenuItem>
                ))}
              </Select>
            </div>
            <div className={classes.field}>
              <InputLabel>Any</InputLabel>
              <Select value={any} onChange={handleChangeAny}>
                {[...range(2020, 2030)].map((val) => (
                  <MenuItem value={val}>{val}</MenuItem>
                ))}
              </Select>
            </div>
          </div>
          <TextField
            className={classes.smallField}
            id="standard-basic"
            label="CCV"
            helperText={errorCCV ? "El CCV han de ser 3 dígits" : ""}
            onChange={handleChangeCCV}
            error = {errorCCV}
          />
        </div>
      </form>
    </div>
  );
}

function* range(start, end) {
  yield start;
  if (start === end) return;
  yield* range(start + 1, end);
}
export { FormulariEnviament, FormulariPagament };

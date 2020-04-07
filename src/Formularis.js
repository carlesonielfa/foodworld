import React from "react";
import {Typography} from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
const styles = makeStyles((theme) => ({
    field : {
        margin: "10px"
    },
    smallField : {
        margin: "10px",
        width: "40px"
    },
    number:{
        display:"flex",
        marginTop: "10px"
    }
}));


const dadesEnviament = ["Provincia", "Localitat", "Carrer i número"]

function FormulariEnviament() {
    const classes = styles();
    return(
        <div >
            <Typography  align="left" variant="h3">
                Dades d'enviament
            </Typography>
            <form>
                <div>
                    {dadesEnviament.map(dada => (
                        <TextField  className={classes.field} id="standard-basic" label={dada} />
                    ))}
                </div>
            </form>
        </div>
    );
}

const dadesPagament = ["Titular de la tarjeta", "Número de la tarjeta"]

function FormulariPagament() {
    const [mes, setMes] = React.useState('1');
    const handleChangeMes = (event) => {
        setMes(event.target.value);
    };
    const [any, setAny] = React.useState('2020');
    const handleChangeAny = (event) => {
        setAny(event.target.value);
    };
    const classes = styles();

    return(
        <div >
            <Typography  align="left" variant="h3">
                Dades de Pagament
            </Typography>
            <form>
                <div>
                    {dadesPagament.map(dada => (
                        <TextField  className={classes.field} id="standard-basic" label={dada} />
                    ))}
                    <div className={classes.number}>
                        <div className={classes.field}>
                            <InputLabel>Mes</InputLabel>
                            <Select value={mes} onChange={handleChangeMes}>
                                {[...range(1,12)].map((val)=>(
                                    <MenuItem value={val}>{val}</MenuItem>
                                ))}
                            </Select>
                        </div>
                        <div className={classes.field}>
                            <InputLabel>Any</InputLabel>
                            <Select value={any} onChange={handleChangeAny}>
                                {[...range(2020,2030)].map((val)=>(
                                    <MenuItem value={val}>{val}</MenuItem>
                                ))}
                            </Select>
                        </div>
                        
                    </div>
                    <TextField  className={classes.smallField} id="standard-basic" label="CCV"/>
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
export {FormulariEnviament,FormulariPagament}
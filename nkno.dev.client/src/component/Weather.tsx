import { useEffect, useState } from 'react';
import '../App.css';
//import * as React from 'react';
//import Button from '@mui/material/Button';
//import TextField from '@mui/material/TextField';
//import Dialog from '@mui/material/Dialog';
//import DialogActions from '@mui/material/DialogActions';
//import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
//import DialogTitle from '@mui/material/DialogTitle';
interface Forecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

function Weather() {
    const [forecasts, setForecasts] = useState<Forecast[]>();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
           {/* {FormDialog }*/}
            <h1 id="tabelLabel">Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );

    async function populateWeatherData() {
        const response = await fetch('api/weatherforecast/lots');
        const data = await response.json();
        setForecasts(data);
    }
}
//function FormDialog() {
//    const [open, setOpen] = React.useState(false);

//    const handleClickOpen = () => {
//        setOpen(true);
//    };

//    const handleClose = () => {
//        setOpen(false);
//    };

//    return (
//        <React.Fragment>
//            <Button variant="outlined" onClick={handleClickOpen}>
//                Open form dialog
//            </Button>
//            <Dialog
//                open={open}
//                onClose={handleClose}
//                PaperProps={{
//                    component: 'form',
//                    onSubmit: (event) => {
//                        event.preventDefault();
//                        const formData = new FormData(event.currentTarget);
//                        const formJson = Object.fromEntries(formData.entries());
//                        const email = formJson.email;
//                        console.log(email);
//                        handleClose();
//                    },
//                }}
//            >
//                <DialogTitle>Subscribe</DialogTitle>
//                <DialogContent>
//                    <DialogContentText>
//                        To subscribe to this website, please enter your email address here. We
//                        will send updates occasionally.
//                    </DialogContentText>
//                    <TextField
//                        autoFocus
//                        required
//                        margin="dense"
//                        id="name"
//                        name="email"
//                        label="Email Address"
//                        type="email"
//                        fullWidth
//                        variant="standard"
//                    />
//                </DialogContent>
//                <DialogActions>
//                    <Button onClick={handleClose}>Cancel</Button>
//                    <Button type="submit">Subscribe</Button>
//                </DialogActions>
//            </Dialog>
//        </React.Fragment>
//    );
//}

export default Weather;
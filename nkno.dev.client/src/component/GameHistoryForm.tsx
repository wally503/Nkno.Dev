import { GameHistory } from './GameHistory.tsx';
import {
    Box, TextField, FormControlLabel, Checkbox, Grid,
    Typography, Divider, DialogTitle
} from "@mui/material";
import * as React from 'react';
function GameHistoryForm(props: { needMain: boolean, needSub: boolean, history?: GameHistory, orderIndex?: number} ){
    const needMain: boolean = props.needMain;
    const needSub: boolean = props.needSub;
    //const history: GameHistory = props.history;
    //const orderIndex: number = props.orderIndex;
    

    const mainForm = needMain === false
        ? null
        : (
            <React.Fragment>
                <Grid container spacing={2}>
                    {/*<Paper elevation={3}>*/}
                        <Typography align="left">
                            Game Details:
                        </Typography>
                        <div>
                            <TextField
                                required
                                id="standard-required"
                                label="Game Name"
                                defaultValue=""
                            />
                        </div>
                        <div>
                            <TextField
                                required
                                id="standard-required"
                                label="Play Time"
                                defaultValue=""
                            />

                        </div>
                        <div>
                            <TextField
                                required
                                id="standard-required"
                                label="Game Franchise"
                                defaultValue=""
                            />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Possible to Complete" />
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Completed" />
                        </div>
                {/*    </Paper>*/}
                </Grid>
            </React.Fragment>
        );
        
    const subForm = needSub === false
        ? null
        :(
            <React.Fragment>
                {/*<Paper elevation={3}>*/}
                    <Typography align="left">
                        Versions & Expansions:
                    </Typography>
                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Game Name"
                            defaultValue=""
                        />
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Played" />
                    </div>
                    <div>
                        <TextField
                            required
                            id="standard-required"
                            label="Game Franchise"
                            defaultValue=""
                        />

                    </div>
                {/*</Paper>*/}
            </React.Fragment>
        );

    const divider = ((needMain === true) && (needSub === true))
        ? (<Divider sx={{ borderRadius: 40 }} />)
        : null;



    return (
        <Box>
            <DialogTitle>Add/Edit:</DialogTitle>
            {mainForm}
            {divider}
            {subForm}
        </Box>
    )
}

export default GameHistoryForm
import * as React from 'react';
import { useEffect, useState } from 'react';
import {
    Table, TableRow, TableHead, Collapse, 
    TableBody, TableContainer, TableCell, Paper, Box,
    Typography, Dialog
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { PlaylistAdd } from '@mui/icons-material';
import GameHistoryForm/*, { GameHistoryFormProps }*/ from './GameHistoryForm.tsx';
export interface GameHistory {
    id: string;
    userId: string;
    userName: string;
    gameName: string;
    playTime: number;
    completed: boolean;
    possibleToComplete: boolean;
    gameFranchise: string;
    expansionsVersions: ExpansionsVersions[];
}

export interface ExpansionsVersions {
    orderIndex: number;
    name: string;
    played: boolean;
    physicalOrDigital: string[];
    playedOn: string[];
    meansOfPlay: string[];
}


function GameHistory() {''
    const [histories, setHistories] = useState<GameHistory[]>([]);
    //const [mainAEOpen, setMainAEOpen] = React.useState(false);

    //const handleAddEditClose = () => {
    //    setMainAEOpen(false);
    //};
    //const handleAddEditOpen = () => {
    //    setMainAEOpen(true);
    //};

    useEffect(() => {
        const controller = new AbortController();

        fetch('api/gamehistories/histories', { signal: controller.signal })
            .then((res) => res.json())
            .then((data) => setHistories(data));

        return () => controller.abort();
    }, []);

    return (
        <Box>
            <TableContainer component={Paper}>
               {/* <Table style={{ width: 1200 }} size="small" >*/}
                <Table style={{ width: 1300 }} size="small" aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell/>
                            <TableCell>Game Name</TableCell>
                            <TableCell>Franchise</TableCell>
                            <TableCell>Hours</TableCell>
                            <TableCell>Game Completed</TableCell>
                            <TableCell align="right">
                                {/*<IconButton onClick={handleAddEditOpen} aria-label="mainAdd" sx={{ color: 'orange' }} >*/}
                                <IconButton aria-label="mainAdd" sx={{ color: 'orange' }} >
                                    <PlaylistAdd />
                                    <Typography>Add New</Typography>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {histories.map((histories) => (
                            <Row key={histories.id} row={histories} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {/*<Backdrop*/}
            {/*    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}*/}
            {/*    open={mainAEOpen}*/}
            {/*    onClick={handleAddEditClose}*/}
            {/*>*/}
            {/*    <CircularProgress color="inherit" />*/}
            {/*</Backdrop>*/}
        </Box>
    );
}

function Row(props: { row:  GameHistory }) {
    const { row } = props;
    const [rowOpen, setRowOpen] = React.useState(false);
    const [subAEOpen, setSubAEOpen] = React.useState(false);

    const handleAddEditClose = () => {
        setSubAEOpen(false);
    };
    const handleAddEditOpen = () => {
        setSubAEOpen(true);
    };

    return (
         <React.Fragment>
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
           {/* <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>*/}
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setRowOpen(!rowOpen)}
                    >
                        {rowOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>

                <TableCell>{row.gameName}</TableCell>
                <TableCell>{row.gameFranchise}</TableCell>
                <TableCell>{row.playTime}</TableCell>
                <TableCell>
                    {
                        row.possibleToComplete == false ? "N/A" :
                            (row.completed ? "Completed" : "Incomplete")
                    }
                </TableCell>   
                <TableCell align="right">             
                    <IconButton onClick={handleAddEditOpen} aria-label="mainEdit" color="info">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="mainDelete" color="error">
                        <DeleteIcon />
                    </IconButton>
                </TableCell>   
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={rowOpen} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 2, paddingLeft: 6}}>
                            <Table style={{ width: 1200 }} size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Game Name</TableCell>
                                        <TableCell>Played</TableCell>
                                        <TableCell>Played On</TableCell>
                                        <TableCell>Physical/Digital</TableCell>
                                        <TableCell align="right">
                                            <IconButton onClick={handleAddEditOpen} aria-label="mainAdd" sx={{ color: 'orange' }} >
                                                <PlaylistAdd/>
                                                <Typography>Add New</Typography>
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.expansionsVersions.map(subHistories =>
                                        <TableRow key={subHistories.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">{subHistories.name}</TableCell>
                                            <TableCell>{subHistories.played === true ? "Yes" : "No"}</TableCell>
                                            <TableCell>{subHistories.playedOn?.join(", ").toString()}</TableCell>
                                            <TableCell>{subHistories.physicalOrDigital?.join(", ").toString()}</TableCell>
                                            <TableCell align="right">
                                                <IconButton onClick={handleAddEditOpen} aria-label="mainEdit" color="info">
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton aria-label="subDelete" color="error">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            <Dialog
                open={subAEOpen}
                onClose={handleAddEditClose}
                maxWidth="md"
            >
                <GameHistoryForm needMain={true} needSub={true} history={undefined} orderIndex={undefined} />
            </Dialog>
            {/*PaperProps={{*/}
            {/*    component: 'form',*/}
            {/*    onSubmit: (event) => {*/}
            {/*        event.preventDefault();*/}
            {/*        const formData = new FormData(event.currentTarget);*/}
            {/*        const formJson = Object.fromEntries(formData.entries());*/}
            {/*        const email = formJson.email;*/}
            {/*        console.log(email);*/}
            {/*        handleClose();*/}
            {/*    },*/}
            {/*}}*/}
         </React.Fragment>
    );
}

export default GameHistory;
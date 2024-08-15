import * as React from 'react';
import { useEffect, useState } from 'react';
import {
    Table, TableRow, TableHead, Collapse,
    TableBody, TableContainer, TableCell, Paper, Box, 
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
interface GameHistory {
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
                            <TableCell>Completed</TableCell>
                            <TableCell>Game Franchise</TableCell>
                            <TableCell>Game Completed</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {histories.map((histories) => (
                            <Row key={histories.id} row={histories} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

function Row(props: { row:  GameHistory }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
         <React.Fragment>
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
           {/* <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>*/}
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
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
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 2, paddingLeft: 6}}>
                            <Table style={{ width: 1200 }} size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Game Name</TableCell>
                                        <TableCell>Played The Game</TableCell>
                                        <TableCell>Played On</TableCell>
                                        <TableCell>Physical/Digital</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.expansionsVersions.map(subHistories =>
                                        <TableRow key={subHistories.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell component="th" scope="row">{subHistories.name}</TableCell>
                                            <TableCell>{subHistories.played === true ? "Yes" : "No"}</TableCell>
                                            <TableCell>{subHistories.playedOn?.join(", ").toString()}</TableCell>
                                            <TableCell>{subHistories.physicalOrDigital?.join(", ").toString()}</TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
         </React.Fragment>
    );
}

export default GameHistory;
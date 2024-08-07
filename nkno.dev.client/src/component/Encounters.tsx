import { useEffect, useState } from 'react';
import {
    Table, TableRow, TableHead, FormControl,InputLabel, Select, MenuItem,
    TableBody, TableContainer, TableCell, Paper, Box } from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
import JobDistributionPie from './JobDistributionPie.tsx'; 

export interface Encounter {
    name: string;
    job: string;
    zone: string;
    id: number;
    startTime: Date;
    endTime: Date;
    duration: number;
    damage: number;
    encounterDps: number;
    kills: number;
    deaths: number;
}

function Ffxiv() {
    const [encounters, setEncounters] = useState<Encounter[]>();
    const [distinctChars, setDistinctChars] = useState<string[]>();
    const [selectedChar, setSelectedChar] = useState<string>();

    useEffect(() => {
        populateDistinctCharacters();
    }, [encounters]);

    useEffect(() => {
        populateEncounterData();
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedChar(event.target.value as string);
    };

    const contents = encounters === undefined
        ? <Box>Loading...</Box>
        : <TableContainer component={Paper}>
            <Table style={{ width: 1200 }} size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Job</TableCell>
                        <TableCell>Zone</TableCell>
                        <TableCell>Encounter DPS</TableCell>
                        <TableCell>Deaths</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {encounters.map(encounter =>
                        <TableRow key={encounter.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{encounter.name}</TableCell>
                            <TableCell>{encounter.job.toUpperCase()}</TableCell>
                            <TableCell>{encounter.zone}</TableCell>
                            <TableCell>{encounter.encounterDps.toFixed(0)}</TableCell>
                            <TableCell>{encounter.deaths}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>;

    const selectDropdown = distinctChars === undefined
        ? <Box>Broken!</Box>
        : <Box>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Character</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedChar}
                    label="Character"
                    onChange={handleChange}>
                    {
                        distinctChars.map(char =>
                            <MenuItem value={char}>
                                {char}
                            </MenuItem>)
                    }
                </Select>
            </FormControl>
            <JobDistributionPie { ... encounters } />
        </Box>


    return (
        <div>
            <Box>
                <h3 id="tabelLabel">ffxiv encounters</h3>
                <p>This component demonstrates fetching data from the server.</p>
                {selectDropdown}
                
                { contents}
            </Box>
        </div>
    );

    async function populateEncounterData() {
        const response = await fetch('api/ffxivencounters/encounters');
        const data = await response.json();
        setEncounters(data);
    };
    async function populateDistinctCharacters() {
        if (encounters != null) {
            const distinctCharacters = encounters.filter(
                (thing, i, arr) => arr.findIndex(t => t.name === thing.name) === i
            ).map(x => x.name);
            setDistinctChars(distinctCharacters);
        }
        else { 
            setDistinctChars([""]);
        }
    }
}

export default Ffxiv;
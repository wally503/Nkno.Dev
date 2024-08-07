import { useEffect, useState } from 'react';
import {
    Table, TableRow, TableHead, FormControl,InputLabel, Select, MenuItem,
    TableBody, TableContainer, TableCell, Paper, Box, 
    Typography} from "@mui/material";
import { SelectChangeEvent } from '@mui/material/Select';
/*import JobDistributionPie from './JobDistributionPie.tsx'; */
import { PieChart } from '@mui/x-charts';

interface Encounter {
    name: string;
    job: string;
    zone: string;
    instanceId: string;
    id: number;
    startTime: Date;
    endTime: Date;
    duration: number;
    damage: number;
    encounterDps: number;
    kills: number;
    deaths: number;
}

interface PieData {
    job: string;
    subPie: SubPieData[];
    pieEncounters: string[];
}
interface SubPieData {
    encounterCount: number;
    deaths: number;
    subPieEncounters: string[];
}



function Ffxiv() {
    const [encounters, setEncounters] = useState<Encounter[]>();
    const [distinctChars, setDistinctChars] = useState<string[]>();
    const [selectedChar, setSelectedChar] = useState<string>();
    const [pieData, setPieData] = useState<PieData[]>();

    //useEffect(() => {
    //    if (selectedChar != '') {
    //        populatePieData(selectedChar);
    //    }
    //}, [selectedChar]);

    useEffect(() => {
        populateDistinctCharacters();
    }, [encounters]);

    useEffect(() => {
        const controller = new AbortController();

        fetch('api/ffxivencounters/encounters', { signal: controller.signal })
            .then((res) => res.json())
            .then((data) => setEncounters(data));

        return () => controller.abort();
    }, []);

    const handleChange = (event: SelectChangeEvent) => {
        let charName = event.target.value as string
        setSelectedChar(charName);
        if (charName != '' && charName != undefined) {
            populatePieData(charName);
        }
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
            <FormControl sx={{ m: 1, minWidth: 180 }} size="small" align="left">
                <InputLabel>Character</InputLabel>
                <Select
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
        </Box>

    const pieMain = selectedChar === undefined
        ? <Box>
            <Typography>
                "Waiting on Selection"
            </Typography>
        </Box>
        : <PieChart
            series={[
                {
                    data: [


                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                    ],
                },
            ]}
            width={400}
            height={200}
        />;

    return (
        <div>
            <Box>
                <h3 id="tabelLabel">ffxiv encounters</h3>
                <p>This component demonstrates fetching data from the server.</p>
                { selectDropdown }
                { pieMain }
                { contents }
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

    async function populatePieData(charName: string) {

        const response = await fetch('api/ffxivencounters/characterpie', { body: JSON.stringify({ name: { charName } }) });
        const data = await response.json();
        setPieData(data);
    }
}

export default Ffxiv;
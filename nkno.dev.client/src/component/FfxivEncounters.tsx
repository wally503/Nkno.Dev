import { useEffect, useState } from 'react';
import { Table, TableRow, TableHead, TableBody, TableContainer, TableCell, Paper, Box } from "@mui/material";

interface Encounters {
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
    const [encounters, setEncounters] = useState<Encounters[]>();

    useEffect(() => {
        populateEncounterData();
    }, []);

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

    return (
        <div>
            <Box>
                <h3 id="tabelLabel">ffxiv encounters</h3>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </Box>
        </div>
    );

    async function populateEncounterData() {
        const response = await fetch('ffxivencounter');
        const data = await response.json();
        setEncounters(data);
    }
}

export default Ffxiv;
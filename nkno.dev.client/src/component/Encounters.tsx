import { useEffect, useState } from 'react';
import {
    Table, TableRow, TableHead, 
    TableBody, TableContainer, TableCell, Paper, Box, 
    Typography} from "@mui/material";
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

interface Table {
    id: string;
    value: number;
    label: string;
}

const groupBy = <T, K extends keyof any>(arr: T[], key: (i: T) => K) =>
    arr.reduce((groups, item) => {
        (groups[key(item)] ||= []).push(item);
        return groups;
    }, {} as Record<K, T[]>);

function Ffxiv() {
    const [encounters, setEncounters] = useState<Encounter[]>();
    const [pieData, setPieData] = useState<Record<string, Encounter[]>[]>();
    const [subPieData, setSubPieData] = useState<Record<number, Encounter[]>[]>();
    const [pieSelection, setPieSelection] = useState<string>();

    useEffect(() => {
        const controller = new AbortController();

        fetch('api/ffxivencounters/encounters', { signal: controller.signal })
            .then((res) => res.json())
            .then((data) => setEncounters(data));

        return () => controller.abort();
    }, []);

    useEffect(() => {
        const controller = new AbortController();

        populateMainPieData();

        return () => controller.abort();
    }, [encounters])

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

    const pieMain = JSON.stringify(pieData) === '{}'
        ? <Box>
            <Typography>
                "Waiting on Selection"
            </Typography>
        </Box>
        : <PieChart
            series={[
                {
                    data: 
                            
                        [
                        { id: 0, value: 10, label: 'series A' },
                        { id: 1, value: 15, label: 'series B' },
                        { id: 2, value: 20, label: 'series C' },
                    ],
                },
            ]}
                //{ id: 0, value: 10, label: 'series A' },
                //{ id: 1, value: 15, label: 'series B' },
                //{ id: 2, value: 20, label: 'series C' },
            width={400}
            height={200}
        />;

    return (
        <div>
            <Box>
                {/*{ selectDropdown }*/}
                { pieMain }
                { contents }
            </Box>
        </div>
    );

    async function populateMainPieData() {
        if (encounters == null) {
            setPieData([]);
            return;
        }

        let groupByJobs = groupBy(encounters, x => x.job)
        setPieData(groupByJobs);
    };

    async function populateSubPieData(selectedJob: string) {
        if (pieData == null) {
            setSubPieData([]);
            return;
        }

        let group: Encounter[] = pieData[selectedJob];
        let groupByDeaths = groupBy(group, x => x.deaths)
        setSubPieData(groupByDeaths);
    };
}

export default Ffxiv;
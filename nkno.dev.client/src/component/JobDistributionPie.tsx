import { PieChart } from '@mui/x-charts';
import { Encounter } from '../component/FfxivEncounters';
import { useEffect, useState } from 'react';

interface CharacterPieData {
    job: string;
    deaths: number;
}

function JobDistributionPie(data: Encounter[])
{
    const [pieData, setPieData] = useState<CharacterPieData[]>();

    useEffect(() => {
        populateEncounterData(data);
    }, []);

    return (
        <PieChart
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
        />
    );

    async function populateEncounterData(data : Encounter[]) {
        let mapData: CharacterPieData[] = data.map(s => ({ job: s.job, deaths: s.deaths }));
        setPieData(mapData);
    };
}

export default JobDistributionPie;
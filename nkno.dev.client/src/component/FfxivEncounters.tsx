import { useEffect, useState } from 'react';

interface Encounters {
    name: string;
    job: string;
    zone: string;
    id: number;
}

function Ffxiv() {
    const [encounters, setEncounters] = useState<Encounters[]>();

    useEffect(() => {
        populateWeatherData();
    }, []);

    const contents = encounters === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Zone</th>
                </tr>
            </thead>
            <tbody>
                {encounters.map(encounter =>
                    <tr key={encounter.id}>
                        <td>{encounter.name}</td>
                        <td>{encounter.job}</td>
                        <td>{encounter.zone}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">ffxiv encounters</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
        </div>
    );

    async function populateWeatherData() {
        const response = await fetch('ffxivencounter');
        const data = await response.json();
        setEncounters(data);
    }
}

export default Ffxiv;
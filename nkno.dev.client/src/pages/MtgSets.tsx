import { useEffect, useState } from 'react';
import '../models/MtgSet'
import {  Card, Button, Container, FormControlLabel, Radio, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import TextField from '@mui/material/TextField'
import Paper from '@mui/material/Paper';
import { Category } from '@mui/icons-material';

function MtgSets() {

    const [sets, setMtgSets] = useState<MtgSet[]>();
    const [searchCategory, setSearchCategory] = useState('setName');
    const [searchInput, setSearchInput] = useState('');

    useEffect(() =>
    {
        populateMtgSets()
    },
        []);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Input is: '" + searchInput + "' with a button selection of: " + searchCategory);
    }

    const mtgSetData = sets === undefined
        ? <p>Attempting to load... maybe?</p>
        : <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Set Code</TableCell>
                        <TableCell>Set Name</TableCell>
                        <TableCell>Block</TableCell>
                        <TableCell>Release Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        sets.map(mtgSet =>
                            <TableRow key={mtgSet.code}>
                                <TableCell>{mtgSet.code}</TableCell>
                                <TableCell>{mtgSet.name}</TableCell>
                                <TableCell>{mtgSet.block}</TableCell>
                                <TableCell>{mtgSet.releaseDate}</TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>;

    const searchBar =
        <form noValidate autoComplete="off" onSubmit={handleSubmit}> 
            <TextField
                onChange={(e) => setSearchInput(e.target.value)}
                className={searchInput}
                label="Search"
                variant="outlined"
                color="secondary"
                fullWidth
                required
            />
            <Button             
                type="submit"
                color="secondary"
                variant="outlined">
                Search
            </Button>
            <RadioGroup row value={searchCategory} onChange={(e) => setSearchCategory(e.target.value) }>
                <FormControlLabel value="setName" control={<Radio />} label="Set Name" />
                <FormControlLabel value="setId" control={<Radio />} label="Set ID" />
                <FormControlLabel value="blockName" control={<Radio />} label="Block Name" />
            </RadioGroup>
        </form>
        

    return (
        <Container>
            <Card>
                <h1>MTG Set List Api TSX</h1>
                {searchBar}
                {mtgSetData}
            </Card>
        </Container>
    );

    async function populateMtgSets() {
        const response = await fetch('Mtg/GetSets');
        const data = await response.json();
        setMtgSets(data);
    }
}

export default MtgSets

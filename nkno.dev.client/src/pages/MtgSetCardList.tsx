import { useEffect, useState } from 'react'
import '../models/SingleMtgCard'
import { Button, Container, FormControlLabel, Radio, RadioGroup, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import UrlHandler from '../tools/urlHandler.ts';

function MtgSetCardList() {

    const [cards, setMtgSetCards] = useState<SingleMtgCard[]>();

    useEffect(() =>
    {
        populateCards()
    },
    []);

    const mtgSetData = cards === undefined
        ? <p>Attempting to load... maybe?</p>
        : <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Card Id</TableCell>
                    <TableCell>Card Name</TableCell>
                    <TableCell>Converted Mana Cost</TableCell>
                    <TableCell>Mana Cost</TableCell>
                    <TableCell>Colors</TableCell>
                    <TableCell>Color Identity</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    cards.map(mtgSet =>
                        <TableRow key={mtgSet.id}>
                            <TableCell>{mtgSet.multiverseid}</TableCell>
                            <TableCell>{mtgSet.name}</TableCell>
                            <TableCell>{mtgSet.cmc}</TableCell>
                            <TableCell>{mtgSet.manaCost}</TableCell>
                            <TableCell>{mtgSet.colors.join(', ')}</TableCell>
                            <TableCell>{mtgSet.colorIdentity.join(', ')}</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>

    return (
        <Container>
            <h1>MTG Cards In Set Api TSX</h1>
            {mtgSetData}
        </Container>
    );

    async function populateCards(setId: string = "ICE") {
        let queryValues: string[] = [ setId ];
        let queryTypes: string[] = ["setId"];
        let queryString = UrlHandler(queryValues, queryTypes);
        const response = await fetch('Mtg/GetSetCardsById' + queryString);
        const data = await response.json();
        setMtgSetCards(data);
    }
}

export default MtgSetCardList

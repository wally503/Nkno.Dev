import { useEffect, useState } from 'react'
import '../models/SingleMtgCard'
import { Card, Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import UrlHandler from '../tools/urlHandler.ts';
import CardDetailBar from '../components/CardDetailBar.tsx'

function MtgSetCardList() {

    const [cards, setMtgSetCards] = useState<SingleMtgCard[]>();
    const [currentSelected, setCurrentSelected] = useState(null);

    const setActive = (cardId) => {
        if (currentSelected != cardId) {
            setCurrentSelected(cardId);
        }
        else setCurrentSelected(null);
    };

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
                        <TableRow key={mtgSet.id}
                            onClick={() => {
                                console.log("mutiverse id: " + mtgSet.multiverseid + " and id: " + mtgSet.id)
                                setActive(mtgSet.multiverseid)
                            }}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            selected={currentSelected === mtgSet.multiverseid}
                        >
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
        </Table>;

    const lookup = currentSelected === null
        ? <h2>Trying to load this card</h2>
        : <CardDetailBar activeCardId={currentSelected} />

    return (
        <Container>
            <Card>
                <h1>MTG Cards In Set Api TSX</h1>   
            </Card>
            <Card>
                {mtgSetData}
            </Card>
            <Card>
                {lookup}
            </Card>
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

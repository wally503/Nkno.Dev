import { useEffect, useState } from 'react'
import '../models/SingleMtgCard'
import { Box, Card, Container, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import UrlHandler from '../tools/urlHandler.ts';
import CardDetailBar from '../components/CardDetailBar.tsx'

function MtgSetCardList() {

    const [cards, setMtgSetCards] = useState<SingleMtgCard[]>();
    const [currentSelected, setCurrentSelected] = useState<number>(0);
    const [currentSelectedCard, setCurrentSelectedCard] = useState<SingleMtgCard | null>();

    const setActive = (cardId : number) => {
        if (currentSelected != cardId) {
            setCurrentSelected(cardId);
            var find = cards?.find(x => x.multiverseidint === cardId);
            if (find != undefined) {
                setCurrentSelectedCard(find);
            }
        }
        else {
            setCurrentSelected(0);
            setCurrentSelectedCard(null);
        }
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
                                setActive(mtgSet.multiverseidint)
                            }}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            selected={currentSelected === mtgSet.multiverseidint}
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

    const lookup = currentSelected === 0
        ? <h2>Waiting on Selection</h2>
        : <Box>
            <CardDetailBar {...currentSelectedCard as SingleMtgCard} />
          </Box>

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

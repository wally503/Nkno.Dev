import { Container, Box, Drawer, Typography } from '@mui/material';
import '../models/SingleMtgCard.tsx'
import UrlHandler from '../tools/urlHandler.ts';
import { useEffect, useState } from 'react'

const drawerWidth = 500;
const drawerPaperWidth = 500;

function CardDetailBar(activeCardId: number){
    const [card, setCard] = useState<SingleMtgCard>();

    useEffect(() => {
        getCard(2673)
        /*getCard(activeCardId)*/
    },
    []);

    const cardInfoWindow = card === undefined
        ? <p>Will the card data load?</p>
        : <Box sx={{ display: 'flex' }}>
            {/*<Drawer variant="permenant" anchor="right"*/}
            {/*    sx={{*/}
            {/*        width: drawerWidth,*/}
            {/*        ".MuiDrawer-paper": { width: drawerPaperWidth }*/}
            {/*    }} >*/}
            {/*    <Box>*/}
            {/*        <Typography variant="h3">*/}
            {/*            {card?.name}*/}
            {/*        </Typography>*/}
            {/*    </Box>*/}
            {/*    <Box*/}
            {/*        component="img"*/}
            {/*        src={card?.imageUrl}*/}
            {/*    />*/}
            {/*</Drawer>*/}
            <Drawer variant="permenant" anchor="right"
                sx={{
                    width: drawerWidth,
                    ".MuiDrawer-paper": { width: drawerPaperWidth }
                }} >
                <Box>
                    <Typography variant="h3">
                        {card?.name}
                    </Typography>
                </Box>
                <Box
                    component="img"
                    src={card?.imageUrl}
                />
            </Drawer>
        </Box>;

    return (
        <Container>
            {cardInfoWindow}
        </Container>
    )

    async function getCard(cardId: number) {
        let queryValues: string[] = [cardId.toString()];
        let queryTypes: string[] = ["cardId"];
        let queryString = UrlHandler(queryValues, queryTypes);
        const response = await fetch('Mtg/GetCardById' + queryString);
        const data = await response.json();
        setCard(data);
    }
};

export default CardDetailBar

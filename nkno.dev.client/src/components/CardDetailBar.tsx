import { Image, Box, Drawer, Typography } from '@mui/material';
import '../models/SingleMtgCard.tsx'

const drawerWidth = 500;
const drawerPaperWidth = 500;

export default function CardDetailBar(activeCardId: number){


    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" anchor="right"
                sx={{
                    width: drawerWidth,
                    ".MuiDrawer-paper": { width: drawerPaperWidth }
                }} >
                <Box>
                    <Typography variant="h3">
                        {activeCardId}
                    </Typography>
                </Box>
                <Box
                    component="img"
                    src={activeCardId}
                />
            </Drawer>
        </Box>
    )

    async function getCard(cardId: number) {
        let queryValues: string[] = [setId];
        let queryTypes: string[] = ["setId"];
        let queryString = UrlHandler(queryValues, queryTypes);
        const response = await fetch('Mtg/GetSetCardsById' + queryString);
        const data = await response.json();
        setMtgSetCards(data);
    }
};

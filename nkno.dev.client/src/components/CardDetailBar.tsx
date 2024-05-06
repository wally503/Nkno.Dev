import { Image, Box, Drawer, Typography } from '@mui/material';
import SingleMtgCard from '../models/SingleMtgCard'

const drawerWidth = 500;
const drawerPaperWidth = 500;

export default function CardDetailBar(activeCard: SingleMtgCard){


    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer variant="permanent" anchor="right"
                sx={{
                    width: drawerWidth,
                    ".MuiDrawer-paper": { width: drawerPaperWidth }
                }} >
                <Box>
                    <Typography variant="h3">
                        {activeCard.name}
                    </Typography>
                </Box>
                <Box
                    component="img"
                    src={activeCard.imageUrl}
                />
            </Drawer>
        </Box>
    )
};

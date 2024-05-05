import { List, ListItemText, ListItemIcon, ListItemButton, Box, Drawer, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const drawerWidth = 240;
const drawerPaperWidth = 240;

export default function Layout({ children }) {

    //const classes = {
    //    root: {
    //        display: 'flex'
    //    }
    //}
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(null);

    const setActive = (index) => {
        setCurrentPage(index);
    };


    const menuItems = [
        {
            text: 'Home',
            icon: <HomeIcon color="secondary" />,
            path: '/'
        },
        {
            text: 'Search Sets',
            icon: <ManageSearchIcon color="secondary" />,
            path: '/mtgSetsSearch'
        },
        {
            text: 'Search in Sets',
            icon: <SearchIcon color="secondary" />,
            path: '/mtgSetCards'
        },
    ]

    return (
        <Box sx={{ display: 'flex'}}>
            {/* app bar */}

            {/* side drawer*/}
            <Drawer variant="permanent" anchor="left"
                sx={{
                    width: drawerWidth,
                    ".MuiDrawer-paper": { width: drawerPaperWidth }
                }} >
                <div>
                    <Typography variant="h3">
                        Nkno.Dev
                    </Typography>

                    <List>
                        {menuItems.map((item, index) =>
                            <ListItemButton 
                                key={item.text}
                                onClick={() => {
                                    setActive(index)
                                    navigate(item.path);
                                }}
                                selected={index === currentPage}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        )}
                    </List>
                </div>
            </Drawer>

            {/*<div className={classes.page}> // TODO: change to this to do styling - will need to use the TS version from main */}
            <div class="testvalue">
                {children}
            </div>
        </Box>
    )
}
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom"*/

import { Container, AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const navTitleTheme = createTheme({
    typography: {
        fontFamily: 'Edu AU VIC WA NT Hand',
        fontSize: 10
    }
});

const navItemTheme = createTheme({
    typography: {
        fontFamily: 'Cuprum',
        fontSize: 25
    },
    palette: {
        "primary":
        {
            "main": "#b86309"
        }
    }
});

function NavBar() {
    return (
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters style={{ display: "flex", justifyContent: "space-between" }}>
                    <ThemeProvider theme={navTitleTheme}>
                        <Typography variant="h3" textAlign="center">
                            Nkno.Dev
                        </Typography>
                    </ThemeProvider>
                    <ThemeProvider theme={navItemTheme}>
                        <Box sx={{ p: 0, my: 2}}>
                            <Typography color="textPrimary">
                                <Grid container spacing={4}>
                                    <Grid>
                                        <Button variant="text">
                                            Home
                                        </Button>
                                    </Grid>
                                    <Grid>
                                        <Button variant="text">
                                            Weather
                                        </Button>
                                    </Grid>
                                    <Grid>
                                        <Button variant="text">
                                            Encounters
                                        </Button>
                                    </Grid>
                                    <Grid>
                                        <Button variant="text">
                                            About
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Typography>
                        </Box>
                    </ThemeProvider>
                </Toolbar>
            </Container>
        </AppBar >
    );
}


export default NavBar;
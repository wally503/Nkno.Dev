import { Container, AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

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

export default function NavBar() {
    const navigate = (
        useNavigate()
    )

    //const [selectedPage, setSelectedPage] = useState(navPaths[0]);
    //const handleNavButtonClick = (navId: string) => {
    //    setSelectedPage(navId);
    //}
    const navPaths =
        [
            { buttonDisplay: 'Home', route: '/' },
            { buttonDisplay: 'Weather', route: '/Weather' },
            { buttonDisplay: 'Encounters', route: '/Encounters' },
            { buttonDisplay: 'About', route: '/About' }
        ];

    return (
        <Box>
            <AppBar position="fixed">
                <Container maxWidth={false} disableGutters>
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                        <ThemeProvider theme={navTitleTheme}>
                            <Typography variant="h3" textAlign="center">
                                Nkno.Dev
                            </Typography>
                        </ThemeProvider>
                        <ThemeProvider theme={navItemTheme}>
                            <Box sx={{ p: 0, my: 2 }}>
                                <Typography component={'span'} color="textPrimary">
                                    <Grid container spacing={4}>
                                        {navPaths.map((item) => (
                                            <Grid key={item.buttonDisplay}>
                                                <Button variant="text" onClick={() => { navigate(item.route) }} >
                                                    {item.buttonDisplay}
                                                </Button>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Typography>
                            </Box>
                        </ThemeProvider>
                    </Toolbar>
                </Container>
            </AppBar >
        </Box>
    );
}
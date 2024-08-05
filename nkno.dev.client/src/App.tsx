import Weather from './component/Weather.tsx'
import Ffxiv from './component/FfxivEncounters.tsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from './NavBar.tsx'
import { Home } from '@mui/icons-material';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
});

function App() {

    return (
        <ThemeProvider theme={darkTheme}>
            <NavBar />
            <Home />
            <Ffxiv />
            <Weather />
        </ThemeProvider>
    );
}

export default App;
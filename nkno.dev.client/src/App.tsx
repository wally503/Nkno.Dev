import HomePage from './component/Home.tsx';
import Weather from './component/Weather.tsx';
import Ffxiv from './component/FfxivEncounters.tsx';
import AboutPage from './component/About.tsx';
import PageNotFound from './component/PageNotFound.tsx';
import { Box } from "@mui/material";
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar.tsx'

function App() {
    return (   
        <Box>
            <NavBar />
            <Routes>
                <Route path='/' index element={ <HomePage /> } />
                <Route path='/Weather' element={ <Weather /> } />
                <Route path='/Encounters' element={ <Ffxiv /> } />
                <Route path='/About' element={ <AboutPage /> } />
                <Route path='*' element={ <PageNotFound /> } />
            </Routes>  
        </Box>
    );
}

export default App;
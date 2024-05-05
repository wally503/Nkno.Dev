import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Switch } from '@mui/material';
import { Router, Route } from 'react-router-dom';
import MtgSets from './pages/MtgSets.tsx'
import MtgSetCardList from './pages/MtgSetCardList.tsx'
import Home from './pages/Home.tsx'
import Layout from './components/Layout.tsx'

const customTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#b9f6ca',
        },
        secondary: {
            main: '#e65100',
        },
        background: {
            default: '#121212',
        },
    },
    typography: {
        button: {
            fontFamily: 'Droid Sans',
        },
        fontFamily: 'Lato',
    },
});


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={customTheme}>
            <Router>
                <Layout>
                    <Switch>
                        <Route exact path="/">
                            <Home/> 
                        </Route>
                        <Route path="/MtgCardSetList">
                            <MtgSets />
                        </Route>
                        <Route path="/MtgSets">
                            <MtgSetCardList />
                        </Route>
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider>
  </React.StrictMode>,
)

import { makeStyles } from '@mui/material';
import React from 'react';

/*const useStyles = makeStyles()*/

export default function Layout({ children }) {
    return (
        <div>
            {/* app bar */}

            {/* side drawer*/}


            {/*<div className={classes.page}> // TODO: change to this to do styling - will need to use the TS version from main */}
            <div>
                {children}
            </div>
        </div>
    )
}
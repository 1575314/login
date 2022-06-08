import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static" className='back'>
                <Toolbar className='bar'>
                    <Typography className='title' variant="h6">
                        
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
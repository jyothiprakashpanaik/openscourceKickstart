import { Divider, IconButton, Toolbar, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react';


const useStyle = () => ({
    title: {
        flexGrow: 1,
    },
    tagline: {
        fontSize: 20,
        textTransform: "uppercase",
        justifyContent: "center",
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
    }
});


const Header = () => {
    const classes = useStyle();

    return (
        <>
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>

                <Typography varient="h6" color="inherit" sx={classes.title}>Open Scource -- Kickstarter</Typography>

                <IconButton color="inherit">
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon></NotificationsIcon>
                    </Badge>
                </IconButton>

                <IconButton color="inherit">
                    <AccountCircleIcon></AccountCircleIcon>
                </IconButton>
            </Toolbar>

            <Divider></Divider>

            <Toolbar sx={classes.tagline}>
                ONE STOP DESTINY TO CONTRIBUTE TO OPEN SOURCE !!
            </Toolbar>
        </>
    )
}

export default Header;
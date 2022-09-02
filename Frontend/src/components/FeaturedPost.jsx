import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'

import React, { useState } from 'react'

const useStyle = () => ({
    title: {
        fontSize: 40,
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
    },
    cover: {
        backgroundImage: 'url(https://training.linuxfoundation.org/wp-content/uploads/2018/07/LFS165-networking-hero.png)',
        backgroundPosition: "center",
        padding: "35px 25px",
    },

});

function FeaturedPost() {
    const classes = useStyle();

    const [readMore, setReadMore] = useState("true");

    const content = `
    Developers around the globe have built their software, and code snippets of this software are freely available on open-source platforms like GitHub. It has been a matter of pride to the developer's community to contribute to these projects, which help their profile stand out from others.
    
    However, for a new beginner, it is pretty hard and tricky to find a relevant project for him/herself based on their skill set and field of interest.
    
    To make this easier, we build a recommendation system to highlight projects based on inputted programming languages and keywords.
`;
    const [showContent, setContent] = useState(content.slice(0, 202));

    const updateReadMore = () => {
        if (readMore) {
            setContent(content);
        }
        else {
            setContent(content.slice(0, 202));
        }
        setReadMore(!readMore);
    }


    return (
        <Card sx={classes.cover}>
            <CardContent sx={classes.textContainer}>
                <Typography sx={classes.title}>Who, When, What, Where, Why and How?</Typography>
                <Typography variant='h5'>
                    {showContent}
                </Typography>
            </CardContent>
            <CardActions>
                <Button sx={classes.btn} variant="outlined" color="primary" onClick={updateReadMore}>{
                    readMore ? "Read More" : "Show Less"
                }</Button>

                <Button sx={{mx:1}} variant="contained" color="success" href="#ActionGrid">{"Get Started >>"}</Button>
            </CardActions>
        </Card>
    )
}

export default FeaturedPost
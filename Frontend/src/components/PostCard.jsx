import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, Typography } from '@mui/material'
import React from 'react'

const useStyle = () => ({
    card: {
        display: "flex",
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    }
})

function PostCard({post}) {
    
    const classes = useStyle();
    
    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a">
                <Card sx={classes.card}>
                    <div sx={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {post.description}
                            </Typography>
                            <Typography variant="subtitle1" style={{ color: "skyblue" }}>
                               Continue reading... 
                            </Typography>
                        </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia
                            sx={classes.cardMedia}
                            image={post.image}
                            title={post.imageTitle}
                        />
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default PostCard
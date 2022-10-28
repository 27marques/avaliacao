import { Alert, Card, CardMedia } from "@mui/material";
import { Container, grid } from "@mui/system";
import React, { useEffect, useState } from "react";

const FetchProducts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const url = 'https://dummyjson.com/products'

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((respData) => {
                setData(respData.products);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                console.log(error);
            })

    }, []);

    return (
        <Grid container spacing={2} sx={{ mt: 4 }}>
            {isLoading ? (
                <div>Carregando</div>
            ) : (
                data.map((product) => (
                    <Grid item xs={2} md={3} lg={1} >
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia>
                                component="img"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            )}
        </Grid>
    );
}

export default FetchProducts;
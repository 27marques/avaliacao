import { Alert, Grid } from "@mui/material";
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
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <item>xs=2</item>
                    </Grid>
                ))}
            </Grid>
            {isLoading ? (
                <Alert>Carregando</Alert>
            ) : (
                data.map((product) => (
                    <div key={product.id}>
                        <div>{product.title}</div>
                    </div>
                ))
            )}
        </div>
    );
};

export default FetchProducts;
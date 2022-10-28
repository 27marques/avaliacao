import { Alert } from "@mui/material";
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
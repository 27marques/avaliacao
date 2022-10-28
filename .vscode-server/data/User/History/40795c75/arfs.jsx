import React, { useEffect, useState } from "react";

const FetchProducts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, SetData] = useState([]);

    const url = 'https://dummyjson.com/products'

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((respData) => {
                SetData(respData);
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
                <div>Carregando...</div>
            ) : (
                data.map((product) => (
                    <div key={product.id}>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                    </div>
                ))
            )}
        </div>
    );
}

export default FetchProducts;
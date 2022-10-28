import React, { useEffect, useState } from "react";

const FetchProducts = () => {
    const [isloading, setIsLoading] = React.useState(true);
    const [data, SetData] = React.useState([]);

    const url = 'https://dummyjson.com/products'

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((respData) => {
                SetData(respData);
                setIsLoading(false);
            });

    }, [])

    return (
        <div>
            )
}
            export default FetchProducts;
import { Card, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const FetchNews = () => {
    const [news, setNews] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        setIsLoading(true);
        fetch(url)
            //retornar um valor
            .then(response => response.json())
            // retorna
            .then((data) => {
                setNews(data);
                setIsLoading(false);
            });
    }, []);

    return (

        <div style={{ maxWidth: "70rem", margin: "0 auto" }}>

            <h1>Notícias</h1>

            {isloading ? (

                <CircularProgress />

            ) : (

                news.map((noticia) => (

                    <Card

                        variant="outlined"

                        style={{

                            marginBottom: "1rem",

                            textAlign: "left",

                            padding: "1rem",

                            borderRadius: "2rem"

                        }}

                    >

                        <div key={noticia.id}>

                            <h2>{noticia.title}</h2>

                            <div>{noticia.body}</div>

                        </div>

                    </Card>

                ))

            )}

        </div>

    );

};



export default FetchNews;
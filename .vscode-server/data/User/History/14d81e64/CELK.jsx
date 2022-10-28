import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const FetchNews = () => {
    const [news, setNews] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
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
        <div>
            <h1>Notícias</h1>
            {isloading ? (
                <CircularProgress />
            ) : (
                news.map((noticia) => (
                    <div key={noticia.id}>
                        <div>{noticia.title}</div>
                        <div>{noticia.body}</div>
                    </div>
                ))
            )}
        </div>
    );
}

export default FetchNews;
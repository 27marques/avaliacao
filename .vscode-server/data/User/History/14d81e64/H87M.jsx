import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

/*
{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
*/


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
                    <div>
                        <div>{noticia.title}</div>
                        <div>{noticia.body}</div>
                    </div>
                ))
            )}
        </div>
    );
}

export default FetchNews;
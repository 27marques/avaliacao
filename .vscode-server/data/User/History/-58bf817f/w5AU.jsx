
import { ImageList, ImageListItem } from "@mui/material"

const itemData = [
   
    {
        img: 'https://upload.wikimedia.org/wikipedia/pt/7/7d/Queen-News_of_the_World.jpg',
        title: 'News of the World',
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/pt/d/d9/Queen-Jazz.jpg',
        title: 'Jazz',
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/pt/3/3a/Queen-The_Game.jpg',
        title: 'The Game',
    },
];
const AlbumPage = () => {

    return (
        <div class="boasvindas_page">
            <iframe width="942" height="530" src="https://www.youtube.com/embed/5LLXGTyBqkU?list=PLUPLEaMRcaetuKHwVEnelrmA90BoGUD8y" title="Don't Stop Me Now (Remastered 2011)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h1>Albuns</h1>
            <iframe width="942" height="530" src="https://www.youtube.com/embed/hZdiwHHxay4?list=PLUPLEaMRcaetuKHwVEnelrmA90BoGUD8y" title="Bohemian Rhapsody (Remastered 2011)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><h1>Albuns</h1>
            <p> Queen foi uma banda britânica de rock, fundada em 1970 e ativa, sob sua formação clássica,</p>
            <p> Opa! Tudo bem? Obrigado por se interessar em nosso site! </p>
            <p>Vamos compartilhar assuntos interessantes com nosso publico, e nesta semana será sobre a banda QUEEN!!</p>
            <p>Se você desejar saber mais sobre este assunto, visite nossa área "Sobre", lá você encontrará conteúdos relativos a banda.</p>
            <h1>fique a vontade!!</h1>
        </div>
    )

};

export default AlbumPage;

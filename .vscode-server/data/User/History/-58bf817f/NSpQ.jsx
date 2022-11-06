import { ImageList, ImageListItem } from "@mui/material"

const itemData = [
    <iframe width="942" height="530" src="https://www.youtube.com/embed/5LLXGTyBqkU?list=PLUPLEaMRcaetuKHwVEnelrmA90BoGUD8y" title="Don't Stop Me Now (Remastered 2011)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
    {
        video: 'https://www.letras.mus.br/queen/discografia/greatest-hits-in-japan-2020/',
        title: 'Queen',
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/pt/a/ad/Queen_II.jpg',
        title: 'Queen II',
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/pt/5/55/Sheer_Heart_Attack.jpg',
        title: 'Sheer Heart Attack',
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/pt/b/bf/A_Night_at_the_Opera_Queen.jpg',
        title: 'A Night at the Opera',
    },
    {
        img: 'https://upload.wikimedia.org/wikipedia/pt/8/83/A_Day_at_the_Races_-_Queen_-_1976.jpg',
        title: 'A Day at the Races',
    },
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
        <ImageList cols={3}>
            {itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )

}


export default AlbumPage;
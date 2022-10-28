import { Box, List, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";

export const PageLayout = () => {

    const Drawer = () => {
        return(
            <Box>
                <Typography variant="h5" >
                    Meu menu
                </Typography>
                <List>
                    
                </List>
            </Box>
        )
    }

    return (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="sobre">Sobre</Link>
            <Link to="contato">Contato</Link>
            <Link to="noticias">Notícias</Link>
        </nav>
        <Outlet />
    </>
    )
};
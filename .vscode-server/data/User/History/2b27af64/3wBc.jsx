import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const PageLayout = () => {

    const Drawer = () => {
        return (
            <Box>
                <Typography variant="h5" >
                    Meu menu
                </Typography>
                <List>
                    <ListItem>
                        <ListItemButton component="a" href="/">
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="/Sobre">
                            <ListItemText primary="Sobre" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="/Noticias">
                            <ListItemText primary="Noticias" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton component="a" href="/Contato">
                            <ListItemText primary="Contato" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        )
    }

    return (
        <>
            <Drawer />
            
            <Outlet />
        </>
    )
};
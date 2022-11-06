import { AppBar, Box, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";


export const PageLayout = () => {

    const DrawerApp = () => {
        return (
            <Box style={{ padding: "10px" }}>
                <Typography variant="h5" >Meu menu</Typography>
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
                        <ListItemButton component="a" href="/AlbumPage">
                            <ListItemText primary="Albuns Lançados" />
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


    const ContainerMenu = () => {
        const [aberto, setAberto] = useState(false)

        const lideComMenu = () => {
            setAberto(!aberto)
        }
        return (
            <Box>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            onClick={lideComMenu}
                        >
                            <MenuIcon></MenuIcon>
                        </IconButton>
                        [21:43] ELOISA ANIBALETTO
                        <Grid style={{ maxWidth: "768px", margin: "0 auto" }}>
                            <Outlet />
                        </Grid>

                        [21:44] ELOISA ANIBALETTO
                        <img
                            src={require("../Imagens/download.jpg")}
                            alt="logo"
                            style={{ maxHeight: "60px", width: "auto" }}
                        />


                    </Toolbar>
                </AppBar>
                <Box>
                    <Drawer
                        open={aberto}
                        onClose={lideComMenu}
                    >
                        <DrawerApp />
                    </Drawer>
                </Box>
            </Box>
        );
    };

    return (
        <>
            <ContainerMenu />
            <Box style={{ marginTop: "80px" }} />
            <Outlet />
            <Box />
        </>
    );


};
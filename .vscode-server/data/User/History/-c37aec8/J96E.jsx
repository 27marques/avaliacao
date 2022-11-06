import { AppBar, Box, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";


export const PageLayout = () => {

    const DrawerApp = () => {
        return (
            <Box style={{ padding: "10px" }}>
                <List>
                    <ListItem>
                        <ListItemButton to="BoasVindas" LinkComponent={Link}>
                            <ListItemText primary="BoasVindas" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton to="Sobre" LinkComponent={Link}>
                            <ListItemText primary="Sobre" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton to="AlbumPage" LinkComponent={Link}>
                            <ListItemText primary="AlbumPage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton to="Noticias" LinkComponent={Link}>
                            <ListItemText primary="Noticias" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton to="Contato" LinkComponent={Link}>
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
                        <img
                            src={require("../Imagem/baixados.jpeg")}
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
            <Box style={{ marginTop: "80px" }} >
                <Grid style={{ maxWidth: "768px", margin: "0 auto" }}>
                    <Outlet />
                </Grid>
            </Box>

        </>
    );

};
import { AppBar, Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";


export const PageLayout = () => {

    const DrawerApp = () => {
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


    const ContainerMenu = () => {
        return (
            <Box>
                <AppBar>
                    <Toolbar>
                        <IconButton>
                            <MenuIcon></MenuIcon>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Box>
                    <Drawer>
                        <DrawerApp />
                    </Drawer>
                </Box>
            </Box>
        )
    }
    return (
        <>
            <ContainerMenu />
            <DrawerApp />
            <Outlet />
        </>
    )
};
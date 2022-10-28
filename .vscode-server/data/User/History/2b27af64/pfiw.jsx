import { Link, Outlet } from "react-router-dom";

export const PageLayout = () => (
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
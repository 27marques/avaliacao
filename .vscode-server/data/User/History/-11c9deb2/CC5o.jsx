import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Contato from "../Componentes/Contato";
import ErrorPage from "../Componentes/ErrorPage";
import { PageLayout } from "../Componentes/PageLayout";
import Sobre from "../Componentes/Sobre";
import FetchNews from "../Componentes/FetchNews";
import BoasVindas from "../Componentes/BoasVindas";
import Img from "../Componentes/Img";

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
            <Route index path="/" element={<BoasVindas />} />
            <Route path="sobre" element={<Sobre />} />
            <Route path="Albuns Lançados" element={<Img />} />
            <Route path="noticias" element={<FetchNews />} />
            <Route path="contato" element={<Contato />} />
        </Route>
    )
);


const Root = () => {
    return (
        <RouterProvider router={route} />
    );
};

export default Root;
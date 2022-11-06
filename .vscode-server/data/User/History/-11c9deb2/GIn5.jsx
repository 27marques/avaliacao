import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Contato from "../Componentes/Contato";
import ErrorPage from "../Componentes/ErrorPage";
import { PageLayout } from "../Componentes/PageLayout";
import Sobre from "../Componentes/Sobre";
import FetchNews from "../Componentes/FetchNews";
import BoasVindas from "../Componentes/BoasVindas";

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
            <Route index path="/sobre" element={<Sobre />} />
            <Route path="contato" element={<Contato />} />
            <Route path="noticias" element={<FetchNews />} />
            <Route path="boasvindas" element={<BoasVindas />} />
        </Route>
    )
);


const Root = () => {
    return (
        <RouterProvider router={route} />
    );
};

export default Root;
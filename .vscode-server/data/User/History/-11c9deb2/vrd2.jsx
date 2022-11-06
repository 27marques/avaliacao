import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";




import FetchNews from "../components/FetchNews";
import Login from "../components/Login";
import Contato from "../Componentes/Contato";
import ErrorPage from "../Componentes/ErrorPage";
import { PageLayout } from "../Componentes/PageLayout";

const route = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<PageLayout />} errorElement={<ErrorPage />}>
            <Route index path="sobre" element={<Sobre />} />
            <Route path="contato" element={<Contato />} />
            <Route path="noticias" element={<FetchNews />} />
            <Route path="Login" element={<Login/>} />
        </Route>
    )
);


const Root = () => {
    return (
        <RouterProvider router={route} />
    );
};

export default Root;
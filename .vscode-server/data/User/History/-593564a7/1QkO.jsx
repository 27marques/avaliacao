import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Contato from "../components/Contato";
import ErrorPage from "../components/ErrorPage";
import { PageLayout } from "../components/PageLayout";
import Sobre from "../components/Sobre";
import FetchNews from "../components/FetchNews";
import { Login } from "../components/Login";

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
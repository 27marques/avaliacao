import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import Contato from "../components/Contato";
import ErrorPage from "../components/ErrorPage";
import { PageLayout } from "../components/PageLayout";
import Sobre from "../components/Sobre";

const route = createBrowserRouter(
    createRoutesFromElements(
        <Routes>
            <Route path="/" index element={<PageLayout />}  errorElement={<ErrorPage />}>
                <Route path="sobre" element={<Sobre/>}/>
                <Route path="contato" element={<Contato/>}/>
                <Route path="noticias" element={<Noticias/>}/>
            </Route>
        </Routes>
    )
);
            

const Root = () => {
    return (
   <RouterProvider router={route}/>
    );
};

export default Root;
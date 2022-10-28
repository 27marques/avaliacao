import { Route, Routes } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Sobre from "../components/Sobre";

const route = createBrowserRouter(
    createRoutesFromElements(
        <Routes>
            <Route path="/" index element={}  errorElement={<ErrorPage />}>
                <Route path="sobre" element={<Sobre/>}/>
                <Route path="contato" element={<Contato/>}/>
                <Route path="noticias" element={<Noticias/>}/>
            </Route>
        </Routes>
    )
)
            

const Root = () => {
    return (
   <RouterProvider router={route}/>
    );
};

export default Root;
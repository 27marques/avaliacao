import { Outlet } from "react-router-dom";

const Root = () => {

    return (
        <>
            <div id="sidebar">
                <h1>Menu</h1>
                <nav>
                    <ul>
                        <li><a href={'/'}>Inicial</a>
                        </li>
                        <li><a href={'sobre/'}>Sobre</a>
                        </li>
                        <li><a href={'noticias/'}>Noticias</a>
                        </li>
                        <li><a href={'contato/'}>Contato</a>
                        </li>
                    </ul>
                </nav>
            </div> 
            <div id="detail"></div>
            <Outlet />
        </>
    );
};

export default Root;
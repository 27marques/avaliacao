//import react from 'react';
import React, {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(11);    
    return (
        <div>
        <div>Olá Contador</div>
        <div>Meu mês de aniversário é : {contador}</div>
        </div>
    )
};

export default Contador;
//import react from 'react';
import { Button } from '@mui/material';
import React, {useState} from 'react';

const Contador = () => {
    const [contador, setContador] = useState(7);    
    return (
        <div>
        <div>Olá Contador</div>
        <div>Meu mês de aniversário é : {contador}</div>
        <Button
        on
        >Aumentar um mês</Button>
        </div>
    )
};

export default Contador;
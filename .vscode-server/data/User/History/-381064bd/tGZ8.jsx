//import react from 'react';
import { Button } from '@mui/material';
import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(7);

    const aumentaMes = () => {
        setContador(contador++);
    };

    const diminuiMes = () => {
        setContador(contador--);
    };

    return (
        <div>
            <div>Olá Contador</div>
            <div>Meu mês de aniversário é : {contador}</div>
            <Button
                onclick={() => {
                   setContador(contador+1); 
                }}

            >Aumentar um mês
            </Button>
            <Button
                onclick={() => {
                    setContador(contador-1);
                }}

            >Diminuir um mês
            </Button>
        </div>
    )
};

export default Contador;
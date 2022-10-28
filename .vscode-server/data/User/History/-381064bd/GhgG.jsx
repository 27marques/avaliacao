//import react from 'react';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(7);
    const [contadorAux, setContadorAux] = useState(0);
    const [mensagem, setMensagem] = useState("");

    const zerarMes = () => {
        setContador(0);
    };

    const multiMes = () => {
        setContador(contador * 2);
    };

    useEffect(
        () => {
            console.log('Fui chamado useEffect');
        }, [contador]);

    useEffect(
        () => {
            console.log('Fui chamado useEffect Aux');
        }, [contadorAux]);
    
        useEffect(() => {
            if(contador > 12){
                setContadorAux(100);
                setMensagem("O ano possui apenas 12 meses");
            }
        }, [contador]);

    return (
        <div>
            <div>Olá Contador</div>
            <div>Meu mês de aniversário é : {contador}</div>
            <Button
                onclick={() => {
                    setContador(contador + 1);
                }}

            >Aumentar um mês

            </Button>
            <Button
                onclick={() => {
                    setContador(contador - 1);
                }}

            >Diminuir um mês

            </Button>
            <Button onClick={multiMes}

            >Multiplica mês

            </Button>
            <Button onClick={zerarMes}
            >zerarMes

            </Button>

        </div>
    )
};

export default Contador;
//import react from 'react';
import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(7);
    const [contadorAux, setContadorAux] = useState(0);

    const zerarMes = () => {
        setContador(0);
    };

    const multiMes = () => {
        setContador(contador * 2);
    };

    useEffect(
        () => {
            console.log('useEffect')
        }
        , [contador]
    );

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
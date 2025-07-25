'use client';
// pages/index.tsx
import CurrencyConverter from '@/app/components/ConversorMoeda';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography } from '@mui/material';

export default function Moedas() {
    const [criarAlerta, setCriarAlerta] = useState(false);
    const [Alerta, setAlerta] = useState(false);

    const handlerCriarAlerta = () => {
        setCriarAlerta(!criarAlerta);
    };

    const handlerAlerta = () => {
        setAlerta(!Alerta);
    };

    return (
        <div className='flex flex-col items-center justify-center h-screen w-[100vw] bg-cyan-500'>

            {Alerta && (
                <div className="flex flex-col fixed h-[50vh] w-[40vw] bg-gray-200 bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-50 rounded-2xl shadow-2xl">

                    <h1>olaaaaaaaa</h1>

                    <button 
                    className='text-2xl bg-cyan-500 text-white p-5 rounded-lg mt-50'
                    onClick={() => handlerCriarAlerta()}>
                        CRIAR ALERTA
                    </button>
                </div>
            )
            }


            <div className={`flex flex-col items-center bg-white h-[80vh] p-10 w-[50vw] rounded-2xl z-0 ${Alerta ? 'blur-sm pointer-events-none' : ''}`}>
                <Typography variant="h4" gutterBottom>Conversor de Moedas</Typography>
                <CurrencyConverter />
                <div className='flex flex-col items-center mt-30'>
                    <button
                        className='text-2xl bg-cyan-500 text-white p-5 rounded-lg'
                        onClick={() => handlerAlerta()}

                    >
                        <h2>CRIAR ALERTA DE COTAÇÃO PARA UMA MOEDA</h2>
                    </button>
                </div>
            </div>
        </div>
    );
}

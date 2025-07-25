"use client";

import { NextPage } from 'next';
import Link from 'next/link';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import React from 'react';

const Register: NextPage = () => {

    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    const handleGoogleRegister = () => {
        // Aqui você chamaria sua função de autenticação com o Google
        console.log("Registrar com Google");
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-[#2193b0] to-[#0b1c2c] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6 text-black-800 text-center">
                    Cadastro de Usuário
                </h2>
                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-black-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                            placeholder="seuemail@exemplo.com"
                        />
                    </div>
                    <div className="mb-5 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-black-700">
                            Senha
                        </label>
                        <div className="mb-5 relative">
                            <input
                                id="password"
                                name="password"
                                type={passwordVisible ? 'text' : 'password'}
                                autoComplete="new-password"
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
                                placeholder="Digite sua senha"
                            />
                            <button
                                type="button"
                                onClick={handleTogglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-600"
                                aria-label={passwordVisible ? 'Esconder senha' : 'Mostrar senha'}
                            >
                                {passwordVisible ? <HiEye size={20} /> : <HiEyeOff size={20} />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-black bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                        >
                            Registrar
                        </button>
                    </div>
                </form>

                {/* Separador visual */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300" />
                    <span className="mx-4 text-sm text-gray-500">ou</span>
                    <div className="flex-grow border-t border-gray-300" />
                </div>

                {/* Botão de registro com Google */}
                <div>
                    <button
                        type="button"
                        onClick={handleGoogleRegister}
                        className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-black hover:bg-gray-100 transition duration-200"
                    >
                        <FcGoogle className="mr-2" size={20} />
                        Login com Google
                    </button>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-black-600">
                        Já possui uma conta?{' '}
                        <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Faça login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

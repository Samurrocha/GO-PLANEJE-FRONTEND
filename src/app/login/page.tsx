"use client";

import { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { HiEye, HiEyeOff } from 'react-icons/hi';
import { FcGoogle } from 'react-icons/fc';
import SeoHead from '../components/SeoHead';
import { useSession } from 'next-auth/react';
import { LoginButton } from '@/features/auth/components/LoginButton';
import { redirect } from 'next/navigation';


const Login: NextPage = () => {
    const { data: session, status } = useSession()

    if (status === 'authenticated' || session) {
        redirect('/home')
    }

    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleTogglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    // const handleGoogleRegister = () => {
    //     console.log("Registrar com Google");
    // }

    return (


        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 bg-gradient-to-r from-[#2193b0] to-[#0b1c2c]">

            <SeoHead title="Login - Go Planeje" description="Acesse sua conta no Go Planeje e organize suas viagens." />

            <div className="bg-white shadow-lg rounded-lg px-8 py-10 w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-black-800 mb-2">
                    Login
                </h2>
                <p className="text-center text-black-600 mb-8">
                    Organize suas viagens de forma simples e prática
                </p>
                <form noValidate>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-black-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            placeholder="seuemail@exemplo.com"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>

                    <div className="mb-5 relative">
                        <label htmlFor="password" className="block text-black-700 font-medium mb-2">
                            Senha
                        </label>
                        <div className="relative">
                            <input
                                id="password"
                                type={passwordVisible ? 'text' : 'password'}
                                required
                                placeholder="Digite sua senha"
                                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                            />
                            <button
                                type="button"
                                onClick={handleTogglePasswordVisibility}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black-600"
                                aria-label={passwordVisible ? 'Mostrar senha' : 'Esconder senha'}
                            >
                                {passwordVisible ? <HiEye size={20} /> : <HiEyeOff size={20} />}
                            </button>
                        </div>
                    </div>


                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300 rounded"
                            />
                            <label htmlFor="remember" className="ml-2 block text-black-700">
                                Lembrar-me
                            </label>
                        </div>
                        <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                            Esqueceu a senha?
                        </Link>
                    </div>
                    <LoginButton
                        label="Login"
                        styleClassName="w-full py-3 bg-blue-600 text-black font-semibold rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                        type="submit"
                    />

                </form>


                {/* Separador visual */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300" />
                    <span className="mx-4 text-sm text-gray-500">ou</span>
                    <div className="flex-grow border-t border-gray-300" />
                </div>

                {/* Botão de registro com Google */}

                <LoginButton
                    provider='google'
                    icon={<FcGoogle className="mr-2" size={20} />}
                    styleClassName="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-black hover:bg-gray-100 transition duration-200"
                />

                <div className="mt-6 text-center">
                    <p className="text-sm text-black-600">
                        Não possui uma conta ainda?{' '}
                        <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Registre-se já
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;

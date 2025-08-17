'use client'

import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { LoginButtonProps } from '@/features/auth/types/loginButton'
export const LoginButton = ({ provider, label, icon, styleClassName, type, data }: LoginButtonProps) => {
  const { data: session, status } = useSession()

  if (status === 'authenticated' || session) return redirect('/home')

  const onClick = async () => {


    await signIn(provider, {
      redirect: true,
      email: data?.email,
      password: data?.password,
      callbackUrl: '/home'
    })

  }

  return (

    <button
      onClick={provider ? onClick : undefined}
      className={styleClassName}
      type={type || 'button'}
    >
      {icon}

      <span>{label || `Login com ${provider}`}</span>
    </button>
  )
}

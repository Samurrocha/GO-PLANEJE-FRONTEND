'use client'

import { signIn, useSession } from 'next-auth/react'
import { LoginButtonProps } from '@/features/auth/types/loginButton'
import { redirect } from 'next/navigation'
export const LoginButton = ({ provider, label, icon, onClick, styleClassName, type, data }: LoginButtonProps) => {
  const { data: session, status } = useSession()

  if (status === 'authenticated' || session) return redirect('/home')

  if (!onClick) {
    onClick = async () => {


      await signIn(provider || 'credentials', { 
        redirect:true,
        email: data?.email,
        password: data?.password,
        callbackUrl: '/home' 
      })

    }
  }

  return (

    <button
      onClick={onClick}
      className={styleClassName}
      type={type || 'button'}
    >
      {icon}

      <span>{label || `Login com ${provider}`}</span>
    </button>
  )
}

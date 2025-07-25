'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { LoginButtonProps } from '@/features/auth/types/LoginButton'
import { redirect } from 'next/navigation'
export const LoginButton = ({ provider, label, icon, onClick, styleClassName, type }: LoginButtonProps) => {
  const { data: session, status } = useSession()

  if (status === 'authenticated' || session) return redirect('/home')

  if (!onClick) {
    onClick = () => {
      signIn(provider|| 'credentials', { callbackUrl: '/home' })

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

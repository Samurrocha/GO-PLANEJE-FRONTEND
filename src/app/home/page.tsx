// app/home/page.tsx
//import { getServerSession } from 'next-auth'
//import { authOptions } from '@/lib/auth/options'
//mport { redirect } from 'next/navigation'
import Logo from '../../../public/logo.png'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import TravelForm from '../components/TravelForm'
import ProfileMenuClient from './components/ProfileMenuClient' // <- componente client

export default async function Home() {
  //const session = await getServerSession(authOptions)

  // if (!session) {
  //   redirect('/login')
  // }

  return (
    <main className="flex flex-col min-h-screen w-full h-full items-center">
      <header className="flex items-center bg-cyan-500 h-[10vh] w-full px-4 relative font-bold text-white text-lg">
        <Image src={Logo} alt="Logo" className="w-[7vw] mr-auto" priority />
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <NavBar />
        </div>

        <ProfileMenuClient /> {/*CLIENT COMPONENT} */}
      </header>

      <div className="m-auto h-1/4 w-[80vw] p-6 rounded-lg shadow-lg shadow-blue-500/50">
        <TravelForm />
      </div>
    </main>
  )
}

'use client'
import Image from "next/image";
import TravelForm from "../components/TravelForm";
import NavBar from "../components/NavBar";
import Logo from "../../../public/logo.png"
import { RiAccountCircleFill } from "react-icons/ri";
//import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react"
//import { authOptions } from "@/lib/auth/options";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { DropDown } from "../components/DropDown";
//import { CountryList } from "@/features/countries/components/countryList";
//import { UserList } from "@/features/users/components/UserList";
export default function Home() {

  const { data: session, status } = useSession()

  if (status === "unauthenticated" || session) {
    return redirect('/login')
  }

  const profileMenu = [
    { label: "Perfil", onClick: () => { console.log("Perfil") } },
    { label: "Sair", value: "sair", onClick: () => { signOut() } },
    { label: "Configurações", value: "configurações", onClick: () => { console.log("configurações") } },
    { label: "Ajuda", value: "ajuda", onClick: () => { console.log("ajuda") } },
    { label: "Minhas viagens", value: "minhas viagens", onClick: () => { console.log("minhas viagens") } },
  ]

  return (
    <main className="flex flex-col min-h-screen w-full h-full items-center">
      <header className="flex items-center bg-cyan-500 h-[10vh] w-full px-4 relative font-bold text-white text-lg">
        <Image src={Logo} alt="Logo" className="w-[7vw] mr-auto" priority />
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <NavBar />
        </div>

        <DropDown options={profileMenu} buttonLabel={<RiAccountCircleFill size={40} color="black" />} />
        {/* <button
          className="absolute right-10 text-black rounded-full"
          >
          <RiAccountCircleFill size={40} />
        </button> */}
      </header>

      <div className="m-auto h-1/4 w-[80vw] p-6 rounded-lg shadow-lg shadow-blue-500/50">


        <TravelForm />
      </div>
    </main>
  );
}

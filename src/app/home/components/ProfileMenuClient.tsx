'use client'
import { DropDown } from "@/app/components/DropDown";
import { RiAccountCircleFill } from "react-icons/ri";
import { signOut } from "next-auth/react";

export default function ProfileMenuClient() {
    
    const profileMenu = [
        { label: "Perfil", onClick: () => { console.log("Perfil") } },
        { label: "Sair", value: "sair", onClick: () => { signOut() } },
        { label: "Configurações", value: "configurações", onClick: () => { console.log("configurações") } },
        { label: "Ajuda", value: "ajuda", onClick: () => { console.log("ajuda") } },
        { label: "Minhas viagens", value: "minhas viagens", onClick: () => { console.log("minhas viagens") } },
      ]

      return(

        <DropDown options={profileMenu} buttonLabel={<RiAccountCircleFill size={40} color="black" />} />
      )
}
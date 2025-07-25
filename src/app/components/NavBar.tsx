import Link from "next/link"

export default function NavBar() {

    return (
        <nav className="flex justify-center items-center gap-x-6">
            <Link href={"/home"}>Sua Viagem</Link>
            <Link href={"/moedas"}>COTAÇÕES</Link>
            <Link href={"/"}>canal Do cliente</Link>
            <Link href={"/"}>canal Do cliente</Link>
        </nav>
    )
}
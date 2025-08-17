import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { redirect } from "next/navigation";


export default async function RootRedirect() {
  
 const session = await getServerSession(authOptions)
 
 if(session){
  return redirect('/home')
 }

 redirect('/login')
 
}

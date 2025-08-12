import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth/options";
import { redirect } from "next/navigation";

export default async function RootRedirect() {
  
  
  return(

    <div>
      <h1>Redirecionando...</h1>
    </div>
  )
  
  
  
  
  
  
  // const session = await getServerSession(authOptions);

  // if (session) {
  //   redirect("/home");
  // } else {
  //   redirect("/register");
  // }
}

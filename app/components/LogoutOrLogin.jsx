import Link from "next/link";
import { createClient } from "../utils/supabase/server";
import LogoutButton from "./LogoutButton";

export default async function LogoutOrLogin(){
    const supabase = await createClient();
    const {data} = await supabase.auth.getUser()

    if (data.user){
        return (
            <div>
                <LogoutButton/>
            </div>
        )
    }

    return (
        <div>
            <Link className="hover:text-blue-500" href="/login">
                Login
            </Link>
        </div>
    )
}
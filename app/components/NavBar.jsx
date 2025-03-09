import Link from "next/link";
import LogoutOrLogin from "./LogoutOrLogin";

export default function NavBar(){
    return (
        <nav className="bg-gray-900 text-white p-4">
            <div className="flex justify-between items-center w-full">
                <ul className="flex space-x-4 justify-center items-center">
                    <li className="hover:text-blue-500">
                        <Link  href="/">
                            Home
                        </Link>
                    </li>
                    <li className="hover:text-blue-500">
                        <Link href="/saved">
                            Saved quotes
                        </Link>
                    </li>
                </ul>
                <div>
                    <LogoutOrLogin/>
                </div>
            </div>
        </nav>
    )
}
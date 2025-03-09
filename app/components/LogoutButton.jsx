'use client';

import { logout } from "../logout/actions";

export default function LogoutButton(){
    return (
        <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-200 ease-in-out"
            onClick={() => logout()}>
                Logout
        </button>
    )
}
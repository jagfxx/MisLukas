"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Navbar() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogout = () => {
        router.push("login");
        window.location.reload();
        localStorage.removeItem("token");
    }
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);
    if (isLoggedIn) {
        return (
            <div className="flex flex-row items-center justify-between w-full h-10">
                <h1 className="text-4xl font-bold p-4">MisLukas</h1>
                <button className="w- h-10 rounded-md border border-gray-300 p-2" onClick={handleLogout}>Cerrar sesión</button>
            </div>
        )
    }
    else {
        return (
            <div className="flex flex-row items-center justify-between w-full h-10">
            <h1 className="text-4xl font-bold p-4">MisLukas</h1>
            </div>
        )
    }
}
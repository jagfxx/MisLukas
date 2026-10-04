"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("auth/login");
  };

  const handleRegister = () => {
    router.push("auth/register");
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center ">
      <main className="flex flex-col items-center justify-center gap-4">
          <button onClick={handleLogin} className="border border-white w-full text-white p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">Login</button>
          <button onClick={handleRegister} className="border border-white w-full text-white p-2 rounded-md hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">Register</button>
       </main>
    </div>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-4 border border-white p-4 rounded-md">
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="email@example.com" className="w-full p-2 border border-white rounded-md" />
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-2 border border-white rounded-md" />
        <button  type="submit" className="w-full p-2 border border-white rounded-md hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">Login</button>
        <p>Don't have an account? <Link href="register" className="text-blue-500">Register</Link></p>
      </form>
    </div>
  );
}
"use client";
import Link from "next/link";
import { useState } from "react";
import Resume from "./resume";
import Income from "./income";
import Expenses from "./expenses";
import FixedExpenses from "./fixed-expenses";
export default function DashboardPage() {
    const [activeTab, setActiveTab] = useState("dashboard");
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    }
  return (
    <div className="flex flex-col items-center justify-center border border-white rounded-md w-full h-full overflow-hidden">
        
        <div className="flex flex-col items-center  w-full h-full">
            {activeTab === "resume" && <Resume /> }
            {activeTab === "income" && <Income /> }
            {activeTab === "fixed-expenses" && <FixedExpenses /> }
            {activeTab === "expenses" && <Expenses /> }
       </div>
        <nav className="flex flex-row items-center justify-center border bg-white text-black  w-xl h-10 rounded-full overflow-hidden">
            <button className=" hover:bg-black hover:text-white transition-all duration-300  w-1/4 h-full text-sm flex items-center justify-center" onClick={() => handleTabClick("resume")}>Resumen</button>
            <button className=" hover:bg-black hover:text-white transition-all duration-300  w-1/4 h-full text-sm flex items-center justify-center" onClick={() => handleTabClick("income")}>Income</button>
            <button className=" hover:bg-black hover:text-white transition-all duration-300  w-1/4 h-full text-sm flex items-center justify-center" onClick={() => handleTabClick("fixed-expenses")}>Fixed Expenses</button>
            <button className=" hover:bg-black hover:text-white transition-all duration-300  w-1/4 h-full text-sm flex items-center justify-center" onClick={() => handleTabClick("expenses")}>Expenses</button>
        </nav>
    </div>
  );
}
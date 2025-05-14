import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import AuthModal from "./AuthModal";

export default function Navbar(){
    const {user, logout} = useAuth();
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <nav className="flex justify-between items-center px-6 py-4 shadow">
            <h1 className="text-2xl font-bold text-orange-500">ByteBite</h1>
            {user ? (
                <div className="flex items-center gap-4">
                <span className="text-sm">Hi, {user.name || user.mobile}</span>
                <button
                    onClick={logout}
                    className="text-sm bg-red-500 text-white px-3 py-1 rounded"
                >
                    Logout
                </button>
                </div>
            ) : (
                <>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="text-sm bg-orange-500 text-white px-4 py-2 rounded"
                >
                    Sign In
                </button>
                {isModalOpen && <AuthModal onClose={() => setIsModalOpen(false)} />}
                </>
            )}
            </nav>
    );
}
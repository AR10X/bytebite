import { useState, useEffect, useContext, createContext } from "react";

type User = {
    mobile: string;
    name?: string;
};

type AuthContextType = {
    user:(User | null);
    login: (user: User) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: React.ReactNode}){
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const saved = localStorage.getItem("auth-user");
        if(saved) setUser(JSON.parse(saved));
    },[]);

    const login = (user: User) => {
        setUser(user);
        localStorage.setItem("auth-user", JSON.stringify(user));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("auth-user");
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
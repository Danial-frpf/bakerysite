import { createContext, Dispatch, SetStateAction } from "react";

interface AdminContextType {
    jwtAdmin: string;
    setJwtAdmin: Dispatch<SetStateAction<string>>;
}

export const AdminContext = createContext<AdminContextType | null>(null);

import { useEffect, useState } from "react";
import { AdminContext } from "../../context";

export interface IContextLayout {
    children?: React.ReactNode;
}

const ContextLayout: React.FC<IContextLayout> = ({ children }) => {
    const [jwtAdmin, setJwtAdmin] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        if (token) setJwtAdmin(token);
    }, []);

    return (
        <AdminContext.Provider value={{ jwtAdmin, setJwtAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

export default ContextLayout;

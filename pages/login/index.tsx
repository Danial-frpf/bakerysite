import React, { useContext, useEffect, useState } from "react";
import Button from "../../src/components/Button";
import InputField from "../../src/components/InputField";
import styles from "../../styles/Login.module.css";
import { NextPageWithLayout } from "../page";
import ContextLayout from "../../src/layouts/ContextLayout";
import { AdminContext } from "../../src/context";
import Router from "next/router";
import { isValidAdmin } from "../../lib/auth/admin";
import loginAdmin from "../../lib/axios/loginAdmin";

const Login: NextPageWithLayout = () => {
    const [error, setError] = useState("");
    const adminContext = useContext(AdminContext);

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = e.currentTarget.user.value;
        const password = e.currentTarget.password.value;

        try {
            const { message, accessToken } = await loginAdmin(user, password);
            if (accessToken) {
                adminContext?.setJwtAdmin(accessToken);
                localStorage.setItem("accessToken", accessToken);
                setError("");
                Router.push("/admin_panel");
            } else {
                setError(message);
            }
        } catch (e) {
            setError("Network Problem");
        }
    };

    useEffect(() => {
        if (isValidAdmin(adminContext?.jwtAdmin)) Router.push("/admin_panel");
    }, [adminContext]);

    return (
        <div className={`${styles.container}`}>
            <form className={`${styles.form}`} onSubmit={submitHandler}>
                <h1>Login</h1>
                <InputField label="User: " name="user" />
                <InputField
                    label="Password: "
                    name="password"
                    type="password"
                />
                <p>{error}</p>
                <Button label="Login" type="submit" />
            </form>
        </div>
    );
};

Login.getLayout = (page) => {
    return <ContextLayout>{page}</ContextLayout>;
};

export default Login;

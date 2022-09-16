import React, { useContext, useState } from "react";
import Button from "../../src/components/Button";
import InputField from "../../src/components/InputField";
import styles from "../../styles/Login.module.css";
import axios from "axios";
import { NextPageWithLayout } from "../page";
import ContextLayout from "../../src/layouts/ContextLayout";
import { AdminContext } from "../../src/context";
import Router from "next/router";
import { isValidAdmin } from "../../lib/auth/admin";

const Login: NextPageWithLayout = () => {
    const [error, setError] = useState("");
    const adminContext = useContext(AdminContext);

    if (isValidAdmin(adminContext?.jwtAdmin)) Router.push("/adminpanel");

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const user = e.currentTarget.user.value;
        const password = e.currentTarget.password.value;

        try {
            const res = await axios.post(
                "http://localhost:3000/api/authenticateAdmin",
                {
                    user,
                    password,
                }
            );

            const { message, accessToken } = res.data;
            if (accessToken) {
                adminContext?.setJwtAdmin(accessToken);
                localStorage.setItem("accessToken", accessToken);
                setError("");
                Router.push("/adminpanel");
            } else {
                setError(message);
            }
        } catch (e) {
            setError("Network Problem");
        }
    };

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
                <Button label="Login" />
            </form>
        </div>
    );
};

Login.getLayout = (page) => {
    return <ContextLayout>{page}</ContextLayout>;
};

export default Login;

import { NextPage } from "next";
import React from "react";
import Button from "../../src/components/Button";
import InputField from "../../src/components/InputField";
import styles from "../../styles/Login.module.css";

const Login: NextPage = () => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = e.currentTarget.user.value;
        const password = e.currentTarget.password.value;

        if (password === "admin" && user === "admin") {
            alert("login successful");
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
                <Button label="Login" />
            </form>
        </div>
    );
};

export default Login;

import { useState } from "react";
import styles from "./styles.module.css";

export interface IInputField {
    label: string;
    name: string;
    placeholder?: string;
    type?: "text" | "password";
    size?: "sm" | "md" | "lg";
}
const InputField: React.FC<IInputField> = ({
    label,
    name,
    type = "text",
    size = "md",
    placeholder = "",
}) => {
    const [value, setValue] = useState("");
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };
    if (size === "sm") {
        return (
            <div
                className={`${styles.container} ${styles.sm}`}
                data-testid="InputField"
            >
                <p>
                    <span>{label}</span>
                </p>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={changeHandler}
                />
            </div>
        );
    }

    if (size === "md") {
        return (
            <div
                className={`${styles.container} ${styles.md}`}
                data-testid="InputField"
            >
                <h2>
                    <span>{label}</span>
                </h2>
                <input
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={changeHandler}
                />
            </div>
        );
    }

    return (
        <div
            className={`${styles.container} ${styles.lg}`}
            data-testid="InputField"
        >
            <h1>
                <span>{label}</span>
            </h1>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
            />
        </div>
    );
};

export default InputField;

import { useState } from "react";
import Label from "../Label";
import styles from "./styles.module.css";

export interface IInputField {
    label: string;
    name: string;
    placeholder?: string;
    type?: "text" | "password" | "file";
    size?: "sm" | "md" | "lg" | "xl";
    props?: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>,
        HTMLDivElement
    >;
}
const InputField: React.FC<IInputField> = ({
    label,
    name,
    type = "text",
    size = "md",
    placeholder = "",
    props,
}) => {
    const [value, setValue] = useState("");
    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    };

    let sizeStyle = "";

    switch (size) {
        case "sm":
            sizeStyle = styles.sm;
            break;
        case "md":
            sizeStyle = styles.md;
            break;
        case "lg":
            sizeStyle = styles.lg;
            break;
        case "xl":
            sizeStyle = styles.xl;
            break;
        default:
            break;
    }

    return (
        <div
            data-testid="InputField"
            {...props}
            className={`${styles.container} ${sizeStyle} ${props?.className}`}
        >
            <Label label={label} size={size} />
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

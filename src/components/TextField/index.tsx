import { useState } from "react";
import Label from "../Label";
import styles from "./styles.module.css";

export interface ITextField {
    label: string;
    name: string;
    rows?: number;
    cols?: number;
    placeholder?: string;
    size?: "sm" | "md" | "lg" | "xl";
    props?: React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    >;
}
const TextField: React.FC<ITextField> = ({
    label,
    name,
    rows,
    cols,
    placeholder,
    size = "md",
    props,
}) => {
    const [value, setValue] = useState("");

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value);
    };

    return (
        <div data-testid="TextField" className={styles.container}>
            <Label label={label} size={size} />
            <textarea
                name={name}
                rows={rows}
                cols={cols}
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
                {...props}
                className={`${styles.textarea} ${props?.className}`}
            ></textarea>
        </div>
    );
};

export default TextField;

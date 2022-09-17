import Label from "../Label";
import styles from "./styles.module.css";

export interface IButton {
    label: string;
    size?: "sm" | "md" | "lg" | "xl";
    type?: "submit" | "button";
    props?: React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
    >;
}

const Button: React.FC<IButton> = ({
    label,
    size = "md",
    type = "button",
    props,
}) => {
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
        <button
            type={type}
            data-testid="Button"
            {...props}
            className={`${styles.container} ${sizeStyle} ${props?.className}`}
        >
            <Label label={label} size={size} />
        </button>
    );
};

export default Button;

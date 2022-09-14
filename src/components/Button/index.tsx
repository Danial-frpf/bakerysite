import styles from "./styles.module.css";

export interface IButton {
    label: string;
    size?: "sm" | "md" | "lg";
}
const Button: React.FC<IButton> = ({ label, size = "md" }) => {
    if (size === "sm") {
        return (
            <button
                className={`${styles.container} ${styles.sm}`}
                type="submit"
                data-testid="Button"
            >
                <p>
                    <span>{label}</span>
                </p>
            </button>
        );
    }

    if (size === "md") {
        return (
            <button
                className={`${styles.container} ${styles.md}`}
                type="submit"
                data-testid="Button"
            >
                <h2>
                    <span>{label}</span>
                </h2>
            </button>
        );
    }

    return (
        <button
            className={`${styles.container} ${styles.lg}`}
            type="submit"
            data-testid="Button"
        >
            <h1>
                <span>{label}</span>
            </h1>
        </button>
    );
};

export default Button;

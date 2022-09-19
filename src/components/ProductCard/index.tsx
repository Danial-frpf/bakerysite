import Label from "../Label";
import styles from "./styles.module.css";

export interface IProductCard {
    label: string;
    image: string;
    size?: "sm" | "md" | "lg";
    selected?: boolean;
}
const ProductCard: React.FC<IProductCard> = ({
    label,
    image,
    size = "md",
    selected,
}) => {
    let sizeStyle = "";
    switch (size) {
        case "lg":
            sizeStyle = styles.lg;
            break;
        case "md":
            sizeStyle = styles.md;
            break;
        case "sm":
            sizeStyle = styles.sm;
            break;
    }
    return (
        <div
            className={`${styles.container} ${selected ? styles.selected : ""}`}
            data-testid="ProductCard"
        >
            <img
                className={`${styles.image} ${sizeStyle} `}
                src={image}
                alt={`${label} image`}
            />
            <Label label={label} size={size} />
        </div>
    );
};

export default ProductCard;

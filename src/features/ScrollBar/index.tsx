import styles from "./styles.module.css";

export interface IScrollBar {
    sampleTextProp: string;
}
const ScrollBar: React.FC<IScrollBar> = ({ sampleTextProp }) => {
    return (
        <div className={styles.container} data-testid="ScrollBar">
            {sampleTextProp}
        </div>
    );
};

export default ScrollBar;

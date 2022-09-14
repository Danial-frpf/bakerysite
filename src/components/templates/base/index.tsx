import styles from "./styles.module.css";

export interface IBaseTemplate {
    sampleTextProp: string;
}
const BaseTemplate: React.FC<IBaseTemplate> = ({ sampleTextProp }) => {
    return (
        <div className={styles.container} data-testid="BaseTemplate">
            {sampleTextProp}
        </div>
    );
};

export default BaseTemplate;

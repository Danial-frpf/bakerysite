export interface ILabel {
    label: string;
    size?: "sm" | "md" | "lg" | "xl";
    props?: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLHeadingElement>,
        HTMLHeadingElement
    >;
}
const Label: React.FC<ILabel> = ({ label, size = "md", props }) => {
    if (size === "sm")
        return (
            <p data-testid="Label" {...props}>
                <span>{label}</span>
            </p>
        );

    if (size === "md")
        return (
            <h4 data-testid="Label" {...props}>
                <span>{label}</span>
            </h4>
        );

    if (size === "lg")
        return (
            <h2 data-testid="Label" {...props}>
                <span>{label}</span>
            </h2>
        );

    return (
        <h1 data-testid="Label" {...props}>
            <span>{label}</span>
        </h1>
    );
};

export default Label;

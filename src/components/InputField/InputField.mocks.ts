import { IInputField } from ".";

const small: IInputField = {
    label: "User:",
    name: "user",
    placeholder: "placeholder...",
    size: "sm",
    type: "text",
};

const medium: IInputField = {
    label: "User:",
    name: "user",
    placeholder: "placeholder...",
    size: "md",
    type: "text",
};

const large: IInputField = {
    label: "User:",
    name: "user",
    placeholder: "placeholder...",
    size: "lg",
    type: "text",
};

const extraLarge: IInputField = {
    label: "User:",
    name: "user",
    placeholder: "placeholder...",
    size: "xl",
    type: "text",
};

export const mockInputFieldProps = {
    small,
    medium,
    large,
    extraLarge,
};

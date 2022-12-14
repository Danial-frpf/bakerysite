import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputField, { IInputField } from ".";
import { mockInputFieldProps } from "./InputField.mocks";

export default {
    title: "templates/InputField",
    component: InputField,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof InputField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InputField> = (args) => (
    <InputField {...args} />
);

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const ExtraLarge = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Small.args = {
    ...mockInputFieldProps.small,
} as IInputField;

Medium.args = {
    ...mockInputFieldProps.medium,
} as IInputField;

Large.args = {
    ...mockInputFieldProps.large,
} as IInputField;

ExtraLarge.args = {
    ...mockInputFieldProps.extraLarge,
} as IInputField;

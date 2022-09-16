import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button, { IButton } from ".";
import { mockButtonProps } from "./Button.mocks";

export default {
    title: "templates/Button",
    component: Button,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const ExtraLarge = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Small.args = {
    ...mockButtonProps.small,
} as IButton;

Medium.args = {
    ...mockButtonProps.medium,
} as IButton;

Large.args = {
    ...mockButtonProps.large,
} as IButton;

ExtraLarge.args = {
    ...mockButtonProps.extraLarge,
} as IButton;

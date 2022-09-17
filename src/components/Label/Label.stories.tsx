import { ComponentStory, ComponentMeta } from "@storybook/react";
import Label, { ILabel } from ".";
import { mockLabelProps } from "./Label.mocks";

export default {
    title: "templates/Label",
    component: Label,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Label>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
export const ExtraLarge = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args

Small.args = {
    ...mockLabelProps.small,
} as ILabel;

Medium.args = {
    ...mockLabelProps.medium,
} as ILabel;

Large.args = {
    ...mockLabelProps.large,
} as ILabel;

ExtraLarge.args = {
    ...mockLabelProps.extraLarge,
} as ILabel;

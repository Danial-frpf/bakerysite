import { ComponentStory, ComponentMeta } from "@storybook/react";
import ScrollBar, { IScrollBar } from ".";
import { mockScrollBarProps } from "./ScrollBar.mocks";

export default {
    title: "templates/ScrollBar",
    component: ScrollBar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof ScrollBar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ScrollBar> = (args) => (
    <ScrollBar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockScrollBarProps.base,
} as IScrollBar;

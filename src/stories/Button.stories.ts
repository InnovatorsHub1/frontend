import GenericButton from "@src/components/Button/GenericButton";
import { Meta, StoryObj } from "@storybook/react";

import { ComponentProps } from "react";

type StoryProps = ComponentProps<typeof GenericButton>;

const meta : Meta<StoryProps> = {
    component: GenericButton
}

export default meta;

type Story = StoryObj<StoryProps>;

export const primary: Story = {
    args:{
        variant: 'primary',
        size: 'sm',
        padding: '24px',
        fontSize: '24px',
        margin: 20,
        type: 'button',
        active: true,
        color: 'red',
        children:"Avinoam"
    }
}
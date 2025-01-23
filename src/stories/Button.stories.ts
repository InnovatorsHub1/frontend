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
        children:"primary"
    }
}

export const activeButton: Story = {
    args:{
        isActive: true,
        isActiveAcolor: 'red',
        isActiveBackgroundColor: 'pink',
        children:"Active Button"
    }
}
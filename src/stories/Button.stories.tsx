import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "components/Button";
import { ButtonSize, ButtonType } from "types/index";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    size: {
      options: [
        ButtonSize.ExtraBig,
        ButtonSize.Big,
        ButtonSize.Standard,
        ButtonSize.Little,
      ],
      control: { type: "select" },
    },
    type: {
      options: [ButtonType.Square],
      control: { type: "select" },
    },
    iconUrl: {
      options: [
        "../assets/svg/icon_behance.svg",
        "./assets/svg/icon_dribbble.svg",
        "./assets/svg/icon_facebook.svg",
        "./assets/svg/icon_google.svg",
        "./assets/svg/icon_linkedin.svg",
        "./assets/svg/icon_play_circle.svg",
        "./assets/svg/icon_twitter.svg",
        "./assets/svg/icon_youtube.svg",
      ],
      control: { type: "select" },
    },
    filled: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonExample = Template.bind({});

ButtonExample.args = {
  size: ButtonSize.Standard,
  type: ButtonType.Square,
  iconUrl: "../assets/svg/icon_behance.svg",
  filled: false,
  disabled: false,
  children: "Button text",
};

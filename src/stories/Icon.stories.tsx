import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "components/Icon";
import { ICON_URLS } from "constants/iconPaths";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    url: {
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
    width: {
      control: { type: "number" },
    },
    height: {
      control: { type: "number" },
    },
    color: { control: "color" },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconExample = Template.bind({});

IconExample.args = {
  url: ICON_URLS.IconPlayCircle,
  width: 25,
  height: 25,
  color: "#000000",
};

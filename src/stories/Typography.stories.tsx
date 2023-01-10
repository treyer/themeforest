import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "components/Typography";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    color: { control: "color" },
    variant: {
      options: [
        "headline0_extrabold",
        "headline1_extrabold",
        "headline2_extrabold",
        "headline3_extrabold",
        "headline3_1_extrabold",
        "headline4_bold",
        "headline5_bold",
        "headline6_bold",
        "headline7_semibold",
        "headline7_medium",
        "headline8_semibold",
        "paragraph0_bold",
        "paragraph1_regular",
        "paragraph2_regular",
        "paragraph2_bold",
        "paragraph3_regular",
        "paragraph3_semibold",
      ],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Text = Template.bind({});

Text.args = {
  color: "#000000",
  variant: "headline1_extrabold",
  children: "Some text example",
};

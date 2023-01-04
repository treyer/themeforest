import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "components/Typography/Typography";
import { TextStyle } from "types/types";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    color: { control: "color" },
    textStyle: {
      options: [
        TextStyle.Headline1_extrabold,
        TextStyle.Headline2_extrabold,
        TextStyle.Headline3_extrabold,
        TextStyle.Headline4_bold,
        TextStyle.Headline5_bold,
        TextStyle.Headline6_bold,
        TextStyle.Headline7_medium,
        TextStyle.Headline7_semibold,
        TextStyle.Paragraph1_regular,
        TextStyle.Paragraph2_bold,
        TextStyle.Paragraph2_regular,
        TextStyle.Paragraph3_regular,
        TextStyle.Paragraph3_semibold,
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
  textStyle: TextStyle.Headline1_extrabold,
  children: "Some text example",
};

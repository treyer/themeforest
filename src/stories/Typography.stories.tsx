import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Typography from "components/Typography/Typography";
import { TypographyStyle } from "types/types";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    color: { control: "color" },
    textStyle: {
      options: [
        TypographyStyle.Headline1_extrabold,
        TypographyStyle.Headline2_extrabold,
        TypographyStyle.Headline3_extrabold,
        TypographyStyle.Headline4_bold,
        TypographyStyle.Headline5_bold,
        TypographyStyle.Headline6_bold,
        TypographyStyle.Headline7_medium,
        TypographyStyle.Headline7_semibold,
        TypographyStyle.Paragraph1_regular,
        TypographyStyle.Paragraph2_bold,
        TypographyStyle.Paragraph2_regular,
        TypographyStyle.Paragraph3_regular,
        TypographyStyle.Paragraph3_semibold,
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
  textStyle: TypographyStyle.Headline1_extrabold,
  children: "Some text example",
};

import Flex from "components/elements/Flex";
import { FlexJustify } from "types/index";
import BreadcrumbLink from "./BreadcrumbLink";
import { BreadcrumbsProps } from "./types";

const Breadcrumbs = ({
  links,
  position = FlexJustify.Start,
}: BreadcrumbsProps) => {
  return (
    <Flex columnGap={9} justify={position} marginTop={20}>
      {links.map((link, index) => (
        <BreadcrumbLink key={index} link={link} />
      ))}
    </Flex>
  );
};

export default Breadcrumbs;
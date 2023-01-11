import Flex from "components/elements/Flex";
import BreadcrumbLink from "./BreadcrumbLink";
import { BreadcrumbsProps } from "./types";

const Breadcrumbs = ({ links, position }: BreadcrumbsProps) => {
  return (
    <Flex columnGap={9} justify={position} marginTop={20}>
      {links.map((link) => (
        <BreadcrumbLink key={link.name} link={link} />
      ))}
    </Flex>
  );
};

Breadcrumbs.defaultProps = {
  position: "start",
};

export default Breadcrumbs;

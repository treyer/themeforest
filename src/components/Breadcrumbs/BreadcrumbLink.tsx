import Icon from "components/Icon";
import Typography from "components/Typography";
import { BreadcrumbsLinkProps } from "./types";
import { ICON_URLS } from "constants/iconPaths";
import { Link } from "./styled";

const BreadcrumbLink = ({ link, mode }: BreadcrumbsLinkProps) => {
  return (
    <>
      {link.isActive ? (
        <Typography
          color={mode === "dark" ? "white" : "gray"}
          variant="headline7_semibold"
          unselected
        >
          {link.name}
        </Typography>
      ) : (
        <>
          <Link to={link.url}>
            <Typography variant="headline7_medium" color="gray">
              {link.name}
            </Typography>
          </Link>
          <Icon url={ICON_URLS.Divider} width={2} height={14} color="gray" />
        </>
      )}
    </>
  );
};

export default BreadcrumbLink;

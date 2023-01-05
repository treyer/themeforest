import Icon from "components/Icon/Icon";
import Typography from "components/Typography/Typography";
import { IconColor, TextColor, TextStyle } from "types/types";
import { BreadcrumbsLinkType } from "./types";
import { ICON_URLS } from "constants/iconPaths";
import { Link } from "./components";

const BreadcrumbLink = ({ link }: { link: BreadcrumbsLinkType }) => {
  if (link.isActive) {
    return (
      <Typography
        textStyle={TextStyle.Headline7_semibold}
        color={TextColor.Black}
        unselected
      >
        {link.name}
      </Typography>
    );
  } else {
    return (
      <>
        <Link to={link.url}>
          <Typography
            textStyle={TextStyle.Headline7_medium}
            color={TextColor.Grey}
          >
            {link.name}
          </Typography>
        </Link>
        <Icon
          url={ICON_URLS.Divider}
          width={2}
          height={14}
          color={IconColor.Grey}
        />
      </>
    );
  }
};

export default BreadcrumbLink;

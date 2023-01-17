import DOMPurify from "dompurify";

import Tag from "components/controls/Tag";
import Flex from "components/elements/Flex";
import Image from "components/elements/Image";
import Icon from "components/Icon";
import Typography from "components/Typography";

import { ICON_URLS } from "constants/iconPaths";
import { PostFullProps } from "./types";

const FullPost = ({ post }: PostFullProps) => {
  const { imgUrl, header, date, author, text, views, socialLinks, tags } = post;

  const safeHeader = DOMPurify.sanitize(header);

  const safeText = DOMPurify.sanitize(text);

  return (
    <>
      <Image src={imgUrl} alt={header} width={635} height={330} />

      <Flex columnGap={32} width={244} marginTop={25}>
        <Flex columnGap={10} align="center">
          <Icon url={ICON_URLS.Calendar} width={11} height={11} color="gray" />
          <Typography variant="paragraph3_regular" color="gray">
            {date}
          </Typography>
        </Flex>
        <Flex columnGap={10} align="center">
          <Icon url={ICON_URLS.Person} width={11} height={11} color="gray" />
          <Typography variant="paragraph3_regular" color="gray">
            {author}
          </Typography>
        </Flex>
      </Flex>

      <Typography variant="headline3_extrabold" marginTop={40}>
        <div dangerouslySetInnerHTML={{ __html: safeHeader }}></div>
      </Typography>

      <Typography variant="paragraph2_regular" color="gray" marginTop={30}>
        <div dangerouslySetInnerHTML={{ __html: safeText }}></div>
      </Typography>

      <Flex justify="start" columnGap={32} width={520}>
        <Flex justify="start" columnGap={10}>
          <Icon url={ICON_URLS.DataLine} width={13} height={11} color="gray" />
          <Typography variant="paragraph3_regular" color="gray">
            {views} Views
          </Typography>
        </Flex>
        <Flex justify="start" columnGap={10}>
          <Icon url={ICON_URLS.Share} width={13} height={11} color="gray" />
          <Typography variant="paragraph3_regular" color="gray">
            Share:
          </Typography>
          {socialLinks.map(({ id, iconUrl }) => (
            <Icon key={id} url={iconUrl} width={15} height={15} color="gray" />
          ))}
        </Flex>
        <Flex columnGap={8} justify="start">
          <Flex columnGap={10} justify="start">
            <Icon url={ICON_URLS.Tag} width={13} height={13} color="gray" />
            <Typography variant="paragraph3_regular" color="gray">
              Tags:
            </Typography>
          </Flex>
          {tags.map(({ id, text }) => (
            <Tag key={id}>{text}</Tag>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default FullPost;

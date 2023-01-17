import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Tag from "components/controls/Tag";
import Flex from "components/elements/Flex";
import Typography from "components/Typography";
import { RootState } from "store/index";
import { selectActiveTag, selectTagList } from "store/selectors/selectors";
import { setCurrentTag } from "store/actions/actionCreators";

const TagSection = () => {
  const dispatch = useDispatch();
  const tagList = useSelector((state: RootState) => selectTagList(state));
  const activeTag = useSelector((state: RootState) => selectActiveTag(state));

  const handleTagClick = useCallback(
    (text: string) => {
      if (text !== activeTag) dispatch(setCurrentTag(text));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [activeTag],
  );

  return (
    <>
      <Flex direction="column" rowGap={33} align="start" marginTop={60}>
        <Typography variant="headline4_bold">Tags</Typography>
        <Flex columnGap={10} rowGap={10} flexWrap>
          {tagList.map(({ id, text }) => (
            <Tag
              key={id}
              active={text === activeTag}
              clickCallback={handleTagClick}
            >
              {text}
            </Tag>
          ))}
        </Flex>
      </Flex>
    </>
  );
};

export default TagSection;

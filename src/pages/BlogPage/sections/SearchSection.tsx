import ButtonSimple from "components/controls/ButtonSimple";
import TextInput from "components/controls/TextInput";
import Flex from "components/elements/Flex";
import { ButtonWrapper } from "./styled";

const SearchSection = () => {
  return (
    <Flex>
      <TextInput type="simple" placeholder="Search" bordered />
      <ButtonWrapper>
        <ButtonSimple height={54}>Search</ButtonSimple>
      </ButtonWrapper>
    </Flex>
  );
};

export default SearchSection;

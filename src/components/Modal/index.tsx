import Icon from "components/Icon";
import { ICON_URLS } from "constants/iconPaths";
import { IconWrapper, UnderLayer, ModalWrapper, Wrapper } from "./styled";
import { ModalProps } from "./types";

const Modal = ({ width, height, closeCallback, children }: ModalProps) => {
  return (
    <Wrapper>
      <UnderLayer onClick={closeCallback} />
      <ModalWrapper width={width} height={height}>
        {children}
        <IconWrapper onClick={closeCallback}>
          <Icon url={ICON_URLS.Dismiss} width={30} height={30} color="black" />
        </IconWrapper>
      </ModalWrapper>
    </Wrapper>
  );
};

export default Modal;

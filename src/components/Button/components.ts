import Icon from "components/Icon/Icon";
import styled from "styled-components";

type PropsSquareButton = {
  size: {
    width: number;
    height: number;
  };
  filled: boolean;
  disabled: boolean;
};

type PropSquareButtonIconWrapper = {
  width: number;
  height: number;
};

type PropsStandardIcon = {
  className: string;
  url: string;
  width: number;
  height: number;
  color?: string;
};

const BG_COLOR_FILL = "#185CFF";
const BG_COLOR_FILL_HOVERED = "#467DFF";
const BG_COLOR_FILL_PRESSED = "#185CFF";
const BG_COLOR_FILL_DISABLED = "#9497A1";
const COLOR_FILL = "#ffffff";
const COLOR_FILL_HOVERED = "#ffffff";
const COLOR_FILL_PRESSED = "#ffffff";
const COLOR_FILL_DISABLED = "#ffffff";

const BG_COLOR_NO_FILL = "#ffffff";
const BG_COLOR_NO_FILL_HOVERED = "#ffffff";
const BG_COLOR_NO_FILL_PRESSED = "#ffffff";
const BG_COLOR_NO_FILL_DISABLED = "#ffffff";
const COLOR_NO_FILL = "#292D33";
const COLOR_NO_FILL_HOVERED = "#185CFF";
const COLOR_NO_FILL_PRESSED = "#185CFF";
const COLOR_NO_FILL_DISABLED = "#9497A1";

export const SquareButton = styled.button<PropsSquareButton>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  min-width: ${({ size }) => size.width}px;
  height: ${({ size }) => size.height}px;

  border-radius: ${({ theme }) => theme.radiuses[0]}px;
  color: ${({ filled, disabled }) => {
    if (disabled && filled) {
      return COLOR_FILL_DISABLED;
    }
    if (disabled && !filled) {
      return COLOR_NO_FILL_DISABLED;
    }
    return filled ? COLOR_FILL : COLOR_NO_FILL;
  }};
  background-color: ${({ filled, disabled }) => {
    if (disabled && filled) {
      return BG_COLOR_FILL_DISABLED;
    }
    if (disabled && !filled) {
      return BG_COLOR_NO_FILL_DISABLED;
    }
    return filled ? BG_COLOR_FILL : BG_COLOR_NO_FILL;
  }};

  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  & .icon {
    background-color: ${({ filled, disabled }) => {
      if (disabled && filled) {
        return COLOR_FILL_DISABLED;
      }
      if (disabled && !filled) {
        return COLOR_NO_FILL_DISABLED;
      }
      return filled ? COLOR_FILL : COLOR_NO_FILL;
    }};
  }

  &:hover .icon {
    background-color: ${({ filled, disabled }) => {
      if (disabled && filled) {
        return COLOR_FILL_DISABLED;
      }
      if (disabled && !filled) {
        return COLOR_NO_FILL_DISABLED;
      }
      return filled ? COLOR_FILL_HOVERED : COLOR_NO_FILL_HOVERED;
    }};
  }

  &:active .icon {
    background-color: ${({ filled, disabled }) => {
      if (disabled && filled) {
        return COLOR_FILL_DISABLED;
      }
      if (disabled && !filled) {
        return COLOR_NO_FILL_DISABLED;
      }
      return filled ? COLOR_FILL_PRESSED : COLOR_NO_FILL_PRESSED;
    }};
  }

  &:hover {
    color: ${({ filled, disabled }) => {
      if (disabled && filled) {
        return COLOR_FILL_DISABLED;
      }
      if (disabled && !filled) {
        return COLOR_NO_FILL_DISABLED;
      }
      return filled ? COLOR_FILL_HOVERED : COLOR_NO_FILL_HOVERED;
    }};
    background-color: ${({ filled, disabled }) => {
      if (disabled && filled) {
        return BG_COLOR_FILL_DISABLED;
      }
      if (disabled && !filled) {
        return BG_COLOR_NO_FILL_DISABLED;
      }
      return filled ? BG_COLOR_FILL_HOVERED : BG_COLOR_NO_FILL_HOVERED;
    }};
  }

  &:active {
    color: ${({ filled, disabled }) => {
      if (disabled && filled) {
        return COLOR_FILL_DISABLED;
      }
      if (disabled && !filled) {
        return COLOR_NO_FILL_DISABLED;
      }
      return filled ? COLOR_FILL_PRESSED : COLOR_NO_FILL_PRESSED;
    }};
    background-color: ${({ filled, disabled }) => {
      if (disabled && filled) {
        return BG_COLOR_FILL_DISABLED;
      }
      if (disabled && !filled) {
        return BG_COLOR_NO_FILL_DISABLED;
      }
      return filled ? BG_COLOR_FILL_PRESSED : BG_COLOR_NO_FILL_PRESSED;
    }};
  }
`;

export const SquareButtonInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SquareButtonIconWrapper = styled.div<PropSquareButtonIconWrapper>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin-right: 10px;
`;

export const SquareButtonIcon = styled(Icon)<PropsStandardIcon>``;

export const RoundButton = styled.button``;

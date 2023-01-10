import styled from "styled-components";

import { LOADER_HEIGHT, LOADER_WIDTH } from "constants/common";

export const Wrapper = styled.div`
  position: fixed;
  top: calc(50% - ${LOADER_WIDTH / 2}px);
  left: calc(50% - ${LOADER_HEIGHT / 2}px);
`;

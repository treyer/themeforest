import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.fontColorMain};
`;

export default Button;

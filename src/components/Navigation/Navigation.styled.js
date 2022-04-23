import styled from "styled-components";
import { breakpoints } from "../../styles/variables.js";
import { NavLink } from "react-router-dom";
const { main } = breakpoints;

const NavigationStyled = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const NavItem = styled.li`
  margin-right: 25px;
`;

const LinkStyled = styled(NavLink)`
  max-width: ${main.mobile}px;
  display: inline-flex;
  align-items: center;
  font-size: 25px;
  color: #ff6b08;

  @media screen and (min-width: ${main.tablet}px) {
    max-width: ${main.tablet}px;
  }

  @media screen and (min-width: ${main.desktop}px) {
    font-size: 36px;
  }
`;

export { NavigationStyled, NavList, NavItem, LinkStyled };

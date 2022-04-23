import {
  NavigationStyled,
  NavList,
  NavItem,
  LinkStyled,
} from "./Navigation.styled.js";

const Navigation = () => {
  return (
    <NavigationStyled>
      <NavList>
        <NavItem>
          <LinkStyled to="/">Create Bank</LinkStyled>
        </NavItem>
        <NavItem>
          <LinkStyled to="/calculator">Calculator</LinkStyled>
        </NavItem>
      </NavList>
    </NavigationStyled>
  );
};

export default Navigation;

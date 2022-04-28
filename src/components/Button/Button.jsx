import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled.js";

const Button = ({ children = null, onClick = () => null, ...allyProps }) => (
  <ButtonStyled onClick={onClick} {...allyProps}>
    {children}
  </ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  "aria-label": PropTypes.string.isRequired,
};

export default Button;

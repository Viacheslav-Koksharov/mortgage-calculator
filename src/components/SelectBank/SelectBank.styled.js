import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: 500;
  color: #ffffff;
`;

const FormStyle = styled.div`
  text-align: center;
`;

const LabelStyle = styled.label`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 2.5;
`;

const BankName = styled.select`
  display: block;
  margin: 0px auto 10px;
  padding: 10px;
  width: 200px;
  font-size: 16px;
  font-weight: 400;
  line-height: 2.5;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
`;

const ListInfo = styled.ul`
  margin: 0 auto 15px;
  width: 200px;
  text-align: start;
`;

const ItemInfo = styled.li``;

export { Title, FormStyle, LabelStyle, BankName, ListInfo, ItemInfo };

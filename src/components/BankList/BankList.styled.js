import styled from "styled-components";

const FormStyle = styled.div`
  margin: 0;
  padding: 0;
`;

const ListSavedBank = styled.ul``;

const ItemSavedBank = styled.li`
  display: flex;
  margin: 0 0 10px 0;
  padding: 0 0 5px 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid grey;
`;
const ItemName = styled.p``;

const BtnSection = styled.div`
  display: flex;
`;

export { FormStyle, ListSavedBank, ItemSavedBank, ItemName, BtnSection };

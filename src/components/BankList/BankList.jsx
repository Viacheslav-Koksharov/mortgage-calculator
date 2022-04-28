import { useContext } from "react";
import { calcContext } from "../../context/CalcContextProvider.js";
import Button from "../Button";
import {
  FormStyle,
  ListSavedBank,
  ItemSavedBank,
  ItemName,
  BtnSection,
} from "./BankList.styled.js";

const BankList = () => {
  const { banks, setBanks, setIsEdit } = useContext(calcContext);

  const editBank = (id) => {
    const editItem = [...banks].filter((bank) => bank.id === id);
    setIsEdit(editItem);
  };

  const deleteBank = (id) => {
    const deleteItem = [...banks].filter((bank) => bank.id !== id);
    setBanks(deleteItem);
  };

  return (
    <FormStyle>
      {banks && (
        <ListSavedBank>
          {banks.map(({ id, name }) => (
            <ItemSavedBank key={id}>
              <ItemName>{name}</ItemName>
              <BtnSection>
                <Button
                  type="submit"
                  onClick={() => editBank(id)}
                  aria-label="Edit bank"
                >
                  Edit
                </Button>
                <Button
                  type="submit"
                  onClick={() => deleteBank(id)}
                  aria-label="Delete bank"
                >
                  Del
                </Button>
              </BtnSection>
            </ItemSavedBank>
          ))}
        </ListSavedBank>
      )}
    </FormStyle>
  );
};

export default BankList;

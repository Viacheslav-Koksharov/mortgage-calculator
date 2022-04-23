import { useContext } from "react";
import { calcContext } from "../../context/CalcContextProvider.js";
import {
  Title,
  FormStyle,
  LabelStyle,
  BankName,
  ListInfo,
  ItemInfo,
} from "./SelectBank.styled.js";

const SelectBank = () => {
  const savedBanks = JSON.parse(localStorage.getItem("banks"));
  const { selectedBanks, setSelectedBanks } = useContext(calcContext);

  const renderDetails = (e) => {
    setSelectedBanks(e.target.value);
  };

  const bankInfo = savedBanks.find((item) => item.name === selectedBanks);

  return (
    <>
      <Title>Mortgage calculator</Title>
      <FormStyle>
        <LabelStyle>
          Choose a Bank:
          <BankName onChange={renderDetails}>
            <option>choose a bank...</option>
            {savedBanks.map(({ id, name }) => (
              <option value={name} key={id}>
                {name}
              </option>
            ))}
          </BankName>
        </LabelStyle>
        {selectedBanks && (
          <ListInfo>
            <ItemInfo>Interest rate: {bankInfo.rate}%</ItemInfo>
            <ItemInfo>Maximum loan: $ {bankInfo.loan}</ItemInfo>
            <ItemInfo>Minimum down payment: $ {bankInfo.payment}</ItemInfo>
            <ItemInfo>Loan term: {bankInfo.term} years</ItemInfo>
          </ListInfo>
        )}
      </FormStyle>
    </>
  );
};

export default SelectBank;

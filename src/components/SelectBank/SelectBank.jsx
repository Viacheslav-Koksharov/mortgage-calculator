import { useState, useEffect, useContext } from "react";
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
  const { banks, selectedBanks, setSelectedBanks } = useContext(calcContext);
  const [bankInfo, setBankInfo] = useState("");

  useEffect(() => {
    setSelectedBanks(bankInfo);
  }, [bankInfo, setSelectedBanks]);

  const renderDetails = (e) => {
    const info = banks.find((item) => item.name === e.target.value);
    setBankInfo(info);
  };

  return (
    <>
      <Title>Mortgage calculator</Title>
      <FormStyle>
        <LabelStyle>
          Choose a Bank:
          <BankName onChange={renderDetails}>
            <option>choose a bank...</option>
            {banks.map(({ id, name }) => (
              <option value={name} key={id}>
                {name}
              </option>
            ))}
          </BankName>
        </LabelStyle>
        {selectedBanks && (
          <ListInfo>
            <ItemInfo>Interest rate: {selectedBanks.rate}%</ItemInfo>
            <ItemInfo>Maximum loan: $ {selectedBanks.loan}</ItemInfo>
            <ItemInfo>Minimum down payment: $ {selectedBanks.payment}</ItemInfo>
            <ItemInfo>Loan term: {selectedBanks.term} years</ItemInfo>
          </ListInfo>
        )}
      </FormStyle>
    </>
  );
};

export default SelectBank;

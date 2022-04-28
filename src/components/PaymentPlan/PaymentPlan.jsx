import { useState, useContext } from "react";
import { calcContext } from "../../context/CalcContextProvider.js";
import {
  FormStyle,
  LabelStyle,
  InitialLoan,
  DownPayment,
  BtnCalculate,
  RusultField,
} from "./PaymentPlan.styled.js";

const PaymentPlan = () => {
  const { banks, selectedBanks } = useContext(calcContext);
  const [initialLoan, setInitialLoan] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [result, setResult] = useState(null);

  const bankInfo = banks.find((item) => {
    return selectedBanks ? item.name === selectedBanks.name : null;
  });

  const handleChangeForm = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "initialLoan":
        setInitialLoan(value);
        break;
      case "downPayment":
        setDownPayment(value);
        break;
      default:
        return;
    }
  };

  const calcSubmitForm = (e) => {
    e.preventDefault();
    if (!selectedBanks) {
      alert("At first create a bank, then select it!");
      return;
    }
    if (selectedBanks.name === bankInfo.name) {
      const i = bankInfo.rate / 12 / 100;
      const period = bankInfo.term * 12;
      const koef =
        (i * Math.pow(1 + i, period)) / (Math.pow(1 + i, period) - 1);
      const p = initialLoan - downPayment;
      const result = p * koef;
      setResult(result.toFixed(2));
    }
  };

  return (
    <>
      <FormStyle onSubmit={calcSubmitForm}>
        <LabelStyle htmlFor="initialLoan">Initial Loan, $</LabelStyle>
        <InitialLoan
          type="number"
          name="initialLoan"
          min="0"
          value={initialLoan}
          autoComplete="off"
          onChange={handleChangeForm}
          id="initialLoan"
        />
        <LabelStyle htmlFor="downPayment">Down Payment, $</LabelStyle>
        <DownPayment
          type="number"
          name="downPayment"
          min="0"
          value={downPayment}
          autoComplete="off"
          onChange={handleChangeForm}
          id="downPayment"
        />
        <BtnCalculate type="submit" aria-label="Calculate">
          Calculate
        </BtnCalculate>
      </FormStyle>
      <RusultField>
        Monthly mortgage payment is:$ {result ? result : null}
      </RusultField>
    </>
  );
};

export default PaymentPlan;

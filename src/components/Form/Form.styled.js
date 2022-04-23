import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: 500;
  color: #ffffff;
`;

const FormStyle = styled.form`
  text-align: center;
`;

const LabelStyle = styled.label`
  margin: 0 auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 2.5;
`;

const BankName = styled.input`
  display: block;
  margin: 0px auto 10px;
  padding: 10px;
  width: 100 %;
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 2.5;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
`;

const InterestRate = styled.input`
  display: block;
  margin: 0px auto 15px;
  padding: 10px;
  width: 100 %;
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 2.5;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
`;

const MaximumLoan = styled.input`
  display: block;
  margin: 0px auto 15px;
  padding: 10px;
  width: 100 %;
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 2.5;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
`;

const MinimumDownPayment = styled.input`
  display: block;
  margin: 0px auto 15px;
  padding: 10px;
  width: 100 %;
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 2.5;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
`;

const LoanTerm = styled.input`
  display: block;
  margin: 0px auto 15px;
  padding: 10px;
  width: 100 %;
  height: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 2.5;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
`;

const BtnSubmit = styled.button`
  display: flex;
  margin: 0 auto;
  padding: 5px 10px;
  width: 100 %;
  height: 35px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 2.5;
  background-color: green;
  border: none;
  border-radius: 7px;
`;

export {
  Title,
  FormStyle,
  LabelStyle,
  BankName,
  InterestRate,
  MaximumLoan,
  MinimumDownPayment,
  LoanTerm,
  BtnSubmit,
};

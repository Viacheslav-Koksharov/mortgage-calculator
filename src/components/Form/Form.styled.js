import styled from "styled-components";

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: 500;
  color: #ffffff;
`;

const FormStyle = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 20px 0;
  justify-content: center;
  align-items: center;
`;

const LabelStyle = styled.label`
  margin: 0 auto;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
`;

const BankName = styled.input`
  display: block;
  margin: 0px auto 10px;
  padding: 5px;
  width: 220px;
  height: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
`;

const InterestRate = styled.input`
  display: block;
  margin: 0px auto 10px;
  padding: 5px;
  width: 100px;
  height: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
`;

const MaximumLoan = styled.input`
  display: block;
  margin: 0px auto 10px;
  padding: 5px;
  width: 220px;
  height: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
`;

const MinimumDownPayment = styled.input`
  display: block;
  margin: 0px auto 10px;
  padding: 5px;
  width: 220px;
  height: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
`;

const LoanTerm = styled.input`
  display: block;
  margin: 0px auto 10px;
  padding: 5px;
  width: 100px;
  height: 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  border: solid 1px rgba(40, 42, 43, 0.27);
  border-radius: 7px;
  box-shadow: 0px 0px 5px 5px rgba(40, 42, 43, 0.1) inset;
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
};

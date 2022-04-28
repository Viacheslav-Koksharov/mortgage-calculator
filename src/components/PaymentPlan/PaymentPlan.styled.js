import styled from "styled-components";

const FormStyle = styled.form`
  text-align: center;
`;

const LabelStyle = styled.label`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 2.5;
`;

const InitialLoan = styled.input`
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

const DownPayment = styled.input`
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

const BtnCalculate = styled.button`
  padding: 5px 10px;
  margin: 5px;
  min-width: 30px;
  height: 30px;
  background-color: #ff6b08;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 1px 3px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  &:hover {
    background-color: #ff6b08;
    transform: scale(1.1);
  }
`;

const RusultField = styled.p`
  margin: 0;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 2.5;
`;

export {
  FormStyle,
  LabelStyle,
  InitialLoan,
  DownPayment,
  BtnCalculate,
  RusultField,
};

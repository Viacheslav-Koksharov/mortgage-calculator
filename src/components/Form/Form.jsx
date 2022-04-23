import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import {
  Title,
  FormStyle,
  LabelStyle,
  BankName,
  InterestRate,
  MaximumLoan,
  MinimumDownPayment,
  LoanTerm,
  BtnSubmit,
} from "./Form.styled.js";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [rate, setRate] = useState("");
  const [loan, setLoan] = useState("");
  const [payment, setPayment] = useState("");
  const [term, setTerm] = useState("");

  const handleChangeForm = (e) => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "rate":
        setRate(value);
        break;
      case "loan":
        setLoan(value);
        break;
      case "payment":
        setPayment(value);
        break;
      case "term":
        setTerm(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      rate,
      loan,
      payment,
      term,
    });
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setRate("");
    setLoan("");
    setPayment("");
    setTerm("");
  };

  return (
    <>
      <Title>Create bank</Title>
      <FormStyle onSubmit={handleSubmitForm}>
        <LabelStyle htmlFor="name">Bank Name </LabelStyle>
        <BankName
          type="text"
          name="name"
          value={name}
          autoComplete="off"
          onChange={handleChangeForm}
          id="name"
        />

        <LabelStyle htmlFor="rate">Interest Rate, %</LabelStyle>
        <InterestRate
          type="number"
          name="rate"
          min="0"
          value={rate}
          autoComplete="off"
          onChange={handleChangeForm}
          id="rate"
        />

        <LabelStyle htmlFor="loan">Maximum Loan, $</LabelStyle>
        <MaximumLoan
          type="number"
          name="loan"
          min="0"
          value={loan}
          autoComplete="off"
          onChange={handleChangeForm}
          id="loan"
        />

        <LabelStyle htmlFor="payment">Minimum Down Payment, $</LabelStyle>
        <MinimumDownPayment
          type="number"
          name="payment"
          min="0"
          value={payment}
          autoComplete="off"
          onChange={handleChangeForm}
          id="payment"
        />

        <LabelStyle htmlFor="term">Loan Term, years</LabelStyle>
        <LoanTerm
          type="number"
          name="term"
          min="0"
          value={term}
          autoComplete="off"
          onChange={handleChangeForm}
          id="term"
        />

        <BtnSubmit type="submit" aria-label="Create bank">
          Create bank
        </BtnSubmit>
      </FormStyle>
    </>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;

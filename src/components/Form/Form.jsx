import React from "react";
import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { calcContext } from "../../context/CalcContextProvider.js";
import Button from "../Button";
import {
  Title,
  FormStyle,
  LabelStyle,
  BankName,
  InterestRate,
  MaximumLoan,
  MinimumDownPayment,
  LoanTerm,
} from "./Form.styled.js";

const Form = ({ onSubmit }) => {
  const { isEdit, setIsEdit } = useContext(calcContext);
  const [name, setName] = useState("");
  const [rate, setRate] = useState("");
  const [loan, setLoan] = useState("");
  const [payment, setPayment] = useState("");
  const [term, setTerm] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    if (isEdit) {
      setName(isEdit[0].name);
      setRate(isEdit[0].rate);
      setLoan(isEdit[0].loan);
      setPayment(isEdit[0].payment);
      setTerm(isEdit[0].term);
      setId(isEdit[0].id);
    }
    setIsEdit(null);
  }, [isEdit, setIsEdit]);

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
      id,
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
        <LabelStyle htmlFor="name">
          Bank Name
          <BankName
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            onChange={handleChangeForm}
            id="name"
          />
        </LabelStyle>

        <LabelStyle htmlFor="rate">
          Interest Rate, %
          <InterestRate
            type="number"
            name="rate"
            min="0"
            value={rate}
            autoComplete="off"
            onChange={handleChangeForm}
            id="rate"
          />
        </LabelStyle>

        <LabelStyle htmlFor="term">
          Loan Term, years
          <LoanTerm
            type="number"
            name="term"
            min="0"
            value={term}
            autoComplete="off"
            onChange={handleChangeForm}
            id="term"
          />
        </LabelStyle>

        <LabelStyle htmlFor="loan">
          Maximum Loan, $
          <MaximumLoan
            type="number"
            name="loan"
            min="0"
            value={loan}
            autoComplete="off"
            onChange={handleChangeForm}
            id="loan"
          />
        </LabelStyle>

        <LabelStyle htmlFor="payment">
          Minimum Down Payment, $
          <MinimumDownPayment
            type="number"
            name="payment"
            min="0"
            value={payment}
            autoComplete="off"
            onChange={handleChangeForm}
            id="payment"
          />
        </LabelStyle>
        <Button type="submit" aria-label="Create bank">
          Create bank
        </Button>
      </FormStyle>
    </>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;

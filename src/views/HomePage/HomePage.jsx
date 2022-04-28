import { useContext } from "react";
import shortid from "shortid";
import { calcContext } from "../../context/CalcContextProvider.js";
import Navigation from "../../components/Navigation";
import Form from "../../components/Form";
import BankList from "../../components/BankList";

const HomePage = () => {
  const { banks, setBanks } = useContext(calcContext);

  const handleSubmitForm = ({ id, name, rate, loan, payment, term }) => {
    const newBank = {
      id: shortid.generate(),
      name,
      rate,
      loan,
      payment,
      term,
    };

    if (banks.length > 0) {
      const validateBank = banks.map(({ id }) => id).includes(id);

      if (!validateBank) {
        setBanks((prevState) => [newBank, ...prevState]);
      } else {
        const newBankList = banks.map((bank) => {
          if (bank.id === id) {
            if (bank.name !== name) {
              alert(`You can't change the bank name`);
              return bank;
            } else {
              bank.rate = rate;
              bank.loan = loan;
              bank.payment = payment;
              bank.term = term;
              return bank;
            }
          } else {
            return bank;
          }
        });
        setBanks(newBankList);
      }
    } else {
      setBanks([newBank]);
    }
  };

  return (
    <>
      <Navigation />
      <Form onSubmit={handleSubmitForm} />
      <BankList />
    </>
  );
};

export default HomePage;

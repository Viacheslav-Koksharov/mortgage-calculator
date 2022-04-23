import { useContext } from "react";
import shortid from "shortid";
import { calcContext } from "../../context/CalcContextProvider.js";
import Navigation from "../../components/Navigation";
import Form from "../../components/Form";

const HomePage = () => {
  const { banks, setBanks } = useContext(calcContext);

  const handleSubmitForm = ({ name, rate, loan, payment, term }) => {
    const newBank = {
      id: shortid.generate(),
      name,
      rate,
      loan,
      payment,
      term,
    };

    if (banks.length > 0) {
      const validateBank = banks.map(({ name }) => name).includes(name);

      if (validateBank) {
        alert(`${newBank.name} is already exist`);
        return;
      } else {
        setBanks((prevState) => [newBank, ...prevState]);
      }
    } else {
      setBanks([newBank]);
    }
  };

  return (
    <>
      <Navigation />
      <Form onSubmit={handleSubmitForm} />
    </>
  );
};

export default HomePage;

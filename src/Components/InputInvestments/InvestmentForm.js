import { useState } from "react";
import ResetButton from "../UI/ResetButton";
import SubmitButton from "../UI/SubmitButton";
import styles from "./InvestmentForm.module.css";

const InitialValues = {
  current_savings: "1000",
  yearly_contribution: "1000",
  expected_return: "1000",
  duration: "5",
};

const InvestmentForm = (props) => {
  {
    /* Multiple States
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlySavings, setYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [investmentDuration, setInvestmentDuration] = useState(""); */
  }
  {
    /* Multiple onChangeHandlers

-----------For Indivisual Feilds------------

  const onChangeCurrentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  };

  const onChangeYearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  };

  const onChangeExpectedInterestHandler = (event) => {
    setExpectedInterest(event.target.value);
  };

  const onChangeInvestmentDurationHandler = (event) => {
    setInvestmentDuration(event.target.value);
  };

 
*/
  }

  /* Single onChanuseState for all feilds */

  const [userInput, setUserInput] = useState(InitialValues);

  /* Single onChange Handler for all feilds */

  const onChangeHandler = (name, value) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [name]: +value,
      };
    });
  };

  const resetHandler = () => {
    setUserInput(InitialValues);
  };
  const submitHandler = (event) => {
    event.preventDefault(); //to avoid browser default behaviour, which is reloading page
    props.InvestmentCalculations(userInput);
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={`${styles["input-group"]}`}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(event) => {
              onChangeHandler("current_savings", event.target.value);
            }}
            value={userInput["current_savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(event) => {
              onChangeHandler("yearly_contribution", event.target.value);
            }}
            value={userInput["yearly_contribution"]}
          />
        </p>
      </div>
      <div className={`${styles["input-group"]}`}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(event) => {
              onChangeHandler("expected_return", event.target.value);
            }}
            value={userInput["expected_return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(event) => {
              onChangeHandler("duration", event.target.value);
            }}
            value={userInput["duration"]}
          />
        </p>
      </div>

      <p className={styles.actions}>
        <ResetButton type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </ResetButton>
        <SubmitButton type="submit" className="button">
          Calculate
        </SubmitButton>
      </p>
    </form>
  );
};

export default InvestmentForm;

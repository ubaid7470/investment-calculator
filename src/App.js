import { useState } from "react";
import ResultTable from "./Components/ComputedDetails/ResultTable";
import Header from "./Components/Header/Header";
import InvestmentForm from "./Components/InputInvestments/InvestmentForm";
import CustomModal from "./Components/UI/Modal";

function App() {
  const [calculatedData, setCalculatedData] = useState("");
  const [checkAvailablity, setCheckAvailablity] = useState(false);
  const [initialInvestment, setInitialInvestment] = useState("");

  const calculateHandler = (userInput) => {
    // per-year results
    const yearlyData = [];
    let currentSavings = +userInput["current_savings"];
    const yearlyContribution = +userInput["yearly_contribution"];
    const expectedReturn = +userInput["expected_return"] / 100;
    const duration = +userInput["duration"];
    setInitialInvestment(currentSavings);
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setCalculatedData(yearlyData);
    setCheckAvailablity(true);
  };

  return (
    <div>
      <CustomModal />
      <Header />
      <InvestmentForm InvestmentCalculations={calculateHandler} />
      {checkAvailablity === true ? (
        <ResultTable
          yearlydata={calculatedData}
          initialInvestment={initialInvestment}
        />
      ) : (
        <p style={{ textAlign: "center" }}>
          Add Values and Press Calculate to Generate Result.
        </p>
      )}
    </div>
  );
}

export default App;

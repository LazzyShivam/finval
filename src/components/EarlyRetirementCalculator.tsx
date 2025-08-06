import React, { useState } from 'react';

const EarlyRetirementCalculator: React.FC = () => {
  const [currentSavings, setCurrentSavings] = useState<number>(50000);
  const [annualSavings, setAnnualSavings] = useState<number>(10000);
  const [annualExpenses, setAnnualExpenses] = useState<number>(30000);
  const [annualReturnRate, setAnnualReturnRate] = useState<number>(7);
  const [retirementAge, setRetirementAge] = useState<number>(0);

  const calculateRetirementAge = () => {
    let savings = currentSavings;
    let years = 0;
    const monthlyReturnRate = annualReturnRate / 100 / 12;
    const monthlyExpenses = annualExpenses / 12;

    while (savings * monthlyReturnRate < monthlyExpenses * 25 && years < 100) { // Rule of thumb: 25x annual expenses
      savings = savings * (1 + (annualReturnRate / 100)) + annualSavings;
      years++;
    }
    setRetirementAge(years);
  };

  return (
    <div className="calculator-container">
      <h2>Early Retirement Calculator</h2>
      <div className="input-columns">
        <div className="input-group">
          <label>Current Savings (₹):</label>
          <input
            type="number"
            value={currentSavings}
            onChange={(e) => setCurrentSavings(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Annual Savings (₹):</label>
          <input
            type="number"
            value={annualSavings}
            onChange={(e) => setAnnualSavings(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Annual Expenses (₹):</label>
          <input
            type="number"
            value={annualExpenses}
            onChange={(e) => setAnnualExpenses(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Annual Return Rate (%):</label>
          <input
            type="number"
            value={annualReturnRate}
            onChange={(e) => setAnnualReturnRate(Number(e.target.value))}
          />
        </div>
      </div>
      <button onClick={calculateRetirementAge}>Calculate</button>
      {retirementAge > 0 && (
        <div className="result">
          <h3>Years to Retirement: {retirementAge}</h3>
        </div>
      )}
    </div>
  );
};

export default EarlyRetirementCalculator;
import React, { useState } from 'react';

const SWPCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(1000000);
  const [withdrawalAmount, setWithdrawalAmount] = useState<number>(10000);
  const [annualReturnRate, setAnnualReturnRate] = useState<number>(7);
  const [years, setYears] = useState<number>(10);
  const [inflationRate, setInflationRate] = useState<number>(3); // New state for inflation
  const [finalValue, setFinalValue] = useState<number>(0);
  const [totalWithdrawal, setTotalWithdrawal] = useState<number>(0);

  const calculateSWP = () => {
    let currentValue = initialInvestment;
    let totalWithdrawn = 0;
    const monthlyReturnRate = annualReturnRate / 100 / 12;
    const monthlyInflationRate = inflationRate / 100 / 12; // Monthly inflation rate
    let currentMonthlyWithdrawal = withdrawalAmount;
    const numberOfMonths = years * 12;

    for (let i = 0; i < numberOfMonths; i++) {
      currentValue = currentValue * (1 + monthlyReturnRate) - currentMonthlyWithdrawal;
      totalWithdrawn += currentMonthlyWithdrawal;
      currentMonthlyWithdrawal *= (1 + monthlyInflationRate); // Adjust withdrawal for inflation
    }

    setFinalValue(currentValue);
    setTotalWithdrawal(totalWithdrawn);
  };

  return (
    <div className="calculator-container">
      <h2>SWP Calculator</h2>
      <div className="input-columns">
        <div className="input-group">
          <label>Initial Investment (₹):</label>
          <input
            type="number"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Monthly Withdrawal (₹):</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
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
        <div className="input-group">
          <label>Years:</label>
          <input
            type="number"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Inflation Rate (%):</label>
          <input
            type="number"
            value={inflationRate}
            onChange={(e) => setInflationRate(Number(e.target.value))}
          />
        </div>
      </div>
      <button onClick={calculateSWP}>Calculate</button>
      {finalValue > 0 && ( // Display only if calculated
        <div className="result">
          <h3>Final Value: ₹{finalValue.toFixed(2)}</h3>
          <h3>Total Withdrawal: ₹{totalWithdrawal.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default SWPCalculator;
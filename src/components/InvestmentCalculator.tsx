import React, { useState } from 'react';

const InvestmentCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(100);
  const [years, setYears] = useState<number>(10);
  const [annualReturnRate, setAnnualReturnRate] = useState<number>(7);
  const [futureValue, setFutureValue] = useState<number>(0);

  const calculateFutureValue = () => {
    let totalInvestment = initialInvestment;
    const monthlyReturnRate = annualReturnRate / 100 / 12;
    const numberOfMonths = years * 12;

    for (let i = 0; i < numberOfMonths; i++) {
      totalInvestment *= (1 + monthlyReturnRate);
      totalInvestment += monthlyContribution;
    }
    setFutureValue(totalInvestment);
  };

  return (
    <div className="calculator-container">
      <h2>Investment Calculator</h2>
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
          <label>Monthly Contribution (₹):</label>
          <input
            type="number"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
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
          <label>Annual Return Rate (%):</label>
          <input
            type="number"
            value={annualReturnRate}
            onChange={(e) => setAnnualReturnRate(Number(e.target.value))}
          />
        </div>
      </div>
      <button onClick={calculateFutureValue}>Calculate</button>
      {futureValue > 0 && (
        <div className="result">
          <h3>Future Value: ₹{futureValue.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;
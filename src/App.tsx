import { useState } from 'react';
import InvestmentCalculator from './components/InvestmentCalculator';
import EarlyRetirementCalculator from './components/EarlyRetirementCalculator';
import LoanCalculator from './components/LoanCalculator';
// import AIChatSupport from './components/AIChatSupport';
import SWPCalculator from './components/SWPCalculator';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('investment');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'investment':
        return <InvestmentCalculator />;
      case 'retirement':
        return <EarlyRetirementCalculator />;
      case 'loan':
        return <LoanCalculator />;
      case 'swp':
        return <SWPCalculator />;
      case 'chat':
        return <div className="coming-soon">AI Chat Support - Coming Soon!</div>;
      default:
        return <InvestmentCalculator />;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>FinValuator</h1>
      </header>
      <div className="main-layout">
        <nav className="sidebar">
          <button onClick={() => setActiveComponent('investment')}>Investment Calculator</button>
          <button onClick={() => setActiveComponent('retirement')}>Early Retirement Calculator</button>
          <button onClick={() => setActiveComponent('loan')}>Loan Calculator</button>
          <button onClick={() => setActiveComponent('swp')}>SWP Calculator</button>

        </nav>

        <div className="content">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;

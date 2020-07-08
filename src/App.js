import React, { useState } from 'react';
import './Styles.css';
import TitleComponent from './TitleComponent';
import BalanceComponent from './BalanceComponent';
import HistoryComponent from './HistoryComponent';
import TransactionComponent from './TransactionComponent';
import TransactionContext from './TransactionContext';
function App() {
  let Transactions = [

  ]
  let TransactionState = useState(Transactions);
  return (
    <TransactionContext.Provider value={TransactionState}>
      <div className="App">
        <TitleComponent />
        <BalanceComponent />
        <HistoryComponent />
        <TransactionComponent />
        <hr />
        <div className="CenterText">
          &#169; Summar Raja
      </div>
      </div>
    </TransactionContext.Provider>
  );
}
export default App;
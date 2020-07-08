import React, { useContext } from 'react';
import './Styles.css';
import TransactionContext from './TransactionContext';
import TransactionComponent from './TransactionComponent';
const deleteTransaction= (index,transactions,setTransactions)=>{
setTransactions(transactions.filter(element=>transactions.indexOf(element)!=index));   
}
const HistoryComponent = () => {

    const transactions = useContext(TransactionContext);
    return (
        <div>
            <h3>History</h3>
            <hr />
            <ul className="List">
                {transactions[0].map(
                    (element, i) => {
                        return (
                            <>
                                <li key={i}>
                                    <span ><strong>{element.desc}</strong></span>
                                    <span ><strong>${element.cost}</strong> <button id="delete" onClick={()=>deleteTransaction(i,transactions[0],transactions[1])}>X</button></span>
                                </li>
                            </>
                        )
                    }
                )}
            </ul>

        </div>
    )
}
export default HistoryComponent;
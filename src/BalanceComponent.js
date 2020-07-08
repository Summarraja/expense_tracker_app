import React, { useContext } from 'react';
import './Styles.css';
import TransactionContext from './TransactionContext';

const TotalBalance = (Array) => {
    let balance = 0;
    Array.forEach(element => {
        balance += element.cost;
    });
    return balance;
}
const TotalIncome = (Array) => {
    let income = 0;
    Array.forEach(element => {
        if (element.cost > 0)
            income += element.cost;
    });
    return income;
}
const BalanceComponent = () => {
    const Transactions = useContext(TransactionContext);
    return (
        <div className="Balance">
            <h4 >YOUR BALANCE</h4>
            <h1 >${TotalBalance(Transactions[0])}</h1>
            <div >
                <h3>INCOME <br />$+{TotalIncome(Transactions[0])}</h3>
                <h3>EXPENSE<br />${TotalBalance(Transactions[0])-TotalIncome(Transactions[0])}</h3>
            </div>
        </div>
    )
}
export default BalanceComponent;
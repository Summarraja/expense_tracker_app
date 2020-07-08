import React, { useState, useContext } from 'react';
import './Styles.css';
import TransactionContext from './TransactionContext';
const TransactionComponent = () => {
    let [cost, setCost] = useState("");
    let [desc, setDesc] = useState("");
    let Transactions = useContext(TransactionContext);

    return (
        <div>
            <h3>Add New Transaction</h3>
            <hr />
            <form onSubmit={(event) => {
                Transactions[1]([{
                    cost,
                    desc
                },...Transactions[0]]);
                setCost("");
                setDesc("");
                event.preventDefault()
            }}>
                <label><strong>Description</strong>
                </label>
                <input type="Text" value={desc} maxLength={30} onChange={(event) => {
                    setDesc(event.target.value);
                }} required></input>
                <label><strong>Amount </strong>
                 [ Positive=Income |
                 Negative=Expense ]
                </label>
                <input type="Number" value={cost} onChange={(event) => {
                    setCost(Number(event.target.value));
                }} required></input>
                <button type="submit">Add Transaction</button>
            </form>
        </div>
    );
};

export default TransactionComponent;
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transactions = ({ transaction }) => {
  // const { transactions } = useContext(GlobalContext);
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}₹{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className='delete-btn'
      >
        x
      </button>
    </li>
  );
};
// -0176

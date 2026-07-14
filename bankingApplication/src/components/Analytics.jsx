import { useContext } from "react"
import TransactionContext from "../context/TransactionContext"
export default function Analytics(){

    const transactions = useContext(TransactionContext);
    const totalDebits = transactions.filter(a=>a.type === 'debit').reduce((a,b)=>a+b.amount,0);
    const totalCredits = transactions.filter(a=>a.type === 'credit').reduce((a,b)=>a+b.amount,0);
    const highestExpense = transactions.filter(a=>a.type === 'debit').reduce((a,b)=>Math.max(a,b.amount),0);
    const largestTransaction = transactions.reduce((a,b)=>Math.max(a,b.amount),0);

    return(
        <div>
            <h2>Spending Analytics</h2>
            <p>Total Credits: {totalCredits}</p>
            <p>Total Debits: {totalDebits}</p>
            <p>Highest Expense: {highestExpense}</p>
            <p>Largest Transaction: {largestTransaction}</p>
        </div>
    )
}
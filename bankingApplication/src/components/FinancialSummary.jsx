import SmallCard from "./SmallCard";
import "../styles/FinancialSummary.css"
import { useContext } from "react";
import TransactionContext from "../context/TransactionContext";

export default function FinancialSummary(){

    const {accounts,transactions} = useContext(TransactionContext);

    const income = transactions.filter((transaction)=>transaction.type === 'credit').reduce((a,b)=>a+b.amount,0);
    const expenses = transactions.filter((transaction)=>transaction.type === 'debit').reduce((a,b)=>a+b.amount,0);
    const currentBalance = accounts.reduce((a,b)=>a+b.balance,0);
    return(
            <div className="financialSummary">
                <SmallCard attribute = "Balance" amount = {currentBalance} />
                <SmallCard attribute = "Income" amount = {income} />
                <SmallCard attribute = "Expenses" amount = {expenses} />
            </div>

    )
}
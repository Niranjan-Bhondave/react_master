import { useContext } from "react";
import TransactionContext from "../context/TransactionContext.jsx";
import Analytics from "./Analytics.jsx";
import FinancialSummary from "./FinancialSummary.jsx";
import RecentTransactions from "./RecentTransactions.jsx";


export default function CustomerPortfolio(){

    const customerInformation = useContext(TransactionContext);

    const customerProfile = customerInformation.customer;
    const accounts = customerInformation.accounts;
    const transactions = customerInformation.transactions;
    const notifications = customerInformation.notifications; 

    const currentBalance = accounts.reduce((a,b)=>a+b.balance,0);
    return(
        <div>
            <h2>Welcome,{customerProfile.name}</h2>
            <TransactionContext.Provider value={transactions}>
            <FinancialSummary accounts = {accounts}/>
            <Analytics />
            <RecentTransactions />
            </TransactionContext.Provider>
        </div>
    )
}
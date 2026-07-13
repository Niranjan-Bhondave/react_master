import TransactionContext from "../context/TransactionContext.jsx";
import customerInformation from "../Data/CustomerInformation.js"
import Analytics from "./Analytics.jsx";
import FinancialSummary from "./FinancialSummary.jsx";


export default function CustomerPortfolio(){
    const customerProfile = customerInformation.customer;
    const accounts = customerInformation.accounts;
    const transactions = customerInformation.transactions;
    const notifications = customerInformation.notifications; 

    const currentBalance = accounts.reduce((a,b)=>a+b.balance,0);
    return(
        <div>
            <h2>Welcome,{customerProfile.name}</h2>
            <TransactionContext.Provider value={{accounts,transactions}}>
            <FinancialSummary />
            <Analytics />
            </TransactionContext.Provider>
        </div>
    )
}
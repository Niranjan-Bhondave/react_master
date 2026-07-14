import { useContext } from "react"
import TransactionContext from "../context/TransactionContext"
import TransactionRow from "./TransactionRow";
export default function RecentTransactions(){

    const transactions = useContext(TransactionContext);
    return (
        <div>
            <h2>Recent Transactions</h2>
            <br />
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>View</th>
                </tr>
                </thead>
                <tbody>
                {
                    transactions.map((transaction)=>{
                        return <TransactionRow transaction={transaction} key={transaction.id}/>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}
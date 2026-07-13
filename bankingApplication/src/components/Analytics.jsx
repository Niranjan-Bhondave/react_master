import { useContext } from "react"
import TransactionContext from "../context/TransactionContext"
export default function Analytics(){

    const {accounts,transactions} = useContext(TransactionContext);
    const totalDebits = transactions.filter(a=>a.type === 'debit').reduce((a,b)=>a+b.amount,0);
    const totalCredits = transactions.filter(a=>a.type === 'credit').reduce((a,b)=>a+b.amount,0);

    function getHighestExpense(){
        var ans = 0;
        transactions.forEach((t)=>{
            if(t.type === 'debit' && t.amount > ans)
                ans = t.amount;
        })

        return ans;
    }

    return(
        <div>
            <h3>Highest Expense:{getHighestExpense()}</h3>
        </div>
    )
}
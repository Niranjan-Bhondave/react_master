    import { useParams } from "react-router"
    import customerInformation from "../Data/CustomerInformation";

    export default function TransactionDetails(){
    const {id} = useParams();
    const retrievedTransaction = customerInformation.transactions.find(
    (transaction) => transaction.id === Number(id)
    );

    const retrievedDate = retrievedTransaction.date;
    const description = retrievedTransaction.description;
    const merchant = retrievedTransaction.merchant;
    const category = retrievedTransaction.category;
    const type = retrievedTransaction.type;
    const amount = retrievedTransaction.amount;
    const status = retrievedTransaction.status;
    const balanceAfter = retrievedTransaction.balanceAfter;

    return (

        <div>
            <p>Id: {id}</p>
            <p>Date: {retrievedDate}</p>
            <p>Description: {description}</p>
            <p>Merchant: {merchant}</p>
            <p>Category: {category}</p>
            <p>Type: {type}</p>
            <p>Amount: {amount}</p>
            <p>Status: {status}</p>
            <p>Balance After: {balanceAfter}</p>
        </div>

        )
    }
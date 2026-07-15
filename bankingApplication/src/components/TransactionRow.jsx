import { Link } from "react-router";

export default function TransactionRow({transaction}){
    const {id,date,description,type,amount} = transaction;

    function getFirstLetterCapitalised(status){
        const newWord = String(status).charAt(0).toUpperCase() + String(status).slice(1);
        return newWord;
    }

    return (
    <tr>
        <td>{date}</td>
        <td>{description}</td>
        <td>{getFirstLetterCapitalised(type)}</td>
        <td>{amount}</td>
        <td><Link to={`/transactions/${id}`}>View details</Link></td>
    </tr>
    )
}
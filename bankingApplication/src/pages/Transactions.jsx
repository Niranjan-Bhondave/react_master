import { Link } from "react-router";
import TransactionRow from "../components/TransactionRow";
import { useContext, useEffect, useState } from "react";
import TransactionContext from "../context/TransactionContext";
export default function Transactions(){

    const customerInformation = useContext(TransactionContext);
    
    const transactions = customerInformation.transactions;
    const [descriptionSearch,setDescriptionSearch] = useState('');
    const [merchantSearch,setMerchantSearch] = useState('');
    const [categorySearch,setCategorySearch] = useState('');

    const [currentTransactions,setCurrentTransactions] = useState(transactions);

    useEffect((()=>{
        const id = setTimeout(()=>{
        var filteredTransactions = transactions;
        if(descriptionSearch != '')filteredTransactions = filteredTransactions.filter((transaction)=>transaction.description.toLowerCase().includes(descriptionSearch.toLowerCase()));
        if(merchantSearch != '')filteredTransactions = filteredTransactions.filter((transaction)=>transaction.merchant.toLowerCase().includes(merchantSearch.toLowerCase()));
        if(categorySearch != '')filteredTransactions = filteredTransactions.filter((transaction)=>transaction.category.toLowerCase().includes(categorySearch.toLowerCase()));
        
        setCurrentTransactions(filteredTransactions);
        },500)
        return ()=>clearTimeout(id);        
    }),[descriptionSearch,merchantSearch,categorySearch])

    // function handleChange(){
        
    //     var filteredTransactions = transactions;
    //     if(descriptionSearch != '')filteredTransactions = filteredTransactions.filter((transaction)=>transaction.description.toLowerCase().includes(descriptionSearch.toLowerCase()));
    //     if(merchantSearch != '')filteredTransactions = filteredTransactions.filter((transaction)=>transaction.merchant.toLowerCase().includes(merchantSearch.toLowerCase()));
    //     if(categorySearch != '')filteredTransactions = filteredTransactions.filter((transaction)=>transaction.category.toLowerCase().includes(descriptionSearch.toLowerCase()));

    // }

    return(
        <div>
            <div className="search" style={{display:"flex",flexDirection:"column",width:"500px",justifyContent:"space-evenly"}}>
                <input placeholder = "Search by description" type="text"  name="descriptionSearch" id="descriptionSearch" value={descriptionSearch} onChange={(e)=>setDescriptionSearch(e.target.value)} />
                <input placeholder = "Search by merchant" type="text" name="merchantSearch" id="merchantSearch" value={merchantSearch} onChange={(e)=>setMerchantSearch(e.target.value)} />
                <input placeholder = "Search by category" type="text" name="categorySearch" id="categorySearch" value={categorySearch} onChange={(e)=>setCategorySearch(e.target.value)} />
                {/* <button type="submit" onClick={()=>handleChange()}>Search</button> */}
            </div>
            <div>
                <p>Filter by type</p>
            </div>
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
                        currentTransactions.map((transaction)=>{
                            return <TransactionRow transaction={transaction} key={transaction.id}/>
                        })
                    }
                </tbody>
            </table>             
        </div>
    )
}
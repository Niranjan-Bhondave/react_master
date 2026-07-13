import "../styles/SmallCard.css";
export default function SmallCard(props){
    const attribute = props.attribute;
    const amount = props.amount;
    return(
        <div className="smallCard">
        <h3>{attribute}</h3>
        <p>{amount}</p>
        </div>
    )
}
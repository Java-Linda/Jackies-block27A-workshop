import { mockTransactions } from "../mockData"

export default function Transaction() {
    const data = mockTransactions.map((ele) => ele.cost);
    return(
        <div>
            {data}
        </div>
    )
}

// {mockTransactions.map((ele) => {
//     return (
//     <ul>
//     <li>{ele.user}</li>
//     <li>{ele.txId},</li> 
//     <li>{ele.date}</li> 
//     <li>{ele.cost}</li>
//     </ul>)
// })}
// 
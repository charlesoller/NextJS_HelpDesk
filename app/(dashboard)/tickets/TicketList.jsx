import Link from "next/link";

async function getTickets(){
    const res = await fetch('http://localhost:4000/tickets', {
        next: {
            revalidate: 0 //this opts out of using caching
        }
    });
    return res.json();
}

export default async function TicketList(){
    const tickets = await getTickets();

    const ticketElements = tickets.map(ticket => (
        <Link href={`/tickets/${ticket.id}`}>
            <div id={ticket.id} className="card my-5">
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </Link>
    ))
    return (
        ticketElements ?
        ticketElements :
        <p className="center">There are no open tickets.</p>

    )
}

// export default async function TicketList() {
// const tickets = await getTickets()

// return (
//     // const ticketElements = tickets.map(ticket => {

//     // })

//     <>
//     {tickets.map((ticket) => (
//         <div key={ticket.id} className="card my-5">
//         <h3>{ticket.title}</h3>
//         <p>{ticket.body.slice(0, 200)}...</p>
//         <div className={`pill ${ticket.priority}`}>
//             {ticket.priority} priority
//         </div>
//         </div>
//     ))}
//     {tickets.length === 0 && (
//         <p className="text-center">There are no open tickets, yay!</p>
//     )}
//      </>
// )
// }

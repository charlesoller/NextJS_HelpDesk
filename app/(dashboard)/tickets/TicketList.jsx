import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

async function getTickets(){
    const supabase = createServerComponentClient( {cookies} );
    const { data, error } = await supabase.from('Tickets')
        .select()

    if (error) {
        console.log(error.message)
    }

    return data;
}

export default async function TicketList(){
    const tickets = await getTickets();

    const ticketElements = tickets.map(ticket => (
        <Link key={ticket.id} href={`/tickets/${ticket.id}`}>
            <div className="card my-5">
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

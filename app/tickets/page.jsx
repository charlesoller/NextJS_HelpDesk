import TicketList from "./TicketList";
import Header from "../components/Header"

export default function Tickets(){
    return (
        <>
            <Header />
            <main>
                <nav>
                    <div>
                        <h2>Tickets</h2>
                        <p><small>Currently open tickets.</small></p>
                    </div>
                </nav>
                <TicketList />
            </main>
        </>
    )
}

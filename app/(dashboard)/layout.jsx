import Navbar from "../components/Header"

export default function DashboardLayout({ children }){
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

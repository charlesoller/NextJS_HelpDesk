"use client"
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { TiDelete } from 'react-icons/ti'
import { useTransition } from 'react'
import { deleteTicket } from '../actions'

export default function DeleteButton({ id }){
    const [isPending, startTransition] = useTransition();

    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    const handleClick = async () => {
        setIsLoading(true);
        const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
            method: 'DELETE'
        })
        const json = await res.json();
        if(json.error){
            console.log(json.error)
            setIsLoading(false)
        } else {
            router.refresh();
            router.push('/tickets')
            setIsLoading(false)
        }
    }
    return (
        <button
            className='btn-primary'
            onClick={() => startTransition(() => deleteTicket(id))}
            disabled={isLoading}
        >
            {isPending ?
            <><TiDelete />Deleting...</>
            : <><TiDelete />Delete Ticket</>
            }
        </button>
    )
}

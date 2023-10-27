"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

//components
import AuthForm from "../AuthForm"

export default function Login(){
    const [error, setError] = useState()
    const router = useRouter()

    const handleSubmit = async (e, email, password) => {
        e.preventDefault();
        setError('')

        const supabase = createClientComponentClient();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            setError(error.message);
        } else {
            router.push('/')
        }
    }

    return (
        <main>
            <h2 className="text-center">Log in</h2>

            <AuthForm handleSubmit={handleSubmit}/>

            {error && (
                <div className="error">{error}</div>
            )}
        </main>
    )
}

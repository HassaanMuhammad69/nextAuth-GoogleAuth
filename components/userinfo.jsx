"use client"

import SignInBtn from "./SigninBtn";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserInfo() {

    const { status, data: session } = useSession();

    if (status === 'authenticated') {
        return (
            <div className='shadow-xl p-8 rounded-md flex-col gap-3 bg-slate-100 '>
                <Image 
                className='rounded-full'
                src={session?.user?.image} width={60} height={60} />
                <div>Name: <span className='font-bold'>{session?.user?.name}</span></div>
                <div>Email: <span className='font-bold' >{session?.user?.email}</span></div>

            </div>
        )
    }
    else {
        return <SignInBtn />
    }
}
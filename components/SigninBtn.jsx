"use client"

import { signIn } from "next-auth/react"

export default function SignInBtn(){
    return(
        <button
        onClick={() => signIn('google')}
        className="flex  justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in with Google
      </button>
    )
}
import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function Login() {

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")


    const submit = async(e:React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            console.log(email)
            console.log(password)
        } catch (error) {
            
        }
        
    }
  return (
    <div className='mt-10' justify-self-center mx-auto>
       <h1 className='justify-self-center justify-center font-bold text-2-3xl font'> DIVE-IN TO MENTORSHIP CLASS</h1> 
       <form className='max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-xl'onSubmit={submit}>
        <h1 className='text-1xl font-bold text-center'>Login to your profile</h1>

        <div className='mb-4'>
            <label htmlFor='email' className='block text-purple-600 mb-7'>
                Email Address *
            </label>

            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='@gmail.com' required className='w-full px-4 py-2 border border-grey-300 rounded-md focus:outline-none focus:ring-2 focus::ring-purple-500 mb-5'> 
            </input>

            <label htmlFor='password' className='block text-purple-600 mb-7'>
                Password *
            </label>
             <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='password' required className='w-full px-4 py-2 border border-grey-300 rounded-md focus:outline-none focus:ring-2 focus::ring-purple-500'> 
            </input>

            <button type='submit' className='right-3 mt-5 text-2xl bg-purple-400 hover:bg-purple-700 p-3 rounded-xl top-9 focus:outline-none w-full '>Login</button>

        </div>


       </form>
    </div>
  )
}

export default Login






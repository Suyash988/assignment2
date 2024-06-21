'use client'
import { signup } from '@/utils/action'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {

  const [data, isData] = useState();
//   const useEffect(()) => {
//     effect
//     return () => {
//         cleanup
//     }
//   }, [input]) 
  return (
    <div className='w-full text-center mt-4'>
        <form >
        <h1 className="">Sign Up</h1>
        <div className="flex flex-col gap-4 p-4">
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" type='password' />
        </div>
        <div>
      <Link href="/">
        <Button variant="contained">Register</Button>
      </Link>  
        </div>
    </form>
        <div className="flex text-center items-center justify-center p-4">
            <p>Already have an account?</p>
            <Link href="/login" className='hover:outline '>Login</Link>
        </div>
    </div>
    
  )
}

export default page
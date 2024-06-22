'use client'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSignUp = async (e: React.FormEvent) => {
      e.preventDefault();
       try {
        const url = 'http://localhost:3030/register/user'
        const response = await axios.post((url), {firstName, lastName, email, password}) 
        alert(response.data.message)
       } catch (error) {
         console.log(error)
         alert('Unable to register the user')
       } finally {
        setIsLoading(false)
       }
  }

  return (
    <div className='w-full items-center justify-center align-middle text-center mt-4'>
      <h1 className="">Sign Up</h1>  
       <form onSubmit={handleSignUp} >
        <div className="flex flex-col gap-4 p-4">
        <TextField 
        id="outlined-basic" 
        label="First Name" 
        variant="outlined"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        />
        <TextField 
        id="outlined-basic" 
        label="Last Name" 
        variant="outlined"
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        />
        <TextField 
        id="outlined-basic"
        label="Email" 
        variant="outlined"
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        />
        <TextField 
        id="outlined-basic" 
        label="Password" 
        variant="outlined" 
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        />
        </div>
        <div className='mt-2'>
        
        <Button 
        variant="contained"
        type='submit'
        disabled={isLoading}
         >
          {isLoading ? "Registering..." : "Register"}
        </Button>
        </div>
    </form>
        <div className="flex text-center items-center justify-center p-4">
            <p>Already have an account?</p>
            <Link href="/login" className='hover:text-blue-700 hover:underline '>Login</Link>
        </div>
    </div>
    
  )
}

export default page
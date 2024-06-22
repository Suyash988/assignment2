'use client'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'


const page = () => {
    
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
     const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault(); 
      try { 
           const url = 'http://localhost:3030/login/user'
           const response = await axios.post((url), {email, password})
           alert(response.data.message)
        } catch (error) {
          console.log(error)
          alert('Error logging in User')
        } finally {
          setIsLoading(false)
        }
      }
    
  return ( 
    <div className='w-full text-center mt-4'>
       <h1 className="">Login</h1>
         <form onSubmit={handleLogin}>
           <div className="flex flex-col gap-4 p-4">
              <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined" 
                value={email} 
                type='email' 
                onChange={(e) => setEmail(e.target.value)} />
              <TextField 
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
                value={password} 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} />
           </div>
          <div className='rounded-sm'>
            <Button 
            variant="contained" 
            type='submit'
            disabled= {isLoading}
            >
              { isLoading ? "Signing...": "Login"}
            </Button>
          </div>
        </form>  
    <div className="flex text-center items-center justify-center p-4">
        <p>Don't have an account?</p>
        <Link href="/signup" className='hover:underline hover:text-blue-700 '>Register</Link>
    </div>
</div>
  )
}

export default page
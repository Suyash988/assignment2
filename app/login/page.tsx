import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Link from 'next/link'
import React from 'react'


const page = () => {
  return (
    
    <div className='w-full text-center mt-4'>
    <h1 className="">Login</h1>
    <form action="" className="">
    <div className="flex flex-col gap-4 p-4">
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <TextField id="outlined-basic" label="Password" variant="outlined" type="password" />
    </div>
    <div>
  <Link href="/">
    <Button variant="contained">Login</Button>
  </Link>  
    </div>
    <div className="flex text-center items-center justify-center p-4">
        <p>Don't have an account?</p>
        <Link href="/signup" className='hover:outline '>Register</Link>
    </div>
  </form>

</div>
  )
}

export default page
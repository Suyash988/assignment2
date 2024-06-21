import axios from "axios";

interface SignUp {
   firstname: string;
   lastname: string;
   email: string;
   password: string
}

interface Login {
    email: string;
    password: string;
}

export async function signup(signupdata : SignUp) {
    const data = signupdata
    try {
       const data1 = async () => await {}
    } catch (error) {
        console.log("Please try again")
    }
}

export async function login(logindata: Login){
  const data = logindata  
  try {
     const data2 = async () => await{
       axios.get('http://localhost:3030/users/{email}/login', (res,req) => {
        res.
       })
     }
  } catch (error) {
    console.log("Incorrect data")
  }
}
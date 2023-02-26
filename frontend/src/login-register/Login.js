import React,{useState} from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebase'

export default function Login() {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const navigate=useNavigate();
    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            loginEmail,
            loginPassword
          );
          console.log(user);
          navigate("/home");
        } catch (error) {
          console.log(error.message);
        }
      };

  return (
    <div className='min-w-full max-w-max min-h-screen max-h-max overflow-y-hidden bg-[#F6F9F5]'>
    <div className='flex flex-row justify-around items-center w-screen'>
      <div className='flex flex-col justify-center items-centerb shadow-xl p-20'>
      <div className="text-3xl text-[#091405] font-poppins font-medium">
         Welcome Back 
      </div>
   
      <input className="mt-6 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#f6f9f5] w-[300px] h-[50px] border border-[#d5d5d5] rounded-md text-black py-2 pl-4 shadow-lg shadow-black focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
       placeholder="Email Address" 
       type="email" 
       
       onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                  />

      <input className="mt-6 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#f6f9f5] w-[300px] h-[50px] border border-[#d5d5d5] rounded-md text-black py-2 pl-4 shadow-lg shadow-black focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm" 
      placeholder="Password" 
      type="password" 
      onChange={(event) => {
        setLoginPassword(event.target.value);
      }}/>
       {/* onChange={(e)=>setPassword(e.target.value)} */}

      <button className="bg-[#f6f9f5] hover:bg-[#ffffff] border-2 border-black rounded-xl text-black font-poppins font-semibold py-2 px-4 mt-6 w-[300px] shadow-black  hover:scale-110 transition duration-300 ease-in-out" onClick={login} >SIGN IN</button>
    
    
      <div className='mt-6 font-grotesk font-medium'>Don't have an account ? <u><Link to="/">Sign up</Link></u></div>
     
      </div>
          <div className="">
              <img src="/images/ramen2.png" alt="art" className="h-screen p-6" />
            </div>
        
        

      </div>
      
      
    </div>
  )
}

import { React, useState} from 'react'
import image1 from '../assets/eng_img.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';


export default function Register() {
  // initialise use navigate 
  const navigate = useNavigate()

  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: ""
  })

  const registerUser = async (e) => {
    e.preventDefault()

    // desconstruct data from backend 
    const {firstname, lastname, email, phone, password} = data
    try {
     const {data} = await axios.post('/api/v1/auth/register', {firstname, lastname, email, phone, password})
    //  check payload data 
    if(data.error){
      toast.error(data.error)
    }else{
      setData({})
      toast.success("Registration was successfull!!")
      navigate('/login')

    }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
          {/* image section  */}
          <div className="md:w-1/3 max-w-sm mt-8">
              <p className=' text-center text-black underline italic font-extrabold font-mono text-3xl drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]'>ACES-KU</p>
              <img className='drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] h-80 rounded-lg'
              src={image1}
              alt="Sample image"
              /> 
          </div>

          {/* form section  */}
          <div className=' md:w-[700px] w-[400px] border p-2 rounded-md'>
          <div className="text-center md:text-center">
                <label className="mr-1 font-bold">Sign Up </label>
                </div>
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                
                </div>
            <form onSubmit={registerUser}>
              <div className=' grid grid-rows-2 md:grid-cols-2 grid-flow-row space-y-2 gap-1'>
                <input type="text" placeholder='Enter First Name' className='w-full text-gray-400 border rounded-md p-2' value={data.firstname} onChange={(e) => setData({...data, firstname: e.target.value})} />
                <input type="text" placeholder='Enter Last Name' className='w-full text-gray-400 border rounded-md p-2' value={data.lastname} onChange={(e) => setData({...data, lastname: e.target.value})} />

                <input type="email" placeholder='Enter Email' className='w-full text-gray-400 border rounded-md p-2' value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
                <input type="text" placeholder='Enter Phone Number (2547xxxxx)' className='w-full text-gray-400 border rounded-md p-2' value={data.phone} onChange={(e) => setData({...data, phone: e.target.value})} />

                <input type="Password" placeholder='Enter Password' className='w-full text-gray-400 border rounded-md p-2' value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
                <input type="password" placeholder='Comfirm Password' className='w-full text-gray-400 border rounded-md p-2' />
              </div>
              <div className="text-center md:text-left">
          <button
            className=" w-full mt-4 bg-gradient-to-r from-yellow-600 to-yellow-200 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Sign Up
          </button>
        </div>
            </form>

            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          You have an account?{" "}
          <Link
            className="text-gray-600 hover:underline hover:underline-offset-4"
            to={'/login'}
          >
            Login
          </Link>
        </div>
        </div>
         </section>   
    </div>
  )
}

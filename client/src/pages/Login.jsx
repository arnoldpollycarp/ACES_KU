import {React, useState} from 'react'
import image1 from '../assets/eng_img.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast'

export default function Login() {
 const navigate = useNavigate();

 const [data, setData] = useState({
    email: '',
    password: ''
 })

  const loginUser = async (e) => {
    e.preventDefault()

    const {email, password} = data;
    try {
        const {data} = await axios.post('/signin', {email, password})
        // check data 
        // email check 
        if(data.error) {
            toast.error(data.error)
        }else{
            setData({})
            toast.success(`Welcome ${data.firstname} ${data.lastname}`)
            navigate('/')

        }
    } catch (error) {
        
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
            <div className="md:w-1/3 max-w-sm border p-2 rounded-md">
                <div className="text-center md:text-center">
                <label className="mr-1 font-bold">Sign in </label>
                </div>
                <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                
                </div>

                <form onSubmit={loginUser}>
                <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                type="text"
                placeholder="Email Address"
                value={data.email} onChange={(e) => setData({...data, email: e.target.value})}
                />
                <input
                className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                type="password"
                placeholder="Password"
                value={data.password} onChange={(e) => setData({...data, password: e.target.value})}
                />
                <div className="mt-4 flex justify-between font-semibold text-sm">
                <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                    <input className="mr-1" type="checkbox" />
                    <span>Remember Me</span>
                </label>
                <a
                    className="text-gray-600 hover:text-gray-700 hover:underline hover:underline-offset-4"
                    href="#"
                >
                    Forgot Password?
                </a>
                </div>
                <div className="text-center md:text-left">
                <button
                    className=" w-full mt-4 bg-gradient-to-r from-yellow-600 to-yellow-200 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                    type="submit"
                >
                    Login
                </button>
                </div>
                </form>
                
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                Don&apos;t have an account?{" "}
                <Link
                    className="text-gray-600 hover:underline hover:underline-offset-4"
                    to={'/register'}
                >
                    Register
                </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

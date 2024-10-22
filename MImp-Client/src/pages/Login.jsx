import React from 'react'
import Google from '../assets/img/google.png'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { CircleX } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginUser } from '../services/api';




const Login = () => {
  const navigate = useNavigate();

  const emailref = useRef(null);
  const passwordref = useRef(null);



  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: emailref.current.value,
      password: passwordref.current.value
    };
    try {
      const res = await LoginUser(data);

      if (res.data.message === 'User does not Exist') {
        toast.error('User does not Exist');
      }
      if (res.data.message === 'Incorrect Password') {
        toast.error('Incorrect Password');
      }
      if (res.status === 200 && res.data.message === 'Login Successful') {
        toast.success('Login Successful');
        setTimeout(() => {
          navigate('/createtrip');
        }, 2000);

      }

    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <ToastContainer />
      <div className="h-[90vh] w-screen flex justify-center absolute items-center z-50">
        <div className="h-100 w-[370px] pb-5 flex flex-col justify-center items-center bg-white rounded-[30px] shadow-xl">
          <div className="w-full flex justify-end align-top">
            <CircleX onClick={() => navigate('/')} />
          </div>
          <form onSubmit={handleLogin} className="flex flex-col justify-center w-[80%] h-[80%] rounded-md items-center gap-4">
            <h1 className="text-blue-600 font-serif text-2xl font-medium">Login Form</h1>
            <input type="email" ref={emailref} className="font-serif p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="Email" />
            <input type="password" ref={passwordref} className="font-serif p-2 rounded-md w-full outline-none focus:border-2 focus:border-r-4 focus:border-b-4 border-blue-500 shadow-inner" placeholder="password" />
            <button type="submit" className="h-12 bg-blue-500 rounded-md w-full text-white p-2 font-serif hover:bg-blue-600" >Login</button>
            <button type="submit" className="h-12 bg-slate-50 rounded-full w-[80%] p-2 font-serif flex justify-center gap-4 items-center" ><img src={Google} /> Continue with Google</button>
            <div className="w-full">
              <p className="">If you are new ?<a href="/register" className="text-blue-500">Register</a></p>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default Login
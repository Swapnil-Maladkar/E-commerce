import React from 'react'
import { useState } from 'react'
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast'; 
import axios from "axios";
import { useNavigate,useLocation } from 'react-router-dom';
import '../../styles/AuthStyles.css';
import { useAuth } from '../../context/auth';

const Login = () => {

    const navigate=useNavigate();
    const location=useLocation();
    const [email,setEmail] = useState("");
    const [password,setPassword]= useState(""); 
    const [auth,setAuth]=useAuth();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res =await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{email,password});
            if(res && res.data.success){
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user:res.data.user,
                    token:res.data.token
                });
                localStorage.setItem('auth',JSON.stringify(res.data));
                navigate('/');
            }
            else{
                toast.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong");
        }
    }

  return (
    <Layout title={'Register - FlipZon'}>
       <div className='register-bg'>
            <div className='form-container'>
                
                <form onSubmit={handleSubmit}>
                    <h1 className='title'>USER LOGIN</h1>
                    
                    <div className="mb-3">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder='Enter Your Email' required/>
                    </div>

                    <div className="mb-3">
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required/>
                    </div>

                    <div className="mb-3">
                        <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password');}}>Forgot Password</button>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">LOGIN</button>
                </form>

            </div>
       </div>
    </Layout>
  )
}

export default Login
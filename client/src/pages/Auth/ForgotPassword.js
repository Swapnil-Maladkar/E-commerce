import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useState } from 'react'
import toast from 'react-hot-toast'; 
import axios from "axios";
import { useNavigate} from 'react-router-dom';
import '../../styles/AuthStyles.css';

const ForgotPassword = () => {

    const navigate=useNavigate();
    const [email,setEmail] = useState("");
    const [newPassword,setNewPassword]= useState(""); 
    const [answer,setAnswer]= useState(""); 


    const handleSubmit = async(e)=>{
        e.preventDefault();
        try {
            const res =await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/forgot-password`,{email,newPassword,answer});
            if(res && res.data.success){
                toast.success(res.data.message);
                
                navigate('/login');
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
    <Layout>
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                    <h1 className='title'>Reset Password</h1>
                    
                    <div className="mb-3">
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder='Enter Your Email' required/>
                    </div>

                    <div className="mb-3">
                        <input type="text" value={answer} onChange={(e)=>setAnswer(e.target.value)} className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder='Enter Your Nationality' required/>
                    </div>

                    <div className="mb-3">
                        <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required/>
                    </div>

                    
                    <button type="submit" className="btn btn-primary">RESET</button>
            </form>
        </div>
    </Layout>
  )
}

export default ForgotPassword
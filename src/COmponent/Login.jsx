import React ,{useState,useContext} from 'react'
import Usercontaxt from '../Contaxt/Userconatxt'

function Login() {
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
     const {setuser} = useContext(Usercontaxt)
    const HandleSubmit =(e) =>{
e.preventDefault();
setuser({username,password})
    }
  return (
    <div>
      <h1>Login</h1>
      <input type='text' placeholder='user' value={username} onChange={(e)=> setusername(e.target.value)}/>
      <input type=' text' placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
      <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login

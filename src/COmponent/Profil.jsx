import React ,{useContext} from 'react'
import Usercontaxt from '../Contaxt/Userconatxt'
function Profil() {
    const {user} = useContext(Usercontaxt)
  if(!user)
 return     <h1>plz Login</h1>
  
  
  return <h1>Welcome {user.username}</h1>
  
}

export default Profil

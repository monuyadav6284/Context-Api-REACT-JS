import React,{useState} from "react";
import Usercontaxt from "./Userconatxt";
const UserConataxtProvider=({children}) => {
    const [user, setuser] = useState(null)
return (
    <Usercontaxt.Provider value={{user,setuser}}>
        {children }
    </Usercontaxt.Provider>
)
}
export default UserConataxtProvider
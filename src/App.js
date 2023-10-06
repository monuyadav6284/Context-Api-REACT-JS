import Login from './COmponent/Login';
import Profil from './COmponent/Profil';
import UserConataxtProvider from './Contaxt/UserContaxtProvider'


function App() {
  return (
   <UserConataxtProvider>
    <Login/>
    <Profil/>
    
   </UserConataxtProvider>
  );
}

export default App;

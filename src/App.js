
import './App.css';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import LoginAll from './LoginAll'
import LoginUser from './user-components/LoginUser';
import Login from './admin-components/Login';
import UserDashboard from './user-components/UserDashboard';
import UserListTransfers from './user-components/UserListTransfers';
import UserWireTransfert from './user-components/UserWireTransfert';
import AdminDashboard from './admin-components/AdminDashboard';
import ListUser from './admin-components/ListUsers'
import CreateUserForm from './admin-components/CreateUserForm';
function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginAll />}/>
            <Route path="login/user" element={<LoginUser />} />
            <Route path="login/admin" element={<Login />} />
            <Route path="user/dashboard" element={<UserDashboard />} >
                <Route index  element={<UserListTransfers/>} />
                <Route path="transfert" element={<UserWireTransfert />}/>
            </Route>  
            <Route path="/admin" element={<AdminDashboard />}>
              <Route index element={<ListUser/>}/>
              <Route path='add' element={<CreateUserForm/>}/>
            </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

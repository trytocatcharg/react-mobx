import './App.css'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Header from './components/Header/Header';
import { RequireAuth } from 'react-auth-kit';
import Users from './pages/Users/Users';
import AuthRoleRoute from './components/ProtectedRoleRoute';
import { UserType } from './models/user';

function App() {
  
  return (
        <BrowserRouter>
         <Header />
            <Routes>
            <Route path="/" element={
               <RequireAuth loginPath='/login'>
                  <Dashboard />
                </RequireAuth>}                
            />
            <Route path="/products" element={
                <RequireAuth loginPath='/login'>
                  <Products />
                </RequireAuth>
            }/>
            <Route element={<AuthRoleRoute allowedRoles={UserType.ADMIN} />}>
                  <Route path="/users" element={<Users />} />
            </Route>
            <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../Screens/AuthPage/SignIn';
import Register from '../Screens/AuthPage/Register';
import Dashboard from '../Screens/Dashboard';
import PurchaseOrder from '../Screens/PurchaseOrder/PurchaseOrder';
import Sidebar from './Sidebar';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';
import Home from '../Screens/Home/Home';
import TopNavbar from '../Screens/Navigation/TopNavbar';


export default function RoutePage() {
const login = localStorage.getItem('login')
  
  return (
    <Router>
      <TopNavbar/>
      {/* <Sidebar /> */}
      <div className={login && "content"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<ProtectedRoute Componnent={Dashboard} />} />
          <Route path="/purchaseorder" element={<ProtectedRoute Componnent={PurchaseOrder} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>

    </Router>
  )
}


import {BrowserRouter,Routes,Route} from "react-router-dom"
import Front from "./files/Front"
import Layout from "./Layout"
import LR from "./files/L&R"
import Register from "./files/Register"
import Home from "./files/Home"
import About from "./files/About"
import Contact from "./files/Contact"
import Services from "./files/Services"
import Login from "./files/Login"
import Open from "./files/Open"
import Dashboard from "./files/Dashboard"
import Profile from "./Dashboard/Profile"
import BalenceInquiry from "./Dashboard/BalenceInquiry"
import AccountStatement from "./Dashboard/AccountStatement"
import AddMoney from "./Dashboard/AddMoney"
import Withdraw from "./Dashboard/Withdraw"
import ProtectedRoute from "../src/files/ProtectedRoute"
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Front />}></Route>

        <Route path="lr" element={<LR />}></Route>

        <Route path="register" element={<Register />}></Route>


        <Route path="layout" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="home" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="contact" element={<Contact />}/>
        <Route path="services" element={<Services />}/>
        <Route path="login" element={<Login />}/>
        <Route path="open" element={<Open />}/>
        
        </Route>

        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}>
        <Route index element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
        <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
        <Route path="bi" element={<ProtectedRoute><BalenceInquiry /></ProtectedRoute>}/>
        <Route path="as" element={<ProtectedRoute><AccountStatement /></ProtectedRoute>}/>
        <Route path="am" element={<ProtectedRoute><AddMoney /></ProtectedRoute>}/>
        <Route path="wm" element={<ProtectedRoute><Withdraw /></ProtectedRoute>}/>
        
        
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

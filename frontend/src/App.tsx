import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import ForgottenPassword from './components/ForgottenPassword/Forgotten'
import Otp from './components/Otp/Otp'
import Home from './components/Home/Home'

function App() {
  return (
    < >
    <Router>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/forgottenPassword' element={<ForgottenPassword/>}/>
        <Route path='/signup' element={ <Signup/>}/>
        <Route path='/otp' element={<Otp/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </>
  )
}
export default App

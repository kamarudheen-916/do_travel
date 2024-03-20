import Userpart from './userpart'
import Button from '../atoms/Button/Button'
import './Signup.css'

import { Link } from 'react-router-dom'
import PropertyPart from './PropertyPart'
import { useState } from 'react'
function Signup() {
    const [userType, setUserType] = useState<string>('user'); // State to track the selected user type

    const handleUserTypeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUserType(event.target.value); // Update the user type based on the selected radio button
    };
  return (
    <div className='signup'>
        <div className="first Sidebar_signUp">
            {/* <img className='w-full h-full'  src="../../../public/images/loginpageImage-2.jpg" alt="" /> */}
        </div>
        <div className="center">
            <div className='logo text-center text-white'>
                <h1>do Travel</h1>
            </div>
            <div className='SignUpform'>
                <form action="" className=' p-6 '>
                    <div className='text-white text-2xl mb-6 font-bold text-center'>
                         <h1>Sign up</h1>   
                    </div>
                    <div className='checkBox'>
                       <div className='flex justify-around text-white mb-3'>
                            <div className='flex justify-around w-full border-2 rounded-md'>
                                <label htmlFor="userRadio">User</label>
                                <input
                                        type="radio"
                                        name="userOrNot"
                                        id="userRadio"
                                        value="user"
                                        checked={userType === 'user'} // Check if the user type is 'user'
                                        onChange={handleUserTypeChange} // Update user type when radio button is clicked
                                    />    
                            </div>  
                            <div className='flex justify-around w-full border-2 rounded-md'>
                                <label htmlFor="properyRadio">Property</label>
                                <input
                                        type="radio"
                                        name="userOrNot"
                                        id="propertyRadio"
                                        value="property"
                                        checked={userType === 'property'} // Check if the user type is 'property'
                                        onChange={handleUserTypeChange} // Update user type when radio button is clicked
                                    /> 
                            </div>
                       </div>
                       {userType === 'user' && <Userpart />}
                            {userType === 'property' && <PropertyPart />}
                        <Button name='submit'/>
                        <div style={{textAlign:'center',marginTop:'10px'}}>
                            <Link className='text-white' to={'/login'}>Already hava an account?</Link>
                        </div>
                       </div>
                </form>
            </div>
        </div>
        <div className="third Sidebar_signUp">
         {/* <img className='w-full h-full' src="../../../public/images/loginpageImage-3.jpg" alt="" /> */}
        </div>
    </div>
  )
}

export default Signup

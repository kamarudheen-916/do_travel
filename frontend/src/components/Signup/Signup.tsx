import Userpart from './userpart'
import Button from '../atoms/Button/Button'
import './Signup.css'
import { Link } from 'react-router-dom'
import PropertyPart from './PropertyPart'
import { useState } from 'react'
import { SignupApi } from '../../api'
function Signup() {
    const [userType, setUserType] = useState<string>('user'); // State to track the selected user type
    const [confirmPassword,setConfirmPassword] = useState('')
    const [userFormData,setUserFormData] = useState({
            firstName: '',
            secondName: '',
            email: '',
            password: '',
            isBlocked:false,
            gender:'',
            DOB:'',
            Country:'',
            State:'',
            MobileNumber:'',
            City:'',
            favoritePlace:[''] ,
            Profile: '',
      })
      const [propertyFormData,setPropertyFormData] = useState({
            PropertyName: '',
            email: '',
            password: '',
            isBlocked:false,
            startedDate: '',
            Address:'',
            TypeOfStay:[''],
            Speciality:[''],
            MobileNumber:'',
            license:'' , 
            PropertyProfile: '',
  })
    const handleUserTypeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setUserType(event.target.value); // Update the user type based on the selected radio button
    };
    const handleSubmit =async (e:React.ChangeEvent<HTMLInputElement>) =>{ 
        e.preventDefault()
        
        const formData = userType === 'user' ? userFormData : propertyFormData
        console.log(formData);
        const route = userType === 'user' ? 'signup_user' : 'signup_property'
        console.log('route :',route);
        
        const response = await SignupApi(formData,route)
        console.log('response :',response)
    }
  return (
    <div className='signup parant'>
        <div className="first  Sidebar_signUp">
            {/* <img className='w-full h-full'  src="../../../public/images/loginpageImage-2.jpg" alt="" /> */}
        </div>
        <div className="center">
            <div className='logo text-center text-white'>
                <h1>do Travel</h1>
            </div>
            <div className='SignUpform '>
                <form action=""  className=' p-6 ' encType='multipart/form-data'>
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
                            {userType === 'user' && <Userpart setUserFormData={setUserFormData}  />}
                            {userType === 'property' && <PropertyPart setPropertyFormData={setPropertyFormData}/>}
                            <Button handleSubmit={(e:any)=>handleSubmit(e)} name='submit'/>
                        <div style={{textAlign:'center',marginTop:'10px'}}>
                            <Link className='text-white' to={'/login'}>Already hava an account?</Link>
                        </div>
                       </div>
                </form>
            </div>
        </div>
        <div className="third Sidebar_signUp ">
         {/* <img className='w-full h-full' src="../../../public/images/loginpageImage-3.jpg" alt="" /> */}
        </div>
    </div>
  )
}

export default Signup

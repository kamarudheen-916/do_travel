import React from 'react'
import Input from '../atoms/Input/Input'
import Dropdown from '../atoms/DropDown/DropDown'
import './Signup.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function userpart() {
    const [countries,setCountries] = useState<string[]>([])
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedCountry, setSelectedCountry] = useState<string>('');
    const [states, setStates] = useState<string>();
    const [favoritePlaces, setFavoritePlaces] = useState(['']);
    const handleAddInputField = () => {
        setFavoritePlaces(prevState => [...prevState, '']); // Add an empty string to the array
    };
    const handleDeleteInputField = (index:number) => {
        setFavoritePlaces(prevState => prevState.filter((_, i) => i !== index));
    };
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; // Get the first file from the selected files
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create URL for the selected file
            setSelectedImage(imageUrl); // Set the selected image URL
        }
    };
    const handleChange = (index:number, value:string) => {
        const updatedPlaces = [...favoritePlaces]; // Create a copy of the array
        updatedPlaces[index] = value; // Update the value at the specified index
        setFavoritePlaces(updatedPlaces); // Update the state with the new array
    };

    useEffect(()=>{
        const fetchCountries =async()=>{
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all')
                const countriesName = response.data.map((country:any)=>country.name.common)
                const sortedCountryNames = countriesName.sort((a:string, b:string) => a.localeCompare(b));
                setCountries(sortedCountryNames)
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        }
        fetchCountries()
    },[])

    const onContrySelect =(value:string)=>{
        setSelectedCountry(value)
    }
  return (
    <div>
        <div className='userPart'>
                        
                            <Input type={'text'} title={'First Name'} name={'firstName'} id={'firstName'} placeholder={'Enter Your First Name'} />
                            <Input type={'text'} title={'Second Name'} name={'secondName'} id={'secondName'}  placeholder={'Enter Your second Name'}/>
                            <Input type={'email'} title={'Email'} name={'email'} id={'email'}  placeholder={'Enter Your Email'} />
                            <Input type={'password'} title={'Password'} name={'password'} id={'password'}  placeholder={'Enter Your New Password'}/>
                            <Input type={'password'} title={'Confirm Password'} name={'confirmPassword'} id={'confirmPassword'}  placeholder={'Confirm Your Password'} />
                            <div className='text-white flex items-center'>
                                <Input  type={'text'} title={'Age'} name={'age'} id='age' width={'50px'} />
                                <label className='ml-2 mr-2' htmlFor="">Gender :</label>
                                <div className='ml-2 mr-2'>
                                    <input className='ml-2 mr-2' type="radio" name="gender" id="male" />
                                    <label htmlFor="Male">Male</label>
                                </div>
                                <div>
                                    <input className='ml-2 mr-2' type="radio" name="gender" id="female" />
                                    <label htmlFor="Female">Female</label>
                                </div>
                            </div>
                            <Dropdown options={countries} onSelect={onContrySelect} label={'Country'}/>
                            <Input type={'text'} title={'State'} name={'State'} id={'State'} placeholder={'Enter Your State '}/>
                            <Input type={'text'} title={'City'} name={'City'} id={'City'} placeholder={'Enter Your City '}/>
                            <Input type={'text'} title={'Mobile Number'} name={'Mobile Number'} id={'Mobile Number'} placeholder={'Enter Your Mobile Number '}/>
                            <div>
                                    {/* Render input fields dynamically */}
                                    {favoritePlaces.map((place, index) => (
                                        <div key={index} className='flex items-center'>
                                            <div className='flex-1 w-80'>
                                                <Input
                                                    type={'text'}
                                                    title={`Favorite Place ${index + 1}`}
                                                    name={`favoritePlace${index}`}
                                                    id={`favoritePlace${index}`}
                                                    placeholder={`Enter Favorite Place ${index + 1}`}
                                                    value={place}
                                                    onChange={(e) => handleChange(index, e.target.value)}
                                                />
                                            </div>
                                            {index === favoritePlaces.length - 1 && ( // Render plus icon only for the last input field
                                                <i
                                                    key={`plus-${index}`}
                                                    className="fa-solid fa-circle-plus flex-initial"
                                                    style={{ color: 'white', marginLeft: '20px', fontSize: '25px', marginTop: '10px' }}
                                                    onClick={handleAddInputField} // Call function to add another input field
                                                ></i>
                                            )}
                                            {index !== favoritePlaces.length - 1 && ( // Render plus icon only for the last input field
                                                <i
                                                    key={`xmark-${index}`}
                                                    className="fa-solid fa-circle-xmark"
                                                    style={{ color: 'white', marginLeft: '20px', fontSize: '25px', marginTop: '10px' }}
                                                    onClick={()=>handleDeleteInputField(index)} // Call function to add another input field
                                                ></i>
                                            )}
                                        </div>
                                    ))}
                            </div>  
                            <div className='flex items-center'>
                            <Input
                                    type={'file'}
                                    title={'Profile'}
                                    name={'Profile'}
                                    id={'Profile'}
                                    height='60px'
                                
                                    placeholder={'Enter Your Mobile Number '}
                                    multiple={false}
                                    onChange={handleImageChange} 
                                />
                                {selectedImage && <img src={selectedImage} alt="" style={{ marginLeft:'10px',marginTop:'10px',borderRadius:'5px',width: '30%', height: 'auto', maxHeight: '60px' }}  />}
                                {!selectedImage &&<div className='flex items-center justify-center'  style={{ marginLeft:'10px',marginTop:'10px',borderRadius:'5px',width: '30%', height: '60px', maxHeight: '60px', backgroundColor:'white'}} >
                                <i className="fa-solid fa-user" style={{fontSize:'40px'}}></i>
                                </div>}
                                
                             </div>                                            
                        </div>
    </div>
  )
}

export default userpart

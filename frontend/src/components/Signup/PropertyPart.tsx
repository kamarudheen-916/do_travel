import { useState } from "react"
import Input from "../atoms/Input/Input"


function PropertyPart() {
  const [license,setLicense] = useState<string|null>(null)
  const handleLicenseImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first file from the selected files
    if (file) {
        const imageUrl = URL.createObjectURL(file); // Create URL for the selected file
        setLicense(imageUrl); // Set the selected image URL
    }
};

const [profile,setProfile] = useState<string|null>(null)
const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0]; // Get the first file from the selected files
  if (file) {
      const imageUrl = URL.createObjectURL(file); // Create URL for the selected file
      setProfile(imageUrl); // Set the selected image URL
  }
};


  const [typeOfStays,setTypeOfStays] = useState<string[]>([''])
  const handleAddStay = ()=>{
    setTypeOfStays(previous => [...previous,''])
  }
  const handleRemoveStay =(index:number)=>{
    setTypeOfStays(PrevState =>PrevState.filter((_,i)=>i!==index))
  }
  const handleAddStayChange =(index:number,value:string)=>{
      const updatedStay = [...typeOfStays]
      updatedStay[index] = value
      setTypeOfStays(updatedStay)
  }


  const [speciality,setSpeciality] = useState<string[]>([''])
  const handleAddSpeciality = ()=>{
    setSpeciality(previous => [...previous,''])
  }
  const handleRemoveSpeciality =(index:number)=>{
    setSpeciality(PrevState =>PrevState.filter((_,i)=>i!==index))
  }
  const handleAddSpecialityChange =(index:number,value:string)=>{
      const updatedSpeciality = [...speciality]
      updatedSpeciality[index] = value
      setSpeciality(updatedSpeciality)
  }


  return (
    <div>
            <Input type={'text'} title={'Property Name'} name={'Property Name'} id={'Property Name'} placeholder={'Enter The Property Name'} />
            <Input type={'email'} title={'Email'} name={'email'} id={'email'}  placeholder={'Enter Your Email'} />
            <Input type={'password'} title={'Password'} name={'password'} id={'password'}  placeholder={'Enter Your New Password'}/>
            <Input type={'password'} title={'Confirm Password'} name={'confirmPassword'} id={'confirmPassword'}  placeholder={'Confirm Your Password'} />
            <Input type={'text'} title={'Address'} name={'Address'} id={'Address'}  placeholder={'Enter Your Address'} height="70px"/>
            <Input type={'date'} title={'Started Date'} name={'startedDate'} id={'startedDate'}  />
           
            <div className="TypesOfStay border-y ">
                {
              typeOfStays.map((stay,index)=>(
                <div className="flex items-center">
                  <div className='flex-1 w-80'>
                  <Input 
                    type={'text'}
                    title={`Type of stay ${index +1}`}
                    name={`TypeOfStay${index}`}
                    id={`TypeOfStay${index}`}
                    placeholder={`Enter Type of Stay ${index + 1}`}
                    value={stay}
                    onChange={(e)=>handleAddStayChange(index,e.target.value)}
                  />
                  </div>
                 { index === typeOfStays.length-1 && (<i
                      key={`plus-${index}`}
                      className="fa-solid fa-circle-plus flex-initial"
                      style={{ color: 'white', marginLeft: '20px', fontSize: '25px', marginTop: '10px' }}
                      onClick={handleAddStay} // Call function to add another input field
                  ></i>)}
                  {index !== typeOfStays.length - 1 && ( // Render plus icon only for the last input field
                      <i
                          key={`xmark-${index}`}
                          className="fa-solid fa-circle-xmark"
                          style={{ color: 'white', marginLeft: '20px', fontSize: '25px', marginTop: '10px' }}
                          onClick={()=>handleRemoveStay(index)} // Call function to add another input field
                      ></i>
                  )}
                </div>
              ))
            
            }
            </div>
            <div className="YourSpecialities border-b">
              {
              speciality.map((stay,index)=>(
                <div className="flex items-center">
                  <div className='flex-1 w-80'>
                  <Input 
                    type={'text'}
                    title={`Speciality ${index +1}`}
                    name={`Speciality${index}`}
                    id={`Speciality${index}`}
                    placeholder={`Enter Your Speciality ${index + 1}`}
                    value={stay}
                    onChange={(e)=>handleAddSpecialityChange(index,e.target.value)}
                  />
                  </div>
                 { index === speciality.length-1 && (<i
                      key={`plus-${index}`}
                      className="fa-solid fa-circle-plus flex-initial"
                      style={{ color: 'white', marginLeft: '20px', fontSize: '25px', marginTop: '10px' }}
                      onClick={handleAddSpeciality} // Call function to add another input field
                  ></i>)}
                  {index !== speciality.length - 1 && ( // Render plus icon only for the last input field
                      <i
                          key={`xmark-${index}`}
                          className="fa-solid fa-circle-xmark"
                          style={{ color: 'white', marginLeft: '20px', fontSize: '25px', marginTop: '10px' }}
                          onClick={()=>handleRemoveSpeciality(index)} // Call function to add another input field
                      ></i>
                  )}
                </div>
              ))
            
            }
            </div>
            <div className='upload_lisence flex items-center'>
                <Input
                        type={'file'}
                        title={'License'}
                        name={'license'}
                        id={'license'}
                        height='60px'
                    
                        placeholder={'Enter Your Mobile Number '}
                        multiple={false}
                        onChange={handleLicenseImageChange} 
                    />
                    {license && <img src={license} alt="" style={{ marginLeft:'10px',marginTop:'10px',borderRadius:'5px',width: '30%', height: 'auto', maxHeight: '60px' }}  />}
                    {!license &&<div className='flex items-center justify-center'  style={{ marginLeft:'10px',marginTop:'10px',borderRadius:'5px',width: '30%', height: '60px', maxHeight: '60px', backgroundColor:'white'}} >
                    <i className="fa-solid fa-file" style={{fontSize:'40px'}}></i>
                    </div>}
                    
              </div> 
              <div className='upload_Profile flex items-center'>
                <Input
                        type={'file'}
                        title={'Profile'}
                        name={'Profile'}
                        id={'Profile'}
                        height='60px'
                    
                        placeholder={'Enter Your Mobile Number '}
                        multiple={false}
                        onChange={handleProfileImageChange} 
                    />
                    {profile && <img src={profile} alt="" style={{ marginLeft:'10px',marginTop:'10px',borderRadius:'5px',width: '30%', height: 'auto', maxHeight: '60px' }}  />}
                    {!profile &&<div className='flex items-center justify-center'  style={{ marginLeft:'10px',marginTop:'10px',borderRadius:'5px',width: '30%', height: '60px', maxHeight: '60px', backgroundColor:'white'}} >
                    <i className="fa-solid fa-house" style={{fontSize:'40px'}}></i>
                    </div>}
                    
              </div>

    </div>
  )
}

export default PropertyPart

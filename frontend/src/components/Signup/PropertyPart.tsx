import { useState } from "react"
import Input from "../atoms/Input/Input"
import { PropertyFormData } from "../../interfaces";


interface PropertyPartProps {
  setPropertyFormData: React.Dispatch<React.SetStateAction<PropertyFormData>>;
}

const  PropertyPart : React.FC<PropertyPartProps>=({setPropertyFormData})=> {

  const [licensePreview,setLicensePreview] = useState<string|null>(null)
  const [profilePreview,setProfilePreview] = useState<string|null>(null)
  const [typeOfStays,setTypeOfStays] = useState<string[]>([''])
  const [speciality,setSpeciality] = useState<string[]>([''])


  const handlePropertyChange = (e :React.ChangeEvent<HTMLInputElement>) =>{
      setPropertyFormData((previous)=>({
        ...previous,
        [e.target.name] : e.target.files ? e.target.files[0] : e.target.value
      }))
      const file = e.target.files?.[0]; 
      if (file) {
          const imageUrl = URL.createObjectURL(file); 
          e.target.name === 'license' ?
          setLicensePreview(imageUrl) : 
          setProfilePreview(imageUrl)
      }
  }


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
      setPropertyFormData(previous =>({
        ...previous,
        TypeOfStay : [...updatedStay]
      }))
  }


  
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
      setPropertyFormData(previous =>({
        ...previous,
        Speciality : [...updatedSpeciality]
      }))
  }


  return (
    <div>
            <Input onChange={handlePropertyChange}  type={'text'} title={'Property Name'} name={'PropertyName'} id={'PropertyName'} placeholder={'Enter The Property Name'} />
            <Input onChange={handlePropertyChange} type={'email'} title={'Email'} name={'email'} id={'email'}  placeholder={'Enter Your Email'} />
            <Input onChange={handlePropertyChange} type={'password'} title={'Password'} name={'password'} id={'password'}  placeholder={'Enter Your New Password'}/>
            <Input onChange={handlePropertyChange} type={'password'} title={'Confirm Password'} name={'confirmPassword'} id={'confirmPassword'}  placeholder={'Confirm Your Password'} />
            <Input onChange={handlePropertyChange} type={'text'} title={'Address'} name={'Address'} id={'Address'}  placeholder={'Enter Your Address'} height="70px"/>
            <Input onChange={handlePropertyChange} type={'date'} title={'Started Date'} name={'startedDate'} id={'startedDate'}  />
            <Input onChange={handlePropertyChange} type={'string'} title={'Mobile Number'} name={'MobileNumber'} id={'MobileNumber'}  />
           
            <div className="TypesOfStay border-y ">
                {
              typeOfStays.map((stay,index)=>(
                <div  key={index} className="flex items-center">
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
                <div  key={index} className="flex items-center">
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
                        onChange={handlePropertyChange} 
                    />
                    {licensePreview && <img src={licensePreview} alt="" style={{ marginLeft:'10px',marginTop:'10px',borderRadius:'5px',width: '30%', height: 'auto', maxHeight: '60px' }}  />}
                    {!licensePreview &&<div className='flex items-center justify-center'  style={{ marginLeft:'10px',marginTop:'10px',borderRadius:'5px',width: '30%', height: '60px', maxHeight: '60px', backgroundColor:'white'}} >
                    <i className="fa-solid fa-file" style={{fontSize:'40px'}}></i>
                    </div>}
                    
              </div> 
              <div className='upload_Profile flex items-center'>
                <Input
                        type={'file'}
                        title={'Profile'}
                        name={'PropertyProfile'}
                        id={'Profile'}
                        height='60px'
                    
                        placeholder={'Enter Your Mobile Number '}
                        multiple={false}
                        onChange={handlePropertyChange} 
                    />
                    {profilePreview && <img src={profilePreview} alt="" style={{ marginLeft:'10px',marginTop:'10px',borderRadius:'5px',width: '30%', height: 'auto', maxHeight: '60px' }}  />}
                    {!profilePreview &&<div className='flex items-center justify-center'  style={{ marginLeft:'10px',marginTop:'10px',borderRadius:'5px',width: '30%', height: '60px', maxHeight: '60px', backgroundColor:'white'}} >
                    <i className="fa-solid fa-house" style={{fontSize:'40px'}}></i>
                    </div>}
                    
              </div>

    </div>
  )
}

export default PropertyPart

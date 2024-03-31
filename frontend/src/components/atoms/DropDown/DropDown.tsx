import { ChangeEvent, useState } from "react"
interface DropdownProps {
    options:string[];
    label:string;
    name:string;
    onSelect : React.ChangeEventHandler<HTMLSelectElement>;

}

const DropDown: React.FC<DropdownProps>=({options,onSelect,label,name}) =>{

    const [selectedOption,setSelectedOption] =  useState<string>('')

    // const handleSelectChange =(Event:ChangeEvent<HTMLSelectElement>)=>{
    //     const selectedValue = Event.target.value
    //     setSelectedOption(selectedValue)
    //     onSelect(Event.target.value)
    // }
  return (
    <div className="mb-2.5 text-start">
        <label htmlFor="" className="label">{label}</label>
        <select name={name}  className="rounded" onChange={onSelect} style={{width:'100%'}}>
                <option value="">Select...</option>
                {
                    options.map((option,index)=>(
                        <option key={index} value={option}>{option}</option>   
                    ))
                }
        </select>
    </div>
  )
}

export default DropDown

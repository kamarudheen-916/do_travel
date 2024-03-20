import { ChangeEvent, useState } from "react"
interface DropdownProps {
    options:string[];
    label:string;
    onSelect : (value:string) => void;

}

const DropDown: React.FC<DropdownProps>=({options,onSelect,label}) =>{

    const [selectedOption,setSelectedOption] =  useState<string>('')

    const handleSelectChange =(Event:ChangeEvent<HTMLSelectElement>)=>{
        const selectedValue = Event.target.value
        setSelectedOption(selectedValue)
        onSelect(selectedValue)
    }
  return (
    <div className="mb-2.5 text-start">
        <label htmlFor="" className="label">{label}</label>
        <select name={selectedOption} className="rounded" onChange={handleSelectChange} style={{width:'100%'}}>
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

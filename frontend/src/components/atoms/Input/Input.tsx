import './Input.css'
interface Props{
    title?:string;
    type:string;
    value?:string;
    name ?:string;
    id?:string;
    width?:string
    placeholder?:string;
    height?:string;
    multiple?:boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>; 
}
const Input : React.FC<Props>=(props) =>{
  return (
    <div className='flex flex-col'>
        <label className='label ' htmlFor="userName">{props.title}</label>
        <input      
                    className='input w-full'
                    placeholder={props.placeholder}
                    type={props.type}
                    name={props.name}
                    id={props.id}
                    multiple={props.type === 'file' ? props.multiple:undefined}
                    style={{ width: props.width ? props.width : '100%', height: props.height ? props.height : '30px' }}
                    onChange={props.onChange} // Pass onChange directly without wrapping it in another function
                />
  </div>
  )
}

export default Input

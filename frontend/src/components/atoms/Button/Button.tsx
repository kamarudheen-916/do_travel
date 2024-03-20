
import './Button.css'
type Props={
  name:string
}
function Button(props:Props) {
  return (
    <button className='button'>
        {props.name}
    </button>
  )
}

export default Button


import './Button.css'
type Props={
  name:string
  bgcolor?:string
  width?:string
  height?:string
  font_size?:string
  margin_top?:string
  handleSubmit?: (e:any)=>void;
}
function Button(props:Props) { 
  return (
    <button className='button' 
    onClick={props.handleSubmit}
    style={{backgroundColor:props.bgcolor,
    width:props.width,
    height:props.height,
    fontSize:props.font_size,
    marginTop:props.margin_top
    }}>
        {props.name}
    </button>
  )
}

export default Button

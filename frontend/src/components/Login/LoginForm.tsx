import { Link } from 'react-router-dom'
import Button from '../atoms/Button/Button'
import Input from '../atoms/Input/Input'

function LoginForm() {
  return (
    <div className='w-full flex justify-center items-center mt-20' >
                  <form action="" className='LoginForm p-8  rounded '>
                      <div className='text-white text-2xl mb-10 font-bold text-center'>Login</div>
                        <Input type={'text'} title={'User Name'} name={'Username'}/>
                        <Input type={'password'} title={'Password'} name={'Password'}/>
                        <div>
                            <Button  name={'Submit'}/>
                        </div>
                        <div className='mt-5 flex justify-between'>
                          <Link className='text-blue-200 mr-6' to={'/forgottenPassword'}>Forgotten Password?</Link>
                          <Link className='text-blue-200 ' to={'/signup'}>Create New Account</Link>
                        </div>
                        <div className='mt-6 text-center'>
                          <a href="" className='text-white '> <i className="fa-brands fa-google" style={{color:'white'}}></i> Login with google  </a>
                        </div>
                  </form>
                </div>
  )
}

export default LoginForm

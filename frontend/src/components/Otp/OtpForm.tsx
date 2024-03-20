import { Link } from 'react-router-dom'
import Button from '../atoms/Button/Button'
import Input from '../atoms/Input/Input'

function OtpForm() {
  return (
    <div>
            <div>
            <div className='w-full flex justify-center items-center mt-20' >
                  <form action="" className='LoginForm p-8  rounded '>
                      <div className='text-white text-2xl mb-10 font-bold text-center'>Login</div>
                        <Input type={'text'} title={'Enter OTP'} name={'otp'}/>
                        <div>
                            <Button  name={'Submit'}/>
                        </div>
                        <div className='mt-5 text-center'>
                          <Link className='text-blue-200 ' to={'/login'}>Cancel</Link>
                        </div>
                  </form>
                </div>
    </div>
    </div>
  )
}

export default OtpForm

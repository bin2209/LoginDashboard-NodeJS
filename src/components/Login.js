import React from 'react'
import logoImg from '../assets/logo.svg';
import userImg from '../assets/user.svg';
import lockImg from '../assets/lock.svg';
import rightVectorImg from '../assets/Vector.svg';
import leftVectorImg from '../assets/Ellipse.svg';
import leftVectorImg2 from '../assets/Ellipse-2.svg';
export const Login = () => {
  return (

    <div className='Login'>
        <div className='background'>
            <img className='b1' src={rightVectorImg} alt=''/>
            <img className='b2' src={leftVectorImg2} alt=''/>
            <img className='b3' src={leftVectorImg} alt=''/>
        </div>

        <div className='main'>
                <img className='logo mb-50' src={logoImg} alt='logo'/>

            <div className='col'>
                <img className='inputImg' src={userImg} alt=''/>
                <input className='border mb-20' typxe='text' name='username' placeholder='USERNAME'/>
            </div>

            <div className='col'>
                <img className='inputImg' src={lockImg} alt=''/>
                <input className='border mb-30' type='password' name='password' placeholder='PASSWORD' />
            </div>
                
            <div className='col'>
                <button className='border' type='submit'>Login</button>
                <a href='/'><p>Forgot password?</p></a>
            </div>

        </div>
    </div>
  )
}

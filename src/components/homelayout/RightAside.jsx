import React, { use } from 'react'
import SocialLogin from './SocialLogin'
import FindUs from './FindUs'
import QZone from './Qzone'
import { AuthContext } from '../../provider/AuthContext'

const RightAside = () => {
  const {user} = use(AuthContext)
  return (
    <div className='space-y-10'>
      { !user && <SocialLogin></SocialLogin>}
      <FindUs></FindUs>
      <QZone></QZone>
    </div>
  )
}

export default RightAside
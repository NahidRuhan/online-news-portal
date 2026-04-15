import { format } from 'date-fns'
import logo from '../assets/logo.png'
const Header = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-3'>
      <img className='w-1/4' src={logo} alt="" />
      <p className='text-accent'>Journalism Without Fear or Favour</p>
      <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM dd, yyyy, h:mm a")}</p>
    </div>
  )
}

export default Header

import { Link, NavLink } from 'react-router';
import userLogo from '../assets/user.png'
import { use } from 'react';
import { AuthContext } from '../provider/AuthContext';
const Navbar = () => {
  const {user,signOutUser} = use(AuthContext)
  const handleClick = ()=> {
    signOutUser().then().catch(error=>console.log(error.message))
  }
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5 items-center">
        <div className='flex flex-col items-center'>
          <img
            className="w-12 rounded-full"
            src={user ? user.photoURL : userLogo}
            alt=""
          />
          {user && <p>{user.displayName}</p>}
        </div>

        { user ? <p onClick={handleClick} className='btn btn-primary px-10'>Log out</p> : <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>}
        {/* <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link> */}
      </div>
    </div>
  );
}

export default Navbar

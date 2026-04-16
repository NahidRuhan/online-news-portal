import { useState, useEffect } from 'react'
import { Outlet, ScrollRestoration, useNavigate } from 'react-router'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'
import LeftAside from '../components/homelayout/LeftAside'
import RightAside from '../components/homelayout/RightAside'
import { FaArrowUp } from "react-icons/fa";
import Loading from '../components/Loading'

const HomeLayout = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {state} = useNavigate()

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>

        <header>
            <Header></Header>
            <section className='w-11/12 mx-auto my-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto my-3'>
                <Navbar></Navbar>
            </nav>
        </header>

        <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-20'>
            <aside className='col-span-3 sticky top-2 h-fit'>
                <LeftAside></LeftAside>
            </aside>
            <section className='col-span-6'>
                {state=="loading"?<Loading></Loading>:<Outlet></Outlet>}
            </section>
            <aside className='col-span-3 sticky top-2 h-fit'>
                <RightAside></RightAside>
            </aside>
        </main>
        
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 btn btn-primary text-white rounded-full w-14 h-14 shadow-lg z-50 flex items-center justify-center transition-all duration-300"
            aria-label="Scroll to top"
          >
            <FaArrowUp size={20} />
          </button>
        )}
        <ScrollRestoration></ScrollRestoration>
    </div>
  )
}

export default HomeLayout

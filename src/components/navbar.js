import { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { FiMoon } from 'react-icons/fi'
import { BsSun } from 'react-icons/bs'
import Link from 'next/link'


function Navbar() {
  const navbarRef = useRef()

  const [navbar, setNavbar] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme('light')

  const handleOutsideClicks = (event) => {
    if(navbar&& navbarRef.current && !navbarRef.current.contains(event.target)){
      setNavbar(!navbar);
   };
  }
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)

    // Bind the event listener
    // if(!navbar) {
      if(navbar) {
        

        document.addEventListener("mousedown", handleOutsideClicks);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleOutsideClicks);
        }
      };
    // }

  }, [navbar])

  if (!mounted) {
    return null
  }

  
  // console.log(theme)
  return (
    <div className={`flex w-full sm:justify-between py-4 px-4  dark:text-white dark:bg-black bg-gradient-to-t from-[#fcfbfb] via-[#ffffff] to-[#ffffff] dark:from-[#000000] dark:to-black `}>
      <div className='heading md:ml-24'>
        <p className='text-2xl'>Portfolio.</p>
      </div>
      <div className='md:flex hidden space-x-16'>
        <ul className='space-x-12 flex lg:ml-96'>
          <Link href="/" className='text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'><span className=''>Home</span></Link>
          <Link href="#projects" className='text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>Project</Link>
          <Link href="#skills" className='text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>Skills</Link>
          <Link href="#contact" className='text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300'>Contact</Link>
          
        </ul>
        {theme === 'dark' ?
            <button onClick={() => setTheme('light')}>
              <BsSun size={25} cursor='pointer' />
            </button>
            :
            <button onClick={() => setTheme('dark')}>
              <FiMoon size={25} cursor='pointer' />
            </button>}
      </div>

      <div className='' ref={navbarRef} onClick={() => setNavbar(!navbar)}>
        <div className="space-y-2 md:hidden hover:bg-gray-300 p-2 absolute right-4" >
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </div>
        {/* {
          navbar? */}
        <div  className={`right-2  bg-black/50 text-white transition-all duration-150  rounded-md w-full mt-12 z-10 ${navbar ? 'absolute' : 'hidden'}`}>
          <Link href="" className='block py-2 px-4 text-lg'>Home</Link>
          <Link href="" className='block py-2 px-4 text-lg'>Project</Link>
          <Link href="" className='block py-2 px-4 text-lg'>Skills</Link>
          <Link href="" className='block py-2 px-4 text-lg'>Contact</Link>
          <div className='py-2 px-4'>
          {theme === 'dark' ?
            <button onClick={() => setTheme('light')}>
              <BsSun size={25} cursor='pointer' />
            </button>
            :
            <button onClick={() => setTheme('dark')}>
              <FiMoon size={25} cursor='pointer' />
            </button>}
            </div>
        </div>
        {/* : null
        }  */}
      </div>
    </div>
  )
}

export default Navbar
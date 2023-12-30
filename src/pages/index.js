import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Inter, Roboto } from 'next/font/google'
import Navbar from '@/components/navbar'
import { HiArrowLeft } from "react-icons/hi2";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Link from 'next/link';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])





  const [navbar, setNavbar] = useState(false)

  return (
    <main
      className={` ${roboto.className} pb-10`}
    >
      {/* <Navbar/> */}

      <div className="w-full dark:to-[#000000] pb-20 bg-gradient-to-t from-[#08C3D1] via-[#c7c7c7] to-[#ffffff] dark:via-[#20232C] py-8" >
        <div className="lg:flex mx-6 lg:mx-20 bg-white dark:bg-[#20232c] rounded-xl p-6 py-16 md:px-24" >
          <div className="lg:hidden flex justify-center" data-aos='fade-down'>
            <Image src='/assets/images/Group_1.png' alt='Display Image' width={300} height={200} />
          </div>
          <div className=' text-center lg:text-left  pt-6 ' data-aos='fade-up'>
            <h1 className='font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-50% to-slate-800 dark:from-slate-200/60 dark:to-50% dark:to-slate-200'>HEY I&apos;M DANISH PATEL</h1>
            <h3 className='uppercase md:leading-10 '>And I&apos;m a <span className='text-[#08C3D1] ' data-aos='fade-up'>fullstack Developer</span></h3>
            <p className='lg:w-[47%] text-[#CBB6B7] transition duration-700 text-center lg:text-left'>An accomplished full-stack developer with an exceptional command of the MERN stack, demonstrating unwavering dedication to delivering high-quality solutions. </p>
            <div className='mt-8 flex justify-center lg:justify-start leading-10'>
              <Link href='https://drive.google.com/file/d/1F9fgIiz0CdTqQA06F0pd3_xzDpUJnNlg/view?usp=sharing' target='_blank' className=' py-1 px-3 rounded-xl border-2 border-[#08C3D1] transition-color duration-500 hover:bg-[#08C3D1] hover:-translate-y-3 hover:shadow-xl hover:shadow-[#546E7A]'>
                Get My Resume
              </Link>
              {/* <HiArrowLeft color='#08C3D1' className='mt-4 mx-10 hover:-translate-x-4 ease-in-out duration-500' size={25} cursor='pointer' /> */}
            </div>
          </div>
          <div className="hidden lg:block justify-center" data-aos="fade-left">
            <Image src='/assets/images/Group_1.png' alt='Display Image' width={700} height={700} />
          </div>
          {/* <div className="md:px-28 md:mr-40 sm:mx-10 absolute inset-0 mt-36 flex justify-center md:justify-end ">
          <div className='absolute rounded rotate-[60deg] md:mt-28 w-40 h-[100px] border border-[#08c3d1] bg-[#08c3d1]'></div>
            <div className="absolute rounded -rotate-[60deg]  md:mt-28 w-40 h-[100px] border border-[#08c3d1] bg-[#08c3d1] "></div>
            <div className="absolute rounded  md:mt-28 w-40 h-[100px] border border-[#08c3d1] bg-[#08c3d1]"></div>
          </div> */}

        </div>
      </div>

      <div className="">
        <h3 className='uppercase text-center mt-8 text-4xl font-semibold ' data-aos='fade-up'>The <span className='text-[#08c3d1]' >Creative Mind</span> Behind Your Next <span className='text-[#08c3d1]'>Project</span></h3>

        <div className="flex flex-wrap justify-center md:justify-around mt-8" >
          <div className='max-w-sm px-6 items-center' >
            <div className=" flex justify-center" data-aos="fade-up">
              <Image src='/assets/images/reactNativeImg.png' alt='react-native image' width={300} height={300} />
            </div>
            <h3 className='uppercase text-center font-semibold' data-aos="fade-up">React native developer</h3>
            <p className='text-[#CBB6B7] text-center pt-4 ' data-aos="fade-up">Specializes in building Android Applications using the React Native. Develops reusable components, manages state, and integrates with backend services</p>
          </div>
          <div className='max-w-sm px-6' >
            <div className="flex justify-center" data-aos="fade-up">
              <Image src='/assets/images/MERNImg.png' alt='react-native image' width={300} height={300} />
            </div>
            <h3 className='uppercase text-center font-semibold' data-aos="fade-up">MERN Stack Developer</h3>
            <p className='text-[#CBB6B7] text-center pt-4' data-aos="fade-up">Develops full-stack web applications using the MERN (MongoDB, Express, React, Node.js) stack. Manages databases, server, and client-side logic.</p>
          </div>
          <div className='max-w-sm px-6' >
            <div className="flex justify-center" data-aos="fade-up">
              <Image src='/assets/images/webDesigner.png' alt='react-native image' width={300} height={300} />
            </div>
            <h3 className='uppercase text-center' data-aos="fade-up">Web Designer</h3>
            <p className='text-[#CBB6B7] text-center pt-4' data-aos="fade-up">Creates visually appealing and user-friendly web designs. Works closely with frontend developers to ensure designs are implemented effectively.</p>
          </div>

        </div>
      </div>

      <div className="w-full pt-16">
        <h3 className='uppercase text-center mt-8 text-4xl font-semibold' data-aos='fade-up'>My Creative <span className='text-[#08c3d1]'>Portfolio</span> section</h3>
        <div className='w-screen overflow-scroll md:overflow-hidden flex space-x-4 md:space-x-10 px-4 my-6 py-10 sm:justify-center'>
          <button className='border-2 border-[#08C3D1] rounded-full px-8 shadow-lg shadow-[#08c3d1] ' data-aos='fade-up'>React</button>
          <button className='border-2 border-[#08C3D1] rounded-full px-8 shadow-lg shadow-[#08c3d1] ' data-aos='fade-up'>Android</button>
          <button className='border-2 border-[#08C3D1] rounded-full px-8 shadow-lg shadow-[#08c3d1] ' data-aos='fade-up'>IOS</button>
          <button className='border-2 border-[#08C3D1] rounded-full px-8 shadow-lg shadow-[#08c3d1] ' data-aos='fade-up'>MERN</button>
        </div>

        <div className="mt-12 grid place-items-center ">
          <Image src='/assets/images/krystal_research.png' className='rounded-xl' alt='Portfolio image' width={500} height={400} data-aos='fade-up' />

        </div>
      </div>
      <div className="">
        <h3 className='uppercase text-center mt-8 text-4xl font-semibold' data-aos="fade-up">My <span className='text-[#08c3d1]'>Skillset</span></h3>
        <div className='pt-8'>
          <h4 className='text-[#CBB6B7] text-center font-semibold' data-aos="fade-up">CORE LANGUAGES</h4>
          <div className="flex justify-center px-4 pt-8 md:space-x-28 space-x-12" data-aos="fade-up">
            <div className=''>
              <Image src='/assets/images/C_programming.png' alt='C programming image' width={81.36} height={75} />
              <h5 className='text-center pt-3'>C</h5>
            </div>
            <div className=''>
              <Image src='/assets/images/javascript.png' alt='Javascript image' width={75} height={75} />
              <h5 className='text-center pt-3'>Javascript</h5>
            </div>
            <div className=''>
              <Image src='/assets/images/python.png' alt='Python image' width={75} height={74.71} />
              <h5 className='text-center pt-3'>Python</h5>
            </div>
          </div>
        </div>
        <div className='pt-16'>
          <h4 className='text-[#CBB6B7] text-center uppercase font-semibold' data-aos="fade-up">frontend technologies</h4>
          <div className="flex flex-wrap justify-center md:space-x-12">
            <div className='flex md:justify-center justify-between space-x-12' data-aos="fade-up">
              <div className='mt-8 ' >
                <Image src='/assets/images/html.png' alt='html image' width={75} height={74.71} />
                <h5 className='text-center pt-3'>HTML5</h5>
              </div>
              <div className='mt-8 '>
                <Image src='/assets/images/css.png' alt='css image' width={75} height={74} />
                <h5 className='text-center pt-3'>CSS3 </h5>
              </div>
              <div className='mt-8'>
                <Image src='/assets/images/tailwindcss.png' alt='tailwind image' width={75} height={75} />
                <h5 className='pt-3 text-center'>Tailwind CSS</h5>
              </div>
            </div>

            <div className='flex md:justify-center justify-between space-x-12' data-aos="fade-up">
              <div className=' mt-8'>
                <Image src='/assets/images/react.png' alt='react image' width={82} height={75} />
                <h5 className='text-center pt-3'>React</h5>
              </div>
              <div className='mt-8 '>
                <Image src='/assets/images/nextjs.png' alt='nextjs image' width={75} height={75} />
                <h5 className='text-center pt-3'>NextJs</h5>
              </div>
              <div className='mt-8 '>
                <Image src='/assets/images/redux.png' alt='redux image' width={78.69} height={75} />
                <h5 className='text-center pt-3'>Redux</h5>
              </div>
            </div>

            <div className='flex md:justify-center justify-between space-x-12' data-aos="fade-up">
              <div className='mt-8'>
                <Image src='/assets/images/reactnative.png' alt='react native image' width={78.69} height={75} />
                <h5 className='text-center pt-3'>React Native</h5>
              </div>
              <div className='mt-8'>
                <Image src='/assets/images/ionic.png' alt='Ionic image' width={78.69} height={75} />
                <h5 className='text-center pt-3'>Ionic React</h5>
              </div>
              <div className='mt-8'>
                <Image src='/assets/images/bootstrap.png' alt='Bootstrap image' width={78.69} height={75} />
                <h5 className='text-center pt-3'>Bootstrap</h5>
              </div>
            </div>

          </div>
          <div className='mt-16'>
            <h4 className='text-[#CBB6B7] text-center uppercase font-semibold' data-aos="fade-up">backend technologies</h4>
            <div className="flex justify-center px-4 pt-8 md:space-x-28 space-x-12" data-aos="fade-up">
              <div className=''>
                <Image src='/assets/images/nodejs.png' alt='nodejs image' width={75} height={75} />
                <h5 className='text-center pt-3'>NodeJs</h5>
              </div>
              <div className=''>
                <Image src='/assets/images/express.png' alt='express image' width={75} height={75} />
                <h5 className='text-center pt-3'>Express</h5>
              </div>

            </div>
            <div className='mt-16' >
              <h4 className='text-[#CBB6B7] text-center uppercase font-semibold' data-aos="fade-up">Databases</h4>
              <div className="flex justify-center px-4 pt-8 md:space-x-28 space-x-12" data-aos="fade-up">
                <div className=''>
                  <Image src='/assets/images/mongoDB.png' alt='mongoDB image' width={75} height={75} />
                  <h5 className='text-center pt-3'>MongoDB</h5>
                </div>
                <div className=''>
                  <Image src='/assets/images/MYSQL.png' alt='MYSQL image' width={75} height={75} />
                  <h5 className='text-center pt-3'>MYSQL</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-16">
          <h3 className='uppercase text-center mt-8 text-4xl font-semibold' data-aos='fade-up'>Let&apos;s have a <span className='text-[#08c3d1]'>conversation</span></h3>
          <div className='grid place-items-center'>
            <div className="md:w-[50%] w-80 pt-16">
              <h6 className='px-2 py-1 text-2xl'>Full Name*</h6>
              <input type="text" placeholder='Enter your full name' className='w-[100%] py-2 px-2 border-2 border-[#08c3d1] focus:outline-none focus:ring focus:ring-[#08c3d1] rounded-xl dark:bg-gradient-to-t from-[#08C3D1]  via-[#c7c7c7] to-[#ffffff] dark:via-[#20232C]' />
            </div>
            <div className="md:w-[50%] w-80 pt-6">
              <h6 className='px-2 py-1 text-2xl'>Email*</h6>
              <input type="text" placeholder='Enter your Email' className='w-[100%] py-2 px-2 border-2 border-[#08c3d1] focus:outline-none focus:ring focus:ring-[#08c3d1] rounded-xl dark:bg-gradient-to-t from-[#08C3D1]  via-[#c7c7c7] to-[#ffffff] dark:via-[#20232C]' />
            </div>
            <div className="md:w-[50%] w-80 pt-6">
              <h6 className='px-2 py-1 text-2xl'>Message*</h6>
              <textarea rows='5' placeholder='Enter your Message' className='w-[100%] py-2 px-2 border-2 border-[#08c3d1] focus:outline-none focus:ring focus:ring-[#08c3d1] rounded-xl dark:bg-gradient-to-t from-[#08C3D1]  via-[#c7c7c7] to-[#ffffff] dark:via-[#20232C]' />
            </div>
            <div className='mt-8 flex justify-center lg:justify-start leading-10'>
              <button className='py-1 px-10 rounded-xl border-2 border-[#08C3D1] transition-color duration-500 hover:bg-[#08C3D1] hover:-translate-y-3 hover:shadow-xl hover:shadow-[#546E7A]'>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

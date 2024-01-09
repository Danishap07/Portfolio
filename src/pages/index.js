import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { Inter, Roboto, Bebas_Neue } from 'next/font/google'
import Navbar from '@/components/navbar'
import { HiArrowLeft } from "react-icons/hi2";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Link from 'next/link';
import Horizontalcorousel from '@/components/horizontalCorousel';
import { motion, useTransform, useScroll, useSpring } from 'framer-motion'
import AnimatedText from '@/components/animatedText'
import SmoothScroll from '@/components/smoothScroll'
import axios from 'axios'


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const bebas_neue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {

  const targetRef = useRef(null)

  const [fullname, setFullname] = useState("");
  const [email, setEmail]  = useState("");
  const [message, setMessage] = useState("");
  const [errFullname, setErrFullname] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-67%"])

  const handleContact = async () => {
    // e.preventDefault()
    setErrFullname("");
    setErrEmail("");
    setErrMessage("");
    var formIsValid = true;

    if(!fullname) {
      setErrFullname("Fullname is required.")
      return formIsValid = false;
    }
    if(fullname.length < 3) {
      setErrFullname("Please enter a valid fullname.");
      return formIsValid = false;
    }
    if(!email) {
      setErrEmail("Email is required.");
      return formIsValid = false;
    }
    if(!message) {
      setErrMessage("Please enter a message.");
      return formIsValid = false;
    }

    const passData = {
      fullname: fullname,
      email: email,
      message: message
    }

    const res = await axios.post("https://authentication-system-tz0c.onrender.com/api/contact", passData, {
     Hearders: { "Content-Type": "application/json" }
    })
    if(res.status) {
      console.log(res)
      setFullname("");
      setEmail("");
      setMessage("");
    }
    else{
      console.log(res)
    }

  }
  
  return (
    <>
      <Head>
        <title>Portfolio || Danish Patel</title>
        <link rel="icon" href="/assets/logos/logo.png" />
      </Head>
      {/* <SmoothScroll> */}
      <Navbar />
      <main
        className={` ${roboto.className} pb-10 ` }
        // style={smoothProgress}
        // ref={contentRef}
        >
        {/* <Navbar/> */}


        <div className="w-full dark:to-[#000000] pb-20 bg-gradient-to-t from-[#08C3D1] via-[#c7c7c7] to-[#ffffff] dark:via-[#20232C] py-8" >

          <div className="lg:flex mx-6 lg:mx-20 bg-white dark:bg-[#20232c] rounded-xl p-6 py-16 md:px-24" >
            <div className="lg:hidden flex justify-center" data-aos='fade-down'>
              <Image src='/assets/images/Group_1.png' alt='Display Image' width={300} height={200} />
            </div>
            <div className=' text-center lg:text-left  pt-6 ' data-aos='fade-up'>
              <h1
                className='font-extrabold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-600 to-50% to-slate-800 dark:from-slate-200/60 dark:to-50% dark:to-slate-200'
              >
                HEY I&apos;M DANISH PATEL
              </h1>
              <h3 className='uppercase md:leading-10 '>
                And I&apos;m a <span className='text-[#08C3D1] ' data-aos='fade-up'>fullstack Developer</span>
              </h3>
              <p className='lg:w-[47%] text-[#CBB6B7] transition duration-700 text-center lg:text-left'>
                An accomplished full-stack developer with an exceptional command of the MERN stack, demonstrating unwavering dedication to delivering high-quality solutions.
              </p>
              <div className='mt-8 flex justify-center lg:justify-start leading-10'>

                <Link href='https://drive.google.com/file/d/1F9fgIiz0CdTqQA06F0pd3_xzDpUJnNlg/view?usp=sharing' target='_blank' className=' py-1 px-3 rounded-xl border-2 border-[#08C3D1] transition-color duration-500 hover:bg-[#08C3D1] hover:-translate-y-3 hover:shadow-xl hover:shadow-[#546E7A]'>
                  Get My Resume
                </Link>
              </div>
            </div>

            <div className="hidden lg:block justify-center" data-aos="fade-left">
              <Image src='/assets/images/Group_1.png' alt='Display Image' width={700} height={700} />
            </div>

          </div>
        </div>

        <div className="">
          <h3 className='uppercase text-center mt-8 text-4xl font-semibold ' data-aos='fade-up'>The <span className='text-[#08c3d1]' >Creative Mind</span> Behind Your Next <span className='text-[#08c3d1]'>Project</span></h3>

          <div className="flex flex-wrap justify-center md:justify-around mt-8" >
            <div className='max-w-sm px-6 items-center' >
              <div className=" flex justify-center" data-aos="fade-up">
                <Image src='/assets/img/MERN_img.png' alt='react-native image' width={300} height={300} />
              </div>
              <h3 className='uppercase text-center font-semibold' data-aos="fade-up">React native developer</h3>
              <p className='text-[#CBB6B7] text-center pt-4 ' data-aos="fade-up">Specializes in building Android Applications using the React Native. Develops reusable components, manages state, and integrates with backend services</p>
            </div>
            <div className='max-w-sm px-6' >
              <div className="flex justify-center" data-aos="fade-up">
                <Image src='/assets/img/designer_img.png' alt='react-native image' width={300} height={300} />
              </div>
              <h3 className='uppercase text-center font-semibold' data-aos="fade-up">MERN Stack Developer</h3>
              <p className='text-[#CBB6B7] text-center pt-4' data-aos="fade-up">Develops full-stack web applications using the MERN (MongoDB, Express, React, Node.js) stack. Manages databases, server, and client-side logic.</p>
            </div>
            <div className='max-w-sm px-6' >
              <div className="flex justify-center" data-aos="fade-up">
                <Image src='/assets/img/reactnative_img.png' alt='react-native image' width={300} height={300} />
              </div>
              <h3 className='uppercase text-center' data-aos="fade-up">Web Designer</h3>
              <p className='text-[#CBB6B7] text-center pt-4' data-aos="fade-up">Creates visually appealing and user-friendly web designs. Works closely with frontend developers to ensure designs are implemented effectively.</p>
            </div>

          </div>
        </div>

        <div className="w-full pt-16" >
          <h3 className='uppercase text-center mt-8 text-4xl font-semibold' data-aos='fade-up' >My Creative <span className='text-[#08c3d1]'>Portfolio</span> section</h3>
          <div className='w-screen overflow-scroll md:overflow-hidden flex space-x-4 md:space-x-10 px-4 my-6 py-10 sm:justify-center'>
            <button className='border-2 border-[#08C3D1] rounded-full px-8 shadow-lg shadow-[#08c3d1] ' data-aos='fade-up'>React</button>
            <button className='border-2 border-[#08C3D1] rounded-full px-8 shadow-lg shadow-[#08c3d1] ' data-aos='fade-up'>Android</button>
            <button className='border-2 border-[#08C3D1] rounded-full px-8 shadow-lg shadow-[#08c3d1] ' data-aos='fade-up'>IOS</button>
            <button className='border-2 border-[#08C3D1] rounded-full px-8 shadow-lg shadow-[#08c3d1] ' data-aos='fade-up'>MERN</button>
          </div>
          {/* <Horizontalcorousel /> */}
          <section ref={targetRef} className='relative h-[300vh] w-auto' data-aos='fade-up' id='projects'>
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
              <motion.div style={{ x }} className="flex gap-4 scroll-smooth">
                <div className='group relative h-screen w-screen overflow-hidden bg-gradient-to-b from-[#EBB23B] to-[#ffffff]' >
                  <div className='md:flex md:justify-around'>
                    <Image src='/assets/images/shopperbees_mockup.png' className='ml-2 mt-6 rounded-xl' alt='Portfolio image' width={700} height={400} />
                    <div className='px-8 md:my-32 align-bottom text-black md:mx-10 mt-6'>
                      <h3 className={` font-bold text-3xl text-[#1c2155] uppercase`}>Shopper Bee&apos;s</h3>
                      <h4 className={`font-bold text-2xl text-[#141414]`}>E-commerce Website</h4>
                      <p className={` text-[#141414] text-xl font-semibold mt-4`}>Redesigned Shopper Bee’s e-commerce website to enhance user experience and boost online sales. Focused on improving navigation, product discovery, and checkout process while maintaining brand consistency.</p>
                    </div>

                  </div>
                </div>
                <div className='group relative h-screen w-screen overflow-hidden bg-gradient-to-t from-[#ffffff] via-[#8bdada] to-[#5bdcdc] ' >
                  <div className='md:flex md:justify-around mt-6'>
                    <div className='md:w-[50%] px-8 md:mx-8 md:my-32 align-bottom text-black'>
                      <h3 className=' font-bold text-3xl text-[#1c2155] uppercase'>Krystal Research Solutions</h3>
                      {/* <h4 className='font-bold pt-5 text-2xl text-[#0e0e0e]'>Development of a Dynamic Research Marketing Website.</h4> */}
                      <p className='text-[#0e0e0e] font-semibold text-xl md:pr-16'>Empowering the Qualitative and Quantitative Healthcare Market Research Services with a Rigorously Authenticated Panel.</p>
                      <div className='py-6'>
                        <Link href="https://www.krystalresearch.com/" target='_blank'>
                          <Image src={'/assets/logos/link_img.png'} alt="Link" width={25} height={15} />
                        </Link>
                      </div>
                    </div>
                    <div className='h-screen md:w-[50%] mx-2 mt-4'>
                      <Image src='/assets/images/krystal_mockup.png' className='rounded-xl' alt='Portfolio image' width={550} height={400} />
                    </div>
                  </div>
                </div>
                <div className='group relative h-screen w-screen overflow-hidden bg-gradient-to-b from-[#00CC99] via-[#76b6a6] to-[#ffffff]' >
                  <div className='md:flex md:justify-around mt-6'>
                    <div className='md:w-[50%] px-8 md:mx-8 md:my-32 align-bottom text-black'>
                      <h3 className=' font-bold text-3xl text-[#1c2155] uppercase'>Authentication System</h3>
                      {/* <h4 className='font-bold pt-5 text-2xl text-[#0e0e0e]'>Development of a Dynamic Research Marketing Website.</h4> */}
                      <p className='text-[#000000] font-semibold text-xl md:pr-16 pt-4'>This Project Uses React.js, HTML, TailwindCSS and Node.js with a MYSQL database for authenticating to Weather API integrated website.</p>
                    </div>
                    <div className='h-screen md:w-[50%] mx-2 mt-4'>
                      <Image src='/assets/images/auth_mockup.png' className='rounded-xl' alt='Portfolio image' width={550} height={400} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
        <div className="" id='skills'>
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
                  <Image className='bg-white overflow-hidden rounded-full border border-white' src='/assets/images/nextjs.png' alt='nextjs image' width={76} height={76} />
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
                  <Image className="rounded-full m-0 p-0 transition scale-105" src='/assets/img/nodejs_img.png' alt='nodejs image' width={75} height={75} />
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
                    <Image src='/assets/img/mongoDB_img.webp' alt='mongoDB image' width={75} height={75} />
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
          <div className="w-full pt-16" >
            <h3 className='uppercase text-center mt-8 text-4xl font-semibold' data-aos='fade-up' id='contact'>Let&apos;s <span className='text-[#08c3d1]'>Connect</span></h3>
            <div className='grid place-items-center'>

              <div className="md:w-[50%] w-80 pt-16">
                <h6 className='px-2 py-1 text-2xl'>Full Name*</h6>
                <input 
                  type="text" 
                  placeholder='Enter your full name' 
                  className='w-[100%] py-2 px-2 border-2 border-[#08c3d1] focus:outline-none focus:ring focus:ring-[#08c3d1] rounded-xl  from-[#08C3D1]  via-[#c7c7c7] to-[#ffffff] dark:via-[#20232C]'
                  value={fullname} 
                  onChange={(e) => setFullname(e.target.value)} 
                />
                <h6 className='text-xl font-normal text-red-500'>{errFullname}</h6>
              </div>

              <div className="md:w-[50%] w-80 pt-6">
                <h6 className='px-2 py-1 text-2xl'>Email*</h6>
                <input 
                  type="text" 
                  placeholder='Enter your Email' 
                  className='w-[100%] py-2 px-2 border-2 border-[#08c3d1] focus:outline-none focus:ring focus:ring-[#08c3d1] rounded-xl  from-[#08C3D1]  via-[#c7c7c7] to-[#ffffff] dark:via-[#20232C]' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <h6 className='text-xl font-normal text-red-500'>{errEmail}</h6>
              </div>

              <div className="md:w-[50%] w-80 pt-6">
                <h6 className='px-2 py-1 text-2xl'>Message*</h6>
                <textarea 
                  rows='5' 
                  placeholder='Enter your Message' 
                  className='w-[100%] py-2 px-2 border-2 border-[#08c3d1] focus:outline-none focus:ring focus:ring-[#08c3d1] rounded-xl  from-[#08C3D1]  via-[#c7c7c7] to-[#ffffff] dark:via-[#20232C]' 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)} 
                />
                <h6 className='text-xl font-normal text-red-500'>{errMessage}</h6>
              </div>

              <div className='mt-8 flex justify-center lg:justify-start leading-10'>
                <button 
                  className='py-1 px-10 rounded-xl border-2 border-[#08C3D1] transition-color duration-500 hover:bg-[#08C3D1] hover:-translate-y-3 hover:shadow-xl hover:shadow-[#546E7A]' 
                  onClick={() => handleContact()} 
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

      </main>
      {/* </SmoothScroll> */}
    </>
  )
}

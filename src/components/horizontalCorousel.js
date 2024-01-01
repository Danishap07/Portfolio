import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import AOS from 'aos'
import { motion, useTransform, useScroll } from 'framer-motion'

function Horizontalcorousel() {
    const targetRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: targetRef,
    })

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"])

    useEffect(() => {
        AOS.init({ duration: 1000 })
      }, [])


    return (
        <section ref={targetRef} className='bg-purple-600 relative h-[300vh] '>
            <div className="sticky top-0 h-screen grid place-items-end overflow-hidden">
                <div className="flex">
                    <motion.div style={ x } className='' data-aos='fade-up'>
                        <h3></h3>
                        <Image src='/assets/images/shopperbees_mockup.png' className='rounded-xl' alt='Portfolio image' width={700} height={400} />
                    </motion.div>
                    <div className='' data-aos='fade-up'>
                        <h3></h3>
                        <Image src='/assets/images/shopperbees_mockup.png' className='rounded-xl' alt='Portfolio image' width={700} height={400} />
                    </div>
                    <div className='' data-aos='fade-up'>
                        <h3></h3>
                        <Image src='/assets/images/shopperbees_mockup.png' className='rounded-xl' alt='Portfolio image' width={700} height={400} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Horizontalcorousel
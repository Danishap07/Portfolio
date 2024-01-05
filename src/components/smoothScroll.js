import { useScroll, useSpring, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react'

function SmoothScroll({ children }) {
    const contentRef = useRef(null);
    const [content_height, set_content_height] = useState(0);
    const [window_height, set_window_height] = useState(0);
    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        handleResize()

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [contentRef])

    const handleResize = () => {
        if (contentRef.current != null) {
            set_content_height(contentRef.current.scrollHeight);
        }
        set_window_height(window.innerHeight)
    }

    // inte4rcept normal scroll behavior
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    })

    useMotionValueEvent(smoothProgress, "change", (latest) => {
        if(latest === 0) {
            setIsLoading(false);
        }
    })

    const y = useTransform(smoothProgress, (value) => {
        return value * -(content_height - window_height)
    })

    return (
        <>
            <div style={{ height: content_height }} />
            <motion.div className='w-screen fixed top-0 flex flex-col' ref={contentRef} style={{ y: isLoading?0 : y }}>
                {children}
            </motion.div>
        </>
    )
}

export default SmoothScroll
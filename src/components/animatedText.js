import React from 'react'
import { motion } from 'framer-motion'

const defaultAnimation = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0
    }
}

function AnimatedText({
    text, 
    el: Wrapper = "p",
    className
}) {

    
  return (
    <Wrapper className={className}>
        <span className='sr-only'>{text}</span>
        <motion.span 
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            aria-hidden
        >
            {text.split("").map((char, i) => (
                <motion.span key={i} className='inline-block' variants={defaultAnimation}>
                    {char}
                </motion.span>
            ))}
        </motion.span>
    </Wrapper>
  )
}

export default AnimatedText
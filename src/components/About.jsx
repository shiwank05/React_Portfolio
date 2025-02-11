import React from 'react'
import aboutImg from '../assets/about1.jpg';
import { motion } from "framer-motion"
const About = () => {
  return (
    <div  className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text-center text-4xl'> About
         <span className='text-neutral-500'> Me
        </span>
        </h1>
    <div  className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:0.5}} 
             className='flex items-center justify-center'>
                <img src = {aboutImg} alt='About' className='max-w-[200px] lg:max-w-[300px] h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110'></img>
            </motion.div>
            </div>
            <div className='w-full lg:w-1/2 '>
                <motion.div whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                 className='flex justify-center text-justify lg:justify-start '>
                    <p className='my-4 max-w-xl py-6 font-medium '>
                        Hello! I'm Shiwank Kumar from Hajipur, Bihar, currently living in Chennai, where I’m pursuing my B.Tech in Computer Science and Engineering at SRM Institute of Science and Technology.
                        <br></br>
                        <br></br>
                        Over the past two years, I’ve immersed myself in hackathons and hands-on projects, gaining practical experience while exploring new technologies. These experiences have strengthened my problem-solving skills and deepened my understanding of real-world applications.
                        <br></br>
                        <br></br>
                        I have an interest in web development and cross-platform mobile development and enjoy working on practical projects to enhance my skills.
                    </p>
                </motion.div>
            </div>
        </div>
    </div> 
  )
}

export default About  
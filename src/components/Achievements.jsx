import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';

const Achievements = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 1, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl'
            >
                Achievements
            </motion.h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4'>
                {ACHIEVEMENTS.map((achievement, index) => (
                    <motion.div 
                        key={index} 
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.8 }}
                        className='p-4 rounded-lg shadow-lg'
                    >
                        <div className="w-full h-64 flex items-center justify-center rounded-lg overflow-hidden">
                            <motion.img 
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -50 }}
                                transition={{ duration: 1 }}
                                src={achievement.image} 
                                alt={achievement.title} 
                                className='w-full h-full object-contain rounded-lg' 
                            />
                        </div>
                        <h6 className='mt-4 text-lg font-semibold'>{achievement.title}</h6>
                        <p className='text-neutral-400 text-sm mt-2'>{achievement.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Achievements;

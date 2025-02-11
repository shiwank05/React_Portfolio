import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbFileTypeSql } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { BiLogoCPlusPlus } from "react-icons/bi";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiPandas } from "react-icons/si";

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
          <SiHtml5 className='text-7xl text-orange-600' />
          <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
            HTML
          </span>
        </div>
        <div className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
          <SiCss3 className='text-7xl text-blue-600' />
          <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
            CSS
          </span>
        </div>
        <div className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
          <RiTailwindCssFill className='text-7xl text-cyan-400' />
          <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
            Tailwind CSS
          </span>
        </div>
        <div className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
          <RiReactjsLine className='text-7xl text-cyan-400' />
          <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
            React
          </span>
        </div>
        <div className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
          <TbFileTypeSql className='text-7xl text-black-400' />
          <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
            SQL
          </span>
        </div>
        <div className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
          <BiLogoCPlusPlus className='text-7xl text-neutral-400' />
          <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
            C++
          </span>
        </div>
        <div className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPython className='text-7xl text-grey-400' />
          <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
            Python
          </span>
        </div>
        <div className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
          <SiNumpy className='text-7xl text-blue-400' />
          <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
            NumPy
          </span>
        </div>
        <div className='relative group rounded-2xl border-4 border-neutral-800 p-4'>
          <SiPandas className='text-7xl text-red-400' />
          <span className='absolute bottom-8 left-1/2 -translate-x-1/2 translate-y-8 rounded bg-neutral-800 px-2 py-1 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100'>
            Pandas
          </span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

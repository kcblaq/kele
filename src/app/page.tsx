// import { motion } from 'framer-motion';
"use client"
import { IoLogoAmplify } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { VscFilePdf } from "react-icons/vsc";
import { IoCheckbox } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { TbBrandMongodb } from "react-icons/tb";
import { PiFigmaLogoLight } from "react-icons/pi";
import { SiPostgresql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import Head from 'next/head'


// import { IoLogoJavascript } from "react-icons/io";


import { useState } from 'react';
import Welcome from "@/components/Welcome";
import GlobalReformation from "@/components/projects/GlobalReformation";
import Kejepay from "@/components/projects/Kejepay";
import Shortchase from "@/components/projects/Shortchase";
import Zummit from "@/components/projects/Zummit";
import Haloasset from "@/components/projects/Haloasset";


export default function Home() {
const [current, setCurrent] = useState('Welcome');

  // const bgImage = 'https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg';
  // const image2 = 'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  
  const projects = [{name:'Shortchase', link: 'https://shortchaseclient.netlify.app/'}, 
  // {name:'Kejepay', link:'https://kele.netlify.app/'} , 
  {name:'Zummit', link:'https://zummitafrica.com/'}, {name:'Hallo', link:'https://www.haloasset.com/'}, 
  // 'Oobla', 
  // 'PX Pharma', 
  {name:'GlobalReformation', link: 'https://globalreformationnetwork.org/'}]
  const toolset = [{name:'Javascript', icon: <TbBrandJavascript/>}, {name:'ReactJS', icon: <FaReact/>},{name:'ExpressJS', icon: <SiExpress/>}, {name:'ReactNative', icon: <TbBrandReactNative/>}, {name: 'NextJS', icon: <TbBrandNextjs/>},{name:'MongoDB', icon: <TbBrandMongodb/>}, {name:'Figma', icon: <PiFigmaLogoLight/>}, {name:'Postgress', icon: <SiPostgresql/>}, {name:'Prisma', icon: <SiPrisma/>}]

  // const proficiency = ['OOP', 'UX Search', 'UI Designs', 'Frontend', 'DBMS', 'Backend', 'Docker', 'Mobile App']

  return (
    <section
    className={`relative flex w-full bg-bg h-full md:h-screen flex-col no-scrollbar scrollbar-none text-[#C5C6C7] no-scrollbar`}
    
    >
      <Head>
        <title> Kelechi </title>
  
      </Head>
      {/* <div className="overlay"></div> */}

      <div className="flex w-full justify-between items-center p-3 md:p-8">
        <span className='md:text-6xl text-3xl  cursor-pointer transform transition-transform duration-300 hover:scale-125 '
        onClick={()=> window.location.reload()}
        >
          <IoLogoAmplify />
          {/* <img src='/logok.png' alt='Logo ' className='h-20' /> */}
        </span>
        <span className='md:text-3xl flex gap-5 text-base items-center '>
          <a href="https://github.com/kcblaq?tab=overview" target='_blank'>
          <span className="cursor-pointer  transform transition-transform duration-300 hover:scale-125" >
          <FaGithub  />
          </span>
          </a>
          <a href="mailto:ugwujameskelechi@gmail.com" target='_blank'>
          <span className="cursor-pointer transform transition-transform duration-300 hover:scale-125" >
          <TfiEmail />
          </span>
          </a>
          <a href='https://drive.google.com/file/d/1TV_U607OCLPeX8RXdFof6hxlUZL-ZYjb/view?usp=sharing' download>

          <span  className="cursor-pointer transform transition-transform duration-300 hover:scale-125">
          <VscFilePdf  />
          </span>
          </a>
        </span>
      </div>

      <div className="flex flex-col md:flex-row  w-full justify-between items-center">
        <div className='flex w-full md:w-2/3 h-full'>
        {
          current == 'Welcome' ? <Welcome/>
          : current == 'Shortchase' ? <Shortchase url='https://shortchaseclient.netlify.app/'/>
          : current =='Kejepay'? <Kejepay url='https://kejepay.com.ng/' />
          : current == 'GlobalReformation'? <GlobalReformation url='https://globalreformationnetwork.org/'/>
          : current == 'Zummit'? <Zummit url='https://zummitafrica.com/'/>
          : current == 'Hallo'? <Haloasset url='https://www.haloasset.com/'/>
          : null
        }
        </div>
        <div className={`flex flex-col w-full md:w-1/3 h-full items-start md:p-8 p-3 text-text`}>
        {/* <h1 className=' font-bold text-3xl flex items-center gap-2'> Projects<IoCheckbox/> </h1> */}
        <h1 className=' font-bold text-3xl flex items-center gap-2'> Projects: </h1>
        <div className="flex flex-wrap gap-2">
        {
          projects.map((project) => <p className={`${current === project.name && 'text-[#66FCF1] border-[#66FCF1]' } border transform transition-transform duration-300 hover:scale-110 font-bold cursor-pointer text-center mt-4 p-2 py-1 shadow-lg rounded-3xl  hover:text-[#66FCF1] hover:border-[#66FCF1]`} onClick={()=> setCurrent(project.name)}>{project.name} </p> )
        }
        </div>

        {/* <h1 className=' font-bold text-3xl flex items-center gap-1 mt-4'> Proficiency: </h1>
        <div className="flex flex-wrap text-2xl gap-2">
        {
          proficiency.map((project) => <p className={`  font-bold flex items-center text-center mt-4 py-1 shadow-lg`}><RiCheckboxBlankFill/> {project} </p> )
        }
        
        </div> */}
        <h1 className=' font-bold text-3xl flex items-center gap-1 mt-4'>Toolset: </h1>
        <div className="flex flex-wrap gap-2">
        {
          toolset.map((project) => <p className={`border flex items-center font-bold text-center mt-4 p-2 py-1 shadow-lg `}>{project.icon} {project.name} </p> )
        }
        
        </div>
        
        </div>
      </div>
    </section>
  );
}


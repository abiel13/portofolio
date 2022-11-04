import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import devabi from "./images/face.png";
import code from "./images/code.png"
import design from "./images/design.png"
import consulting from "./images/consulting.png"
import web1 from "./images/web1.png"
import web2 from "./images/web2.png"
import web3 from "./images/web3.png"
import web4 from "./images/web4.png"
import web5 from "./images/web5.png"
import web6 from "./images/web6.png"
import {useState} from 'react'



function Home() {
const [ darkMode , setdarkMode] = useState(true)

  return (
    <div  className={darkMode ?"dark ":"" }>
      <Head>
        <title>Abiel Asimiea Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 md:px-25 lg:px-40 dark:bg-gray-900 t">
        <section className=" min-h-screen">
          <nav className="py-10 flex justify-between items-center">
            <h1 className="text-xl dark:text-white">Abiel Asimiea</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setdarkMode(!darkMode)} className="cursor-pointer dark:text-white" />
              </li>
              <li>
                <a
                  href="#"
                  className="text-white bg-gradient-to-r from-cyan-400 to-teal-500 px-5 py-2 rounded-md ml-8"
                >
                  resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 ">
            <h2 className="text-5xl py-8 font-medium text-cyan-700 md:text-7xl">
              Abiel Asimiea
            </h2>
            <h3 className="text-black-400 text-2xl pb-3 font-medium md:text-3xl dark:text-white">
              Developer and designer
            </h3>
            <p className="font-medium leading-6 text-gray-600 md:text-xl max-w-xl mx-auto">
              Freelancer providing services for programming and content needs.
              join me down below and lets get cracking!...
            </p>
          </div>

          <div className="dark:text-white text-4xl text-gray-500 flex items-center gap-10 justify-center">
            <AiFillTwitterCircle className="cursor-pointer" />
            <AiFillLinkedin className="cursor-pointer" />
            <AiFillYoutube className="cursor-pointer" />
          </div>
          <div className="relative overflow-hidden mx-auto mt-20 w-60 h-60 bg-gradient-to-b from-teal-600 rounded-full x  md:w-90 md:h-90 ">
            <Image src={devabi} fill  />
          </div>
        </section>

        <section className="my-20 ">
          <h3 className="text-black-500 font-medium text-3xl dark:text-white">
            Services I Offer
          </h3>
          <p className="text-medium py-3 font-medium text-gray-600 dark:text-gray-300 ">
            Since the begginging of my journey a freelancer i done remote work
            for
            <span className="text-cyan-400"> agencies</span> consulted for{" "}
            <span className="text-cyan-400"> startup</span> andd collaborated
            with talented people to create digital products for both buisness
          </p>

          <p className="text-medium py-3 font-medium text-gray-600 dark:text-gray-300">
            I offer a wide range of services , including design, programming and
            teaching
          </p>


<div className="lg:flex gap-10">
          <div className="shadow-lg my-8 text-center py-8 flex-1 dark:bg-white rounded-xl">
           
          <Image src={design} className="mx-auto"/>
          
            <h3 className="text-lg font-medium pt-6 pb-2">Design</h3>
            <p className="text-gray-400 font-medium py-2">
           creating elegant designs that suit your needs
           while following core design theories.
            </p>
            <h4 className="text-teal-600 pt-4 font-medium">Design Tools</h4>
           <p>Figma</p>
          </div>

          <div className="shadow-lg rounded-xl my-8 text-center py-8  flex-1 dark:bg-white">
           
              <Image src={consulting} className="mx-auto"/>
          
            <h3 className="text-lg font-medium pt-6 pb-2">Consultant</h3>
            <p className="text-gray-400 font-medium py-2">
              Based on level of expertise in frontend development
              i am the right man your company needs
            </p>
            <h4 className="text-teal-600 pt-4 font-medium">Expertise Skills</h4>
            <p>Creative Design</p>
            <p>Seo Friendly Websites</p>
            <p>Logic</p>
          </div>

          <div className="shadow-xl my-8 text-center  rounded-xl dark:bg-white p-8">
          <Image src={code} className="mx-auto"/>  
         
            <h3 className="text-lg font-medium  pt-6 pb-2">Code</h3>
            <p className="text-gray-400 font-medium py-2">
              Write Clean and reusable code
            </p>
            <h4 className="text-teal-600 pt-4 font-medium">
              {" "}
              Languages I Write
            </h4>
            <p>Html</p>
            <p>Css3 and Sass</p>
            <p>JavaScript</p>

            <h4 className="text-teal-600 pt-8 font-medium"> FrameWorks</h4>
            <p>React</p>
            <p>Next.js</p>
            <p>Bootstrap 5</p>
            <p>Tailwind Css</p>
          </div>
          </div>
        </section>
<section>
  <h3 className='text-3xl text-center py-3 dark:text-white'>Portofolio</h3>
  
        

          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
         
         <div className="basis-1/3 flex-1"> <Image src={web1} layout="responsive" width={"100%"} height={"100%"}   /></div>
<div className="basis-1/3 flex-1"> <Image src={web2} layout="responsive" width={"100%"} height={"100%"}/></div>
<div className="basis-1/3 flex-1"> <Image src={web3} layout="responsive" width={"100%"} height={"100%"}/></div>
<div className="basis-1/3 flex-1"><Image src={web4} layout="responsive" width={"100%"} height={"100%"}/></div>
<div className="basis-1/3 flex-1"><Image src={web5} layout="responsive" width={"100%"} height={"100%"}/></div>
<div className="basis-1/3 flex-1"> <Image src={web6} layout="responsive" width={"100%"} height={"100%"}/></div>
            
          </div>
</section>

      </ main>
    </ div>
  );
}

export default Home;

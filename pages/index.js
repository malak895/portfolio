import Head from "next/head";
import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import malek from "../public/dev-ed-wave.png";
import web1port from "../public/web1.gif";
import web2port from "../public/web2.jpg";
import web3port from "../public/web3.png";
import web4port from "../public/web4.jpg";
import dockerIcon from "../public/tech/docker.png";
import figmaIcon from "../public/tech/figma.png";
import gitIcon from "../public/tech/git.png";
import htmlIcon from "../public/tech/html.png";
import javascriptIcon from "../public/tech/javascript.png";
import mongodbIcon from "../public/tech/mongodb.png";
import nodejsIcon from "../public/tech/nodejs.png";
import reactjsIcon from "../public/tech/reactjs.png";
import typescriptIcon from "../public/tech/typescript.png";
import cssIcon from "../public/tech/css.png";
import Image from "next/image";

import web5port from "../public/tictac.png";
import web6port from "../public/rosa.jpg";

export default function Home() {
  const circularImages = [
    { src: cssIcon},
    { src: dockerIcon},
    { src: figmaIcon},
    { src: gitIcon},
    { src: htmlIcon },
    { src: javascriptIcon },
    { src: mongodbIcon  },
    { src: nodejsIcon },
    { src: reactjsIcon },
    { src: typescriptIcon },
  ];
  
  const [darkMode, setDarkMode] = useState(true);

  return (
     

    <div className={`bg-white dark:bg-gray-800 ${darkMode ? "dark" : ""}`}>

      <Head>
        <title>My Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="  bg-white px-10 dark:bg-gray-800 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="w-full py-10 mb-10 flex justify-between dark:text-white ">
            <h1 className="font-burtons text-xl">My-Portfolio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
              <li>

                <a
                  className="bg-gradient-to-r from-cyan-500 text-to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/drive/folders/1ZXMnPVJ-oqkpWqgVXDw2iI-iYlR1gI7F"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Malek Hammami Portfolio
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              I&apos;m a full stack developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Hi, I&apos;m a full stack developer with experience in TypeScript and JavaScript.
              I have expertise in frameworks such as Angular, React, and Node.js. 
              I&apos;m a fast learner and enjoy working closely with clients to develop efficient, scalable, and user-friendly solutions that address real-world problems.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/your_twitter_username" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle />
              </a>
              <a href="https://www.linkedin.com/in/hammami-malek-6a84441a7/" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/malak895" target="_blank" rel="noopener noreferrer">
                <AiFillGithub />
              </a>
            </div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={malek} layout="fill" objectFit="cover" alt="Developer Working" />
            </div>
          </div>
        </section>

    
    <h4 className="mb-4 text-3xl tracking-tight font-extrabold text-center  dark:text-white">Technology</h4>
        <p className=" text-center p-10 py-10 mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl dark:text-gray-200">  Highlighting Various <span className="text-teal-500"> Technologies </span> in my Portfolio,
        The portfolio technology is an essential aspect of my <span className="text-teal-500"> professional journey </span> , Thanks to cutting-edge tools and innovative techniques.
       </p>
     
       <div className="container">
  <div className="flex flex-wrap">
    {circularImages.map((image, index) => (
      <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-4 flex justify-center items-center">
        <div className="ball">
          <Image src={image.src} alt={`Description of image ${index}`} width={image.width} height={image.height} />
        </div>
      </div>
    ))}
  </div>
</div>




   
    <section className="py-10">
    <h4 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Portofolio</h4>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-300 sm:text-xl"> Since the beginning of my journey as a new graduate, I&apos;ve been passionate about web development. 
             <span className="text-teal-500"> My expertise </span>
             extends across a wide range of services <span className="text-teal-500">including brand design,and  programming.  </span>I am committed to delivering high-quality solutions and continuously expanding my skills to stay at the forefront of the ever-evolving technology landscape.
           
            
           </p>
           
      
         <div className="lg:flex gap-10 ">
           <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 shadow-2xl ">
               <a href="https://malak895.github.io/my-amazon-clone/">
             <Image
                src={web1port}
               width={300}
               height={200}
               layout="responsive"
               alt="Web Image"
             />
           </a>
            

             <h4 className="py-4 text-teal-600">Amazon Clone</h4>
             <p className="text-gray-800 py-1">
             my mini Amazon Clone project, a compact rendition of the online shopping experience offered by Amazon. Dive into this captivating simulation to explore the fundamental features of one of the world&apos;s largest e-commerce platforms.</p>

           </div>
           <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 shadow-2xl">
           <a href="https://malak895.github.io/netflix/">
             <Image
               src={web4port}
               width={300}
               height={200}
               layout="responsive"
               alt="Web Image"
             />
           </a>
             <h4 className="py-4 text-teal-600">Netflix Clone </h4>
             <p className="text-gray-800 py-1">my Netflix Clone project, a mini replica of the renowned streaming service, Netflix. Immerse yourself in this simulated experience to discover the core functionalities and design elements that make Netflix a global entertainment powerhouse.</p>
            
           </div>
           <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 shadow-2xl">
           <a href="https://malak895.github.io/chatbotAi/">
             <Image
               src={web2port}
               width={300}
               height={200}
               layout="responsive"
               alt="Web Image"
             />
           </a>
            
             <h4 className="py-4 text-teal-600">Chatbot AI</h4>
             <p className="text-gray-800 py-1">
              chatbot AI is an AI program designed to simulate human-like conversations. It uses machine learning and natural language processing algorithms to understand .</p>
           
           </div>
         </div>
         <div className="lg:flex gap-10 ">
           <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1 shadow-2xl ">
               <a href="https://malak895.github.io/Sing-SinUp/">
             <Image
                src={web3port}
               width={300}
               height={200}
               layout="responsive"
               alt="Web Image"
             />
           </a>
            

             <h4 className="py-4 text-teal-600">Sign In</h4>
             <p className="text-gray-800 py-1">my Sign In project, where seamless authentication meets user convenience. Experience a streamlined and secure sign-in process that ensures easy access to your account while maintaining robust security measures</p>

           </div>
           <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 shadow-2xl">
           <a href="https://malak895.github.io/Rosa-Shop/">
             <Image
               src={web6port}
               width={300}
               height={200}
               layout="responsive"
               alt="Web Image"
             />
           </a>
             <h4 className="py-4 text-teal-600"> Rose.</h4>
             <p className="text-gray-800 py-1"> My Rose, Immerse yourself in the world of sophistication and charm as you explore everything Rose has to offer. Discover a realm where aesthetics and grace intertwine, creating a captivating online experience that blooms with elegance.</p>
           </div>
           <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1 shadow-2xl">
           <a href="https://github.com/malak895/tictactoe-AI">
             <Image
               src={web5port}
               width={300}
               height={200}
               layout="responsive"
               alt="Web Image"
             />
           </a>
            
             <h4 className="py-4 text-teal-600">Python Tic Tac Toe game</h4>
             <p className="text-gray-800 py-1">Python Tic Tac Toe game, Immerse yourself in strategic gameplay, where X&apos;s and O&apos;s battle for dominance on the grid. Test your wits and challenge friends in this timeless, interactive Python game.</p>
           </div>
         </div>
       </section>
      <section className="bg-white dark:bg-gray-800">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
            
            <form action="#" className="space-y-8">
                <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
              </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="bg-gradient-to-r from-cyan-500 text-to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">Send message</button>
            </form>
        </div>
      </section>
          
     

      </main>
    

    

    </div>
  );
        
  


}

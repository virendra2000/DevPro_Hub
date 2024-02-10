"use client"
import Image from "next/image"
import Typed from "typed.js"
import Link from "next/link";
import React, { useEffect } from 'react';
import Button from "./Button";
const Homepage = () => {
    useEffect(() => {
        const typed = new Typed('.multiple-text', {
          strings: ['CS STUDENT @MGMCET', 'Full Stack Developer', 'Youtuber', 'Freelancer', 'Blogger'],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true
        });
        return () => {
            typed.destroy();
          };
        }, []);
    return (
        <>
            <section className="p-5 h-auto bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center w-full">
                <div className="home-container w-full flex flex-col-reverse md:flex-row items-center justify-center">
                    <div className="content-text flex flex-col w-full md:w-[45%] font-bold">
                        <h1 className="head2 text-3xl py-1  text-black dark:text-white">Hello , Its Me</h1>
                        <h1 className="head1 text-[50px] font-extrabold py-1 text-orange-500 dark:text-white">Virendra Kalwar</h1>
                        <h1 className="head2 text-3xl py-1 text-black dark:text-white">And I am A <span className="multiple-text text-blue-500 dark:text-yellow-400"></span></h1>
                        <p className="text1 text-md py-2 text-black dark:text-white text-justify">Passionate Full Stack Web Developer 🔥 | Transforming ideas into captivating web experiences 💻 | Constant learner 📚 | Enthusiastic about creating pixel-perfect designs ✨ | Open to new opportunities 🚀 | Lets connect and build something amazing together! 🤝</p>

                        <div className="icon py-2 flex flex-row w-[45%] items-center justify-between">
                            <Link href="https://github.com/virendra2000">
                                <Image src="/boxicons/svg/logos/bxl-github.svg"
                                alt="github"
                                width={50}
                                height={50}
                                className="p-2 bg-white invert dark:invert-0 dark:bg-white rounded-full shadow-lg hover:shadow-white dark:hover:shadow-white"/>
                            </Link>
                            <Link href="mailto:vkalwar132000@gmail.com">
                                <Image src="/boxicons/svg/regular/bx-envelope.svg"
                                alt="github"
                                width={50}
                                height={50}
                                className="p-2 bg-white invert dark:invert-0 dark:bg-white rounded-full shadow-lg hover:shadow-white dark:hover:shadow-white"/>
                            </Link>
                            <Link href="https://www.instagram.com/ig_virendra_2000">
                                <Image src="/boxicons/svg/logos/bxl-instagram.svg"
                                alt="github"
                                width={50}
                                height={50}
                                className="p-2 bg-white invert dark:invert-0 dark:bg-white rounded-full shadow-lg hover:shadow-white dark:hover:shadow-white"/>
                            </Link>
                            <Link href="https://www.linkedin.com/in/virendrakalwar/">
                                <Image src="/boxicons/svg/logos/bxl-linkedin.svg"
                                alt="github"
                                width={50}
                                height={50}
                                className="p-2 bg-white invert dark:invert-0 dark:bg-white rounded-full shadow-lg hover:shadow-white dark:hover:shadow-white"/>
                            </Link>
                        </div>
                        <Link href="/">
                            <Button 
                            type="button"
                            title="Download CV"
                            variant="btn mt-2 px-2 py-2 w-[25%] rounded-full border-0 bg-orange-500 dark:bg-white text-white dark:text-black shadow-lg hover:shadow-orange-500 dark:hover:shadow-white"/>
                        </Link>
                    </div>
                    <div className="content-illustrate flex flex-col items-center justify-center w-full md:w-[45%]">
                        <div className="p-1">
                            <Image src="/Avatar.png"
                            alt="avatar"
                            width={450}
                            height={450}
                            className="avatar rounded-full"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Homepage

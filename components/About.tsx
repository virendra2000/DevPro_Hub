import Link from "next/link"
import Image from "next/image"
import Button from "./Button"
const About = () => {
    return (
        <>
            <section className="p-5 h-auto bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center w-full" id="about">
                <div className="about-container w-full flex flex-col md:flex-row-reverse items-center justify-center">
                    <div className="content-text flex flex-col w-full md:w-[45%]">
                        <h2 className="head1 text-4xl py-1  text-black dark:text-white font-bold">About <span className="text-blue-500 dark:text-yellow-300">Me</span></h2>
                        <h2 className="head2 text-3xl font-extrabold py-1 text-orange-500 dark:text-white">Full Stack Software Developer</h2>
                        <h2 className="text1 text-md py-1 text-black dark:text-white text-justify font-bold">I am a passionate full stack web developer with a keen eye for detail. I am always up for a new challenge and I am eager to build something amazing with you.</h2>

                        <Link href="/">
                        <Button 
                            type="button"
                            title="Download CV"
                            variant="btn mt-2 px-2 py-2 w-full md:w-[35%] rounded-full border-0 bg-orange-500 dark:bg-white text-white dark:text-black shadow-lg hover:shadow-orange-500 dark:hover:shadow-white font-bold"/>
                        </Link>
                    </div>
                    <div className="content-illustrate flex flex-col items-center justify-center w-full md:w-[45%]">
                        <div className="p-1">
                            <Image src="/image1.jpg"
                            alt="avatar"
                            width={400}
                            height={400}
                            className="avatar rounded-full"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About
import Image from "next/image"
import { PROJECT_DETAIL } from "@/constants"
import Link from "next/link"
const Project = () => {
    return (
        <>
            <section className="p-5 h-auto bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center w-full" id="project">
                <h2 className="head3 p-2 text-black dark:text-white text-4xl font-bold">Latest <span className="text-blue-600 dark:text-yellow-300">Projects</span></h2>

                <div className="skill-container mt-5 w-full flex flex-row flex-wrap gap-4 items-center justify-center">
                {PROJECT_DETAIL.map((link) => (
                    <div key={link.key} className="project-card hover:text-opacity-100 cursor-pointer">
                        <Image src={link.imgurl}
                        alt={link.altdesc}
                        width={900}
                        height={900}
                        className="image"/>

                        <div className="text-overlay flex flex-col items-center justify-center">
                            <h2 className="head-txt text-2xl p-2 text-white font-bold">{link.projecttitle}</h2>
                            <p className="p-2 head-txt text-md text-white font-bold">
                                {link.projectdesc}
                            </p>
                            <Link href={link.href}>
                                <div className="p-2 rounded-full cursor-pointer bg-white hover:bg-orange-500 text-black">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z"/><path fill="currentColor" d="M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z"/></svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}
export default Project
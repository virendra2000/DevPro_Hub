"use client"
import Link from "next/link"
const Footer = () => {
    return (
        <>
            <section className="p-5 bg-white dark:bg-slate-800 shadow-lg shadow-slate-600 dark:shadow-white flex flex-row items-center justify-between" id="footer">
                <h1 className="head2 p-2 text-black dark:text-white font-bold">Copyright © 2023 | Developed By CodeCipher_Virendra | All Rights Reserved.<br/>
                Contact Us :<br/>
                Email : vkalwar13200@gmail.com<br/>
                Mobile No. +91 8108652773</h1>
                <Link href="/" className="slidetop p-2 bg-orange-500 dark:bg-white text-white dark:text-black rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M11 8.414V18h2V8.414l4.293 4.293 1.414-1.414L12 4.586l-6.707 6.707 1.414 1.414z"/>
                        </svg>
                </Link>
            </section>
        </>
    )
}
export default Footer
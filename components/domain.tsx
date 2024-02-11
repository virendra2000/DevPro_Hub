import Image from "next/image"
import styles from './styles.module.css';
const Domain = () => {
    return (
        <>
            <section className="p-5 h-auto bg-slate-100 dark:bg-slate-800 flex flex-col items-center justify-center w-full" id="domain">
                <div className="domain-container w-full flex flex-col items-center justify-center">
                    <h2 className="head3 p-2 text-black dark:text-white text-4xl font-bold">My <span className="text-blue-600 dark:text-yellow-300">Domain</span></h2>

                    <div className="mt-5 w-full p-5 flex flex-col md:flex-row gap-4 items-center justify-between">
                        <div className="card p-5 bg-white dark:bg-slate-700 h-[70vh] w-full md:w-[30%] rounded-lg flex flex-col items-center justify-center text-center border-0 hover:border-2 hover:border-orange-500 hover:dark:border-white shadow-lg shadow-slate-400 dark:shadow-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className="svg-icon text-black dark:text-white">
                                <path fill="currentColor" d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"/>
                            </svg>

                            <h2 className="text-2xl font-bold text-black dark:text-white">Web Development</h2>
                            <p className="py-2 text-md font-bold text-black dark:text-white">Motivated designer and developer with experience creating custom websites through HTML ,CSS  and Tailwind CSS. Strong collaboration skills and proven history of application development. HTML and JavaScript. MS Access and MySQL.</p>
                        </div>
                        <div className="card p-5 bg-white dark:bg-slate-700 h-[70vh] w-full md:w-[30%] rounded-lg flex flex-col items-center justify-center text-center border-0 hover:border-2 hover:border-orange-500 hover:dark:border-white shadow-lg shadow-slate-400 dark:shadow-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M20 17V7c0-2.168-3.663-4-8-4S4 4.832 4 7v10c0 2.168 3.663 4 8 4s8-1.832 8-4zM12 5c3.691 0 5.931 1.507 6 1.994C17.931 7.493 15.691 9 12 9S6.069 7.493 6 7.006C6.069 6.507 8.309 5 12 5zM6 9.607C7.479 10.454 9.637 11 12 11s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2V9.607zM6 17v-2.393C7.479 15.454 9.637 16 12 16s4.521-.546 6-1.393v2.387c-.069.499-2.309 2.006-6 2.006s-5.931-1.507-6-2z"/>
                            </svg>

                            <h2 className="text-2xl font-bold text-black dark:text-white">Data Science and Machine Learning</h2>
                            <p className="py-2 text-md font-bold text-black dark:text-white">Developer Determines the processes,systems,and tools needed to transform data and train on data top predict new outputs from the Datasets.</p>
                        </div>
                        <div className="card p-5 bg-white dark:bg-slate-700 h-[70vh] w-full md:w-[30%] rounded-lg flex flex-col items-center justify-center text-center border-0 hover:border-2 hover:border-orange-500 hover:dark:border-white shadow-lg shadow-slate-400 dark:shadow-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 4.983 7.647 4.983l.006 2.055h4.363v.617H5.92s-2.927-.332-2.927 4.282 2.555 4.45 2.555 4.45h1.524v-2.141s-.083-2.554 2.513-2.554zm-.056-5.74a.784.784 0 1 1 0-1.57.784.784 0 1 1 0 1.57z"/><path d="M18.452 7.532h-1.524v2.141s.083 2.554-2.513 2.554h-4.328s-2.432-.04-2.432 2.35v3.951s-.369 2.391 4.409 2.391c4.573 0 4.288-1.983 4.288-1.983l-.006-2.054h-4.363v-.617h6.097s2.927.332 2.927-4.282-2.555-4.451-2.555-4.451zm-3.981 10.436a.784.784 0 1 1 0 1.57.784.784 0 1 1 0-1.57z"/>
                            </svg>

                            <h2 className="text-2xl font-bold text-black dark:text-white">Python Developer</h2>
                            <p className="py-2 text-md font-bold text-black dark:text-white">I am Python Developer with a great passion to my work. The main goal is to create modern, attractive and user-friendly interfaces and find creative and simple solutions for your business.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Domain
'use client'
import { color, motion } from "framer-motion"

function Home() {
    return (
        <section id="home-section" className="w-full h-[110%] flex flex-col justify-center items-center">
            <motion.h1
                initial={{ opacity: 0}}
                transition={{ duration: 3}}
                animate={{ opacity: 1}}
                className="titles-font text-white mb-8 phone:text-3xl"
            >
                SANTIAGO FERNÁNDEZ
            </motion.h1>
            <motion.a
                href="/Santiago-Fernandez-CV.pdf"
                download="Santiago-Fernandez-CV"
                initial={{ opacity: 0}}
                transition={{ duration: 3}}
                animate={{ opacity: 1}}
                className="text-white p-4 bg-blue-500 rounded-xl"
            >
                    Download my CV
            </motion.a>
        </section>
    )
}

export default Home
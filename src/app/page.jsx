"use client"
import Header from "@/components/Header";
import PhoneHeader from "@/components/PhoneHeader";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import AboutMe from "@/pages/AboutMe";
import Projects from "@/pages/Projects";
import { useState } from "react";
import { FiMenu } from 'react-icons/fi';


export default function () {
    const [openHeader, setOpenHeader] = useState(false);

    const handleOpenHeader = () => {
        setOpenHeader(!openHeader);
    }

    return (
        <>
            <FiMenu
                className="absolute z-50 invisible text-white text-4xl ml-2 mt-2 phone:visible"
                onClick={handleOpenHeader}
            />
            {
                openHeader ? <PhoneHeader/> : <Header/>
            }
            <Home />
            <AboutMe />
            <Projects />
            <Footer/>
        </>
    )
}
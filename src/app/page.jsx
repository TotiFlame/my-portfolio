import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import AboutMe from "@/pages/AboutMe";
import Projects from "@/pages/Projects";

export default function () {
    return (
        <>
            <Header/>
            <Home />
            <AboutMe />
            <Projects />
            <Footer/>
        </>
    )
}
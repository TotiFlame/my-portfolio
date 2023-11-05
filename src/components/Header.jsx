"use client"

function Header () {
    return (
        <header className="fixed z-30 top-0 w-full h-12 flex justify-center phone:invisible">
            <ul className="w-2/3 h-full flex justify-evenly items-center uppercase phone:invisible">
                <li className="header-links">
                    <a href="#home-section">[Home]</a>
                </li>
                <li className="header-links">
                    <a href="#about-me-section">[About me]</a>
                </li>
                <li className="header-links">
                    <a href="#projects-section">[Projects]</a>
                </li>
            </ul>
        </header>
    )
}

export default Header
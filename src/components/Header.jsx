function Header () {
    return (
        <header className="fixed top-0 w-full h-12 flex justify-center">
            <div className="w-2/3 h-full flex justify-evenly items-center uppercase">
                <a href="#home-section" className="header-links">[Home]</a>
                <a href="#about-me-section" className="header-links">[About me]</a>
                <a href="#projects-section" className="header-links">[Projects]</a>
            </div>
        </header>
    )
}

export default Header
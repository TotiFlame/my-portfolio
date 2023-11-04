function PhoneHeader () {
    return (
        <header className="fixed bg-black w-full h-full invisible phone:visible phone:transition">
            <ul className="w-full h-full flex flex-col justify-center items-center uppercase gap-20 transition">
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

export default PhoneHeader
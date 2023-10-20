function Home() {
    return (
        <section id="home-section" className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="titles-font text-white mb-8">SANTIAGO FERNANDEZ 👨🏽‍💻</h1>
            <a
                href="/my-CV.pdf"
                download="Santiago-Fernandez-CV"
                className="text-white p-4 bg-blue-500 rounded-xl"
            >
                    Download my CV
            </a>
        </section>
    )
}

export default Home
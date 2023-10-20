import icons from '@/components/IconList.json'

function AboutMe() {
    return (
        <section id="about-me-section" className="w-full h-full flex justify-evenly items-center">
                <div className="w-full h-full flex justify-center items-center flex-col">
                    <h3 className="subtitles-font text-white mt-16">WHO AM I?</h3>
                    <div className="grid grid-cols-3 w-5/6 flex-1 items-center justify-center">
                        <div className="scroll-animation w-60 h-60 rounded-3xl col-start-1 col-end-2">
                            <img src="/toti.jpeg" alt="" className="rounded-3xl" />
                        </div>
                        <p className="text-white col-start-2 col-end-4">
                            Hi I'm Santiago, since I was a child I have always liked everything related to technology. 
                            Now I am a software developer graduated from Holberton School, there I learned to work with peers, 
                            since the study methodology was by projects and we didn't have teachers, I also improved my soft skills 
                            talking in front of people and dealing with difficult situations. <br />
                            <br />
                            Now I work in projects with friends for clients, and I am also looking for a job where I can improve my skills and be more professional.
                        </p>
                    </div>
                    <div className="flex w-full flex-col flex-1 items-center jutify-center ">
                        <h3 className="subtitles-font text-white mt-8">TECHNOLOGIES</h3>
                        <div className="w-3/4 flex flex-row justify-evenly mt-16">
                            {
                                icons.map((item, index) => (
                                    <div className="icon-container">
                                        <img src={item.icon} className="w-10 h-10 hover:cursor-pointer" />
                                        <span className="icon-name" style={{ color: item.color }}>{item.name}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default AboutMe
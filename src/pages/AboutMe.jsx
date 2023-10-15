function AboutMe() {
    return (
        <section id="about-me-section" className="w-full h-full flex justify-evenly items-center">
                <div className="w-full h-full flex justify-center items-center flex-col">
                    <h3 className="subtitles-font text-white mt-16">WHO AM I?</h3>
                    <div className="grid grid-cols-3 w-5/6 flex-1 items-center justify-center">
                        <div className="w-60 h-60 bg-white rounded-3xl col-start-1 col-end-2">
                            <img src="/toti.JPG" alt="" className="rounded-3xl" />
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
                        <div className="w-3/5 flex flex-row justify-evenly mt-16">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="icons" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="icons" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" className="icons" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" className="icons" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="icons" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="icons" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg" className="icons" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="icons" />
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default AboutMe
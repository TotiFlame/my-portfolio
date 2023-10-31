'use client'

import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

function ProjectCard ({title, description, image, githubLink, pageLink, technologies}) {
    return (
        <div className="project-card-container relative mb-44 flex flex-col items-center rounded-xl transition hover:bg-[#292929] phone:w-[300px] phone:h-[500px]">
            <div className="w-full max-h-72 flex justify-center">
                <img src={image} className="w-full h-full object-cover rounded-xl" />
            </div>
            <span className="card-title my-4 phone:text-center">{title}</span>
            <div className="max-w-80 h-auto flex justify-center phone:px-1">
                <p className="text-white text-xs text-center mb-6">{description}</p>
            </div>
            <div className="w-full flex justify-evenly">
                {technologies.map((tech, index) => 
                    <span key={index} style={{color: tech.color}}>{tech.name}</span>
                )}
            </div>
            {githubLink ? <a
                href={githubLink}
                target="_blank"
                className="absolute left-8 bottom-8 bg-[#b1b1b1] text-sm text-black p-2 rounded-lg hover:bg-[#c1c1c1]"
            >
                Github<ArrowOutwardIcon className='arrow-link'/>
            </a>
            : null}
            {pageLink ? <a
                href={pageLink}
                className='absolute bottom-8 right-8 bg-[#b1b1b1] text-sm p-2 rounded-lg transition hover:bg-[#c1c1c1]'
                target='_blank'
            >
                Go to page<ArrowOutwardIcon className='arrow-link'/>
            </a>
            : null}
        </div>
    )
}

export default ProjectCard
import ProjectCard from "@/components/ProjectCard"
import projects from '@/components/ProjectsList.json'


function Projects() {
    return (
        <section id="projects-section" className="flex flex-col items-center phone:mt-36">
            <h2 className="titles-font my-14 text-white phone:text-center phone:text-4xl">Projects Section</h2>
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    githubLink={project.githubLink}
                    pageLink={project.pageLink}
                    technologies={project.technologies}
                />
            ))}
        </section>
    )
}

export default Projects

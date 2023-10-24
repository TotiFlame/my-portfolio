import ProjectCard from "@/components/ProjectCard"
import projects from '@/components/ProjectsList.json'


function Projects() {
    return (
        <section id="projects-section" className="flex flex-col items-center">
            <h2 className="titles-font my-14 text-white">Projects Section</h2>
            {/* <span className="text-white scroll-animation">[Currently working]</span> */}
            {projects.map((project) => (
                <ProjectCard title={project.title} description={project.description} image={project.image} githubLink={project.githubLink} pageLink={project.pageLink} technologies={project.technologies} />
            ))}
        </section>
    )
}

export default Projects

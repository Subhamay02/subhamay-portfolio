import ProjectCard from '../components/cards/ProjectCard';
import Section from '../components/ui/Section';
import { projects } from '../data/portfolioContent';

const Projects = () => {
  return (
    <Section id="projects" eyebrow="My Work" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

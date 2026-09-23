import type { Project } from "@/types/portfolio";
import { projectStatusLabels } from "@/data/portfolio";
import { StackTags } from "./StackTags";

export function ProjectCard({ project, inDialog }: { project: Project; inDialog: boolean }) {
  const Heading = inDialog ? "h4" : "h3";
  return (
    <article className="project-card">
      <p className="project-status" data-status={project.status}><span aria-hidden="true" />{projectStatusLabels[project.status]}</p>
      <Heading>{project.title}</Heading>
      <p className="project-description">{project.description}</p>
      <StackTags items={project.stack} />
      {(project.links?.github || project.links?.live) && <div className="project-links">
        {project.links.github && <a href={project.links.github}>View repository ↗</a>}
        {project.links.live && <a href={project.links.live}>Visit project ↗</a>}
      </div>}
    </article>
  );
}

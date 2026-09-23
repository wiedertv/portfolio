import type { Project } from "@/types/portfolio";
import { StackTags } from "./StackTags";

export function ProjectCard({ project, featured = false, inDialog }: { project: Project; featured?: boolean; inDialog: boolean }) {
  const Heading = inDialog ? "h4" : "h3";
  return (
    <article className={`project-card${featured ? " project-featured" : ""}`}>
      <p className="project-status"><span aria-hidden="true" />{project.status}</p>
      {featured && <p className="eyebrow">FIRST ORIGINAL GAME</p>}
      <Heading>{project.title}</Heading>
      <p className="project-description">{project.description}</p>
      <StackTags items={project.stack} />
    </article>
  );
}

import type { GameProject } from "@/types/portfolio";
import { gameStageLabels, projectStatusLabels } from "@/data/portfolio";
import { StackTags } from "./StackTags";

export function GameProjectCard({ project, inDialog }: { project: GameProject; inDialog: boolean }) {
  const Heading = inDialog ? "h4" : "h3";
  const Subheading = inDialog ? "h5" : "h4";
  return (
    <article className="project-card project-featured game-project">
      <Heading>{project.title}</Heading>
      <ul className="game-project-state" aria-label="Project state">
        <li>{project.category}</li><li>{gameStageLabels[project.stage]}</li><li>{projectStatusLabels[project.status]}</li>
      </ul>
      <p className="project-description">{project.description}</p>
      <p className="project-description">{project.details}</p>
      <div className="design-work">
        <div><Subheading>Completed design work</Subheading><ul>{project.completedDesignWork.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div><Subheading>Not yet implemented</Subheading><ul>{project.notImplemented.map((item) => <li key={item}>{item}</li>)}</ul></div>
      </div>
      <Subheading className="planned-stack-heading">Planned stack</Subheading>
      <StackTags items={project.plannedStack} />
    </article>
  );
}

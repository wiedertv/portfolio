import { experiences } from "@/data/portfolio";
import { StackTags } from "./StackTags";

export function ExperienceList({ inDialog }: { inDialog: boolean }) {
  const Heading = inDialog ? "h4" : "h3";
  return (
    <ol className="experience-list">
      {experiences.map((experience) => (
        <li key={experience.id}>
          <article className="experience-card">
            <div className="experience-header">
              <div><Heading>{experience.company}</Heading><p className="experience-role">{experience.role}</p></div>
              <p className="experience-period">{experience.period}</p>
            </div>
            {experience.description && <p className="experience-description">{experience.description}</p>}
            <ul className="experience-highlights">{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
            <StackTags items={experience.stack} />
          </article>
        </li>
      ))}
    </ol>
  );
}

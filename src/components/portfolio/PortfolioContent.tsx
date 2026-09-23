import type { ReactNode } from "react";
import { achievements, gameDevelopment, portfolioSections, profile, profileAvailability, projects, skillCategories } from "@/data/portfolio";
import type { SectionId } from "@/types/portfolio";
import { ExperienceList } from "./ExperienceList";
import { GameProjectCard } from "./GameProjectCard";
import { ProjectCard } from "./ProjectCard";
import { StackTags } from "./StackTags";

function Section({ id, title, inDialog, children }: { id: SectionId; title: string; inDialog: boolean; children: ReactNode }) {
  const Heading = inDialog ? "h3" : "h2";
  const index = portfolioSections.findIndex((section) => section.id === id) + 1;
  return (
    <section id={id} className="portfolio-section" aria-labelledby={`${id}-heading`}>
      <div className="portfolio-section-heading">
        <span aria-hidden="true">0{index}</span><Heading id={`${id}-heading`} tabIndex={-1}>{title}</Heading>
      </div>
      {children}
    </section>
  );
}

export function PortfolioContent({ inDialog = false }: { inDialog?: boolean }) {
  const Heading = inDialog ? "h2" : "h1";
  const Subheading = inDialog ? "h4" : "h3";
  return (
    <div className="portfolio-content">
      <header className="portfolio-hero">
        <p className="eyebrow">PRODUCT ENGINEERING · SYSTEMS · PERFORMANCE</p>
        <Heading id="portfolio-title">{profile.name}</Heading>
        <p className="portfolio-title">{profile.title}</p>
        <p className="portfolio-summary">{profile.summary}</p>
        <p className="profile-details">{profileAvailability.compact}</p>
      </header>
      <div className="portfolio-layout">
        <aside className="portfolio-sidebar">
          <p className="eyebrow">EXPLORE THE PORTFOLIO</p>
          <nav className="portfolio-nav" aria-label="Portfolio sections">
            {portfolioSections.map((section, index) => <a key={section.id} href={`#${section.id}`}><span aria-hidden="true">0{index + 1}</span>{section.title}</a>)}
          </nav>
          <p className="sidebar-note">A pragmatic approach.<br />A curiosity for what comes next.</p>
        </aside>
        <div className="portfolio-sections">
          <Section id="about" title="About" inDialog={inDialog}>
            <div className="about-copy"><p className="about-greeting">{profile.about.heading}</p>{profile.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </Section>
          <Section id="experience" title="Experience" inDialog={inDialog}><ExperienceList inDialog={inDialog} /></Section>
          <Section id="projects" title="Projects" inDialog={inDialog}>
            <div className="project-grid">{projects.map((project) => <ProjectCard key={project.id} project={project} inDialog={inDialog} />)}</div>
          </Section>
          <Section id="skills" title="Skills" inDialog={inDialog}>
            <div className="skills-grid">{skillCategories.map((category) => (
              <div className="skill-category" key={category.name}><Subheading>{category.name}</Subheading><StackTags items={category.skills} /></div>
            ))}</div>
          </Section>
          <Section id="game-lab" title={gameDevelopment.heading} inDialog={inDialog}>
            <div className="game-lab-copy">{gameDevelopment.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            {gameDevelopment.projects.map((project) => <GameProjectCard key={project.id} project={project} inDialog={inDialog} />)}
          </Section>
          <Section id="achievements" title="Quest Board" inDialog={inDialog}>
            <p className="section-intro">Engineering achievements, earned in production.</p>
            <ul className="achievement-list">{achievements.map((achievement) => <li key={achievement.id}><span aria-hidden="true">✓</span>{achievement.title}</li>)}</ul>
          </Section>
          <Section id="contact" title="Contact" inDialog={inDialog}>
            <div className="contact-card"><Subheading>{profile.contact.heading}</Subheading><p>{profile.contact.text}</p>
              <p className="contact-availability">Based in {profile.location}.<br />Open to {profile.workPreference} opportunities.<br />{profile.relocation}.</p>
            </div>
          </Section>
        </div>
      </div>
      <footer className="portfolio-footer"><span>{profile.name} · {profile.title}</span><span>{profileAvailability.full}</span></footer>
    </div>
  );
}

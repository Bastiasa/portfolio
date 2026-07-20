import { useMemo, useState } from "react";
import { TextInput } from "@mantine/core";
import { ProjectElement } from "./ProjectElement";
import { Icon } from "./Icon";
import type { ProjectInfo } from "../types";

type ProjectsSectionProps = {
  projects: ProjectInfo[];
  title?: string;
};

export function ProjectsSection({
  projects,
  title = "Projects",
}: ProjectsSectionProps) {
  const [query, setQuery] = useState("");

  // Catalog numbers are calculated from the full list (not the filtered one)
  // so each project always keeps the same number.
  const numbered = useMemo(
    () => projects.map((project, index) => ({ project, number: index + 1 })),
    [projects]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return numbered;

    return numbered.filter(({ project }) =>
      [project.title, project.description, project.year ? String(project.year) : ""]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [numbered, query]);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-section-header">
        <h2 className="section-title">{title}</h2>

        <TextInput
          value={query}
          onChange={(event) => setQuery(event.currentTarget.value)}
          placeholder="Search by name, technology, or year..."
          aria-label="Search projects"
          className="w-full"
          rightSection={<Icon name="search" className="text-current" />}
          classNames={{
            root: "project-search",
            input: "project-search-input",
          }}
        />
      </div>

      {filtered.length === 0 ? (
        <p className="projects-empty">
          No projects found matching "{query}". Try a different search term.
        </p>
      ) : (
        <div className="projects-list">
          {filtered.map(({ project, number }) => (
            <ProjectElement
              key={project.title}
              projectTitle={project.title}
              projectDescription={project.description}
              coverSrc={project.cover}
              moreInfoLink={project.link}
              openInNewTab={project.blank}
              pixelatedCover={project.pixelatedCover}
              projectYear={project.year}
              catalogNumber={number}
            />
          ))}
        </div>
      )}
    </section>
  );
}
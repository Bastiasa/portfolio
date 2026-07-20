import { LinearLayout } from "./LinearLayout";
import { ImageLoader } from "./ImageLoader";
import { Icon } from "./Icon";

type ProjectElementProps = {
  projectTitle: string;
  projectDescription: string;
  coverSrc: string;
  moreInfoLink?: string;
  openInNewTab?: boolean;
  pixelatedCover?: boolean;
  projectYear?: number;
  catalogNumber?: number;
};

export function ProjectElement({
  projectTitle,
  projectDescription,
  coverSrc,
  moreInfoLink,
  openInNewTab = true,
  pixelatedCover = false,
  projectYear,
  catalogNumber,
}: ProjectElementProps) {
  return (
    <LinearLayout className="project-container" spacing="0" alignItems="stretch">
      <ImageLoader
        src={coverSrc || "https://placehold.co/3000x3000"}
        alt={projectTitle}
        className={`project-cover  inline-block ${pixelatedCover ? "pixelated" : ""}`}
      />

      <section className="sm:w-0 relative" style={{ flexGrow: "1" }}>
        <LinearLayout direction="vertical" className="p-4 pb-6 relative" spacing="6px">
          {catalogNumber !== undefined && (
            <span className="project-catalog-number">
              # {String(catalogNumber).padStart(3, "0")}
            </span>
          )}

          <h5 className="project-title">
            {projectTitle + (projectYear ? ` — ${projectYear}` : "")}
          </h5>

          <p className="project-description">{projectDescription}</p>

          {moreInfoLink && (
            <a
              className="ml-auto! mt-4 project-link text-right block"
              target={openInNewTab ? "_blank" : undefined}
              rel={openInNewTab ? "noopener noreferrer" : undefined}
              href={moreInfoLink}
            >
              Ver más <Icon name="open_in_new" />
            </a>
          )}
        </LinearLayout>
      </section>
    </LinearLayout>
  );
}

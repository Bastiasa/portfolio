import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { CertificatesSection } from "./components/Certificates";
import { Footer } from "./components/Footer";
import { projects } from "./data/projects";
import { certificates } from "./data/certificates";
import { HERO_DATA } from "./data/hero";
import { FOOTER_DATA } from "./data/footer";
import { CookieConsent } from "./components/CookieConsent";
import { googleAnalyticsSetMode } from "./analytics";
import { useEffect } from "react";

export default function App() {

  return (
    <div id="top" className="page">
      <Hero
        {...HERO_DATA}
      />

      <main className="page-main">
        <ProjectsSection projects={projects} />
        <CertificatesSection certificates={certificates} />
      </main>

      <Footer
       {...FOOTER_DATA}
      />

      <CookieConsent onAccepted={() => {
        googleAnalyticsSetMode('normal');
      }}/>
    </div>
  );
}

// src/components/App.tsx

import { MantineProvider } from "@mantine/core";
import { ProjectsSection } from "./ProjectsSection";
import { projects } from "../data/projects";

import '@mantine/core/styles.css';
import '../index.css';
import { Hero } from "./Hero";
import { HERO_DATA } from "../data/hero";
import { CertificatesSection } from "./Certificates";
import { certificates } from "../data/certificates";
import { Footer } from "./Footer";
import { FOOTER_DATA } from "../data/footer";
import { CookieConsent } from "./CookieConsent";
import { googleAnalyticsSetMode } from "../analytics";

export default function App() {
  return (
    <MantineProvider>
      <div id="top">
        <Hero {...HERO_DATA}/>

        <main className="p-4 max-w-[1400px] mx-auto">
          <ProjectsSection projects={projects} />
          <CertificatesSection certificates={certificates}/>
        </main>

        <Footer
          {...FOOTER_DATA}/>

        <CookieConsent
          onAccepted={() => {
            googleAnalyticsSetMode('normal')
          }}/>
      </div>
    </MantineProvider>
  );
}
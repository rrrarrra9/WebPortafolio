import {
  ArrowDown,
  ArrowUpRight,
  Asterisk,
  BriefcaseBusiness,
  Code2,
  Download,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/navigation";
import { Knowledge } from "@/components/knowledge";
import { Floating, MagneticAction, Reveal } from "@/components/motion";
import { profile } from "@/lib/profile";
import { CodeScene } from "@/components/code-scene";

export default function Home() {
  return (
    <>
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Navigation name={profile.name} />
      <main id="contenido">
        <section id="inicio" className="hero container-shell">
          <div className="hero-copy">
            <Reveal inView={false}>
              <div className="eyebrow">
                <span className="status-dot" /> RAÚL ORTIZ / ESTUDIANTE DE DAM
              </div>
            </Reveal>
            <Reveal inView={false} delay={70}>
              <h1>
                Desarrollador
                <br />
                <span>en formación.</span>
              </h1>
            </Reveal>
            <Reveal inView={false} delay={140}>
              <p className="hero-description">
                Busco <strong>prácticas y oportunidades de desarrollo</strong>{" "}
                para incorporarme a un equipo. Mi foco está en el backend, con
                C# y ASP.NET, y en el desarrollo de aplicaciones.
              </p>
            </Reveal>
            <Reveal inView={false} delay={210}>
              <div className="hero-actions">
                <MagneticAction>
                  <Button asChild className="primary-button">
                    <a href="#contacto">
                      Hablemos <ArrowUpRight />
                    </a>
                  </Button>
                </MagneticAction>
                <Button asChild variant="ghost" className="text-button">
                  <a href={profile.cv} download="CV-Raul-Ortiz.pdf">
                    <Download /> Descargar CV
                  </a>
                </Button>
              </div>
            </Reveal>
            <Reveal inView={false} delay={280}>
              <div className="hero-note">
                <MapPin size={13} />
                <span>{profile.location}</span>
                <span className="hero-note-separator" />
                <span>C# · Java · TypeScript</span>
              </div>
            </Reveal>
          </div>
          <Reveal inView={false} delay={170}>
            <div className="hero-profile">
              <CodeScene />
              <Floating>
                <div className="profile-availability">
                  <span className="status-dot" />
                  <span>Buscando prácticas</span>
                  <BriefcaseBusiness size={14} />
                </div>
              </Floating>
              <Floating delay={0.3}>
                <div className="profile-stack">
                  <Code2 size={17} />
                  <div>
                    <span>Mi stack de aprendizaje</span>
                    <strong>ASP.NET · Supabase · React Native</strong>
                  </div>
                </div>
              </Floating>
              <div className="art-caption">
                <span>FORMACIÓN TÉCNICA. OBJETIVO PROFESIONAL.</span>
                <ArrowDown size={12} />
              </div>
            </div>
          </Reveal>
        </section>
        <div className="hero-bottom container-shell">
          <a href="#conocimientos">
            <ArrowDown size={15} /> Explora mis conocimientos
          </a>
          <span>Desarrollo backend, interfaces y trabajo en equipo.</span>
        </div>

        <section id="conocimientos" className="section-block container-shell">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow section-eyebrow">01 / CONOCIMIENTOS</p>
                <h2>
                  Lo que he trabajado.
                  <br />
                  <span>Lo que puedo aportar.</span>
                </h2>
              </div>
              <p>
                Una base técnica en desarrollo de aplicaciones,
                <br />
                con experiencia de aprendizaje en distintas tecnologías.
              </p>
            </div>
          </Reveal>
          <Knowledge />
          <p className="knowledge-footnote">
            <GraduationCap size={15} /> Conocimientos adquiridos durante mi
            formación y proyectos de aprendizaje.
          </p>
        </section>

        <section id="sobre-mi" className="about-section">
          <div className="container-shell about-grid">
            <Reveal>
              <div>
                <p className="eyebrow section-eyebrow">02 / PERFIL</p>
                <h2>
                  Un perfil técnico,
                  <br />
                  <span>con ganas de aportar.</span>
                </h2>
                <div className="career-facts">
                  <div>
                    <GraduationCap size={21} />
                    <p>
                      <strong>
                        Desarrollo de Aplicaciones Multiplataforma
                      </strong>
                      <span>Grado superior · iMES Maresme · En curso</span>
                    </p>
                  </div>
                  <div>
                    <Code2 size={21} />
                    <p>
                      <strong>Backend y aplicaciones</strong>
                      <span>La orientación que quiero dar a mi carrera.</span>
                    </p>
                  </div>
                  <div>
                    <MapPin size={21} />
                    <p>
                      <strong>{profile.location}</strong>
                      <span>Castellano y catalán nativos · Inglés A2</span>
                    </p>
                  </div>
                </div>
                <div className="career-note">
                  <Asterisk size={27} />
                  <p>
                    Busco un equipo donde aprender,
                    <br />
                    trabajar y seguir desarrollándome.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="about-content">
                <p className="about-lead">{profile.bio}</p>
                <p>
                  En un proyecto de app con React Native y TypeScript trabajé
                  con la metodología Scrum. Ahora busco prácticas y
                  oportunidades para aplicar mi formación, ganar experiencia y
                  aportar al trabajo de un equipo.
                </p>
                <div
                  className="skills-list"
                  aria-label="Tecnologías que he trabajado"
                >
                  {profile.skills.map((skill) => (
                    <Badge variant="outline" key={skill}>
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Accordion
                  type="single"
                  collapsible
                  className="about-accordion"
                >
                  <AccordionItem value="education">
                    <AccordionTrigger>Mi formación</AccordionTrigger>
                    <AccordionContent>
                      <ul className="education-list">
                        <li>
                          <strong>
                            Desarrollo de Aplicaciones Multiplataforma
                          </strong>
                          <span>Grado superior · iMES Maresme · En curso</span>
                        </li>
                        <li>
                          <strong>Sistemas Microinformáticos y Redes</strong>
                          <span>Grado medio · Freta Calella</span>
                        </li>
                        <li>
                          <strong>Educación Secundaria Obligatoria</strong>
                          <span>Institut Sant Pol de Mar</span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="experience">
                    <AccordionTrigger>
                      Mi experiencia en prácticas
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="education-list">
                        <li>
                          <strong>Prácticas de grado medio · 383 horas</strong>
                          <span>
                            Administración y resolución de incidencias
                            informáticas y soporte a alumnos y personal docente.
                          </span>
                        </li>
                        <li>
                          <strong>
                            Prácticas de grado superior · En curso
                          </strong>
                          <span>
                            Apoyo administrativo, creación y edición de vídeos
                            corporativos, y desarrollo y mantenimiento de la web
                            de la empresa. 515 horas indicadas en el CV.
                          </span>
                        </li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="languages">
                    <AccordionTrigger>Idiomas</AccordionTrigger>
                    <AccordionContent>
                      Castellano y catalán nativos. Inglés A2.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Button asChild variant="outline" className="cv-button">
                  <a href={profile.cv} download="CV-Raul-Ortiz.pdf">
                    <Download size={15} /> Descargar mi CV{" "}
                    <ArrowDown size={14} />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="proyectos" className="section-block container-shell">
          <Reveal>
            <div className="section-heading">
              <div>
                <p className="eyebrow section-eyebrow">03 / PROYECTO</p>
                <h2>
                  Este portafolio,
                  <br />
                  <span>en funcionamiento.</span>
                </h2>
              </div>
              <p>
                Una muestra que puedes explorar ahora.
                <br />
                Diseño, código e interacción en una misma web.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <article className="project-card">
              <div className="project-preview">
                <div className="browser-bar" aria-hidden="true">
                  <div className="browser-dots">
                    <i />
                    <i />
                    <i />
                  </div>
                  <span>raulortiz · portafolio</span>
                  <Monitor size={13} />
                </div>
                <div className="mini-site" aria-hidden="true">
                  <div className="mini-nav">
                    <span>
                      <Asterisk size={17} /> RaulOrtiz.
                    </span>
                    <span>Conocimientos · Perfil · Contacto</span>
                  </div>
                  <div className="mini-content">
                    <div>
                      <span className="mini-eyebrow">ESTUDIANTE DE DAM</span>
                      <p>
                        Desarrollador
                        <br />
                        <em>en formación.</em>
                      </p>
                      <span className="mini-button">Hablemos ↗</span>
                    </div>
                    <CodeScene compact />
                  </div>
                  <div className="mini-footer">
                    C# / ASP.NET / JAVA / SUPABASE / REACT NATIVE
                  </div>
                </div>
                <span className="preview-label">
                  <span className="status-dot" /> PROYECTO DISPONIBLE PARA
                  EXPLORAR
                </span>
              </div>
              <div className="project-info">
                <div className="project-meta">
                  <span>PROYECTO 001</span>
                  <Badge variant="outline" className="project-status">
                    Portafolio web
                  </Badge>
                </div>
                <h3>
                  Mi portafolio profesional<span>.</span>
                </h3>
                <Tabs defaultValue="project" className="project-tabs">
                  <TabsList
                    aria-label="Información del proyecto"
                    variant="line"
                  >
                    <TabsTrigger value="project">El proyecto</TabsTrigger>
                    <TabsTrigger value="details">Cómo está hecho</TabsTrigger>
                  </TabsList>
                  <TabsContent value="project">
                    <Reveal inView={false}>
                      <p>
                        Una web para presentar mi perfil, explicar los
                        conocimientos que he trabajado y facilitar el contacto
                        con equipos que buscan incorporar a un desarrollador en
                        formación.
                      </p>
                    </Reveal>
                  </TabsContent>
                  <TabsContent value="details">
                    <Reveal inView={false}>
                      <p>
                        Construido con Next.js, React y TypeScript. Componentes
                        de shadcn/ui y Animate UI, animaciones con Motion y
                        estilos con Tailwind CSS. Diseño adaptable y navegación
                        por teclado.
                      </p>
                    </Reveal>
                  </TabsContent>
                </Tabs>
                <div className="project-tags">
                  {["Next.js", "TypeScript", "shadcn/ui", "Animate UI"].map(
                    (tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ),
                  )}
                </div>
                <Button asChild variant="ghost" className="project-link">
                  <a href="#inicio">
                    Explorar esta web <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </article>
          </Reveal>
        </section>

        <section id="contacto" className="contact-section container-shell">
          <Reveal>
            <div className="contact-panel">
              <div className="contact-top">
                <p className="eyebrow">04 / CONTACTO PROFESIONAL</p>
                <Floating>
                  <span className="contact-asterisk">
                    <Asterisk size={35} strokeWidth={1.3} />
                  </span>
                </Floating>
              </div>
              <h2>
                Busco un equipo.
                <br />
                <span>¿Hablamos?</span>
              </h2>
              <div className="contact-bottom">
                <p>
                  Si tienes una oportunidad de prácticas o desarrollo,
                  <br />
                  me gustaría conocerla.
                </p>
                <div className="contact-links">
                  <MagneticAction>
                    <Button asChild className="contact-button">
                      <a
                        href={`mailto:${profile.email}?subject=Oportunidad%20de%20desarrollo`}
                      >
                        <Mail /> Escríbeme <ArrowUpRight />
                      </a>
                    </Button>
                  </MagneticAction>
                  <Button asChild variant="outline" className="social-button">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Code2 /> GitHub <ArrowUpRight />
                    </a>
                  </Button>
                  {profile.linkedin && (
                    <Button asChild variant="outline" className="social-button">
                      <a
                        href={profile.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Link2 /> LinkedIn <ArrowUpRight />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <div className="contact-email">{profile.email}</div>
            </div>
          </Reveal>
        </section>
      </main>
      <footer className="container-shell footer">
        <a href="#inicio" className="brand">
          <Asterisk size={23} />
          <span>
            {profile.name}
            <span className="brand-dot">.</span>
          </span>
        </a>
        <p>Desarrollo backend y aplicaciones · {profile.location}</p>
        <a href="#inicio" className="back-to-top">
          Volver arriba <ArrowUpRight size={16} />
        </a>
      </footer>
    </>
  );
}

import styles from "./HomePage.module.css";
import { Card, SkillSummary, SocialMedia, TitleCard, WorkHistory } from "../../components";

export const HomePage: React.FC = () => {
  const backendTools = ["Go", "NodeJS", "Python", "PostgreSQL", "RabbitMQ", "Terraform", "AWS", "NGINX", "Docker"];
  const frontendTools = ["ReactJS", "NextJS", "VueJS", "ThreeJS"];
  const gamedevTools = ["Unity", "Godot"];
  const gameEngineTools = ["C++", "OpenGL"];

  return (
    <>
      <Card>
        <TitleCard title="Rio Arswendo" subtitle="Software Engineer >> Full Stack Web Dev >> Game Engine" />
        <p>
          My name is Rio, I am a Software Engineer of <a className={styles.primaryText1}>4+Years of Experience </a>
          with varieties of interest including but not limited to; Full Stack Web Development, Game Development, Game Engine, Graphics Engineering.
        </p>
        <SkillSummary skill="Back-End Web Development" tools={backendTools} />
        <SkillSummary skill="Front-End Web Development" tools={frontendTools} />
        <SkillSummary skill="Game Development" tools={gamedevTools} />
        <SkillSummary skill="Game Engine" tools={gameEngineTools} />
        <p>
          Contact: <a className={`${styles.primaryText1} ${styles.email} ${styles.highlight}`} href="mailto:rio.swe.workmail@gmail.com">rio.swe.workmail@gmail.com</a>
        </p>
        <SocialMedia />
        <div className={styles.dottedDivider}></div>
        <TitleCard title="Career Timeline" subtitle="Journey throughout the industry." />
        <WorkHistory>
          <WorkHistory.Header>
            Full Stack Web Developer at <a href="https://www.goldenenergymines.com/" target="_blank">Sinarmas Mining</a>
          </WorkHistory.Header>
          <WorkHistory.Duration>
            May 2020 - June 2023
          </WorkHistory.Duration>
          <WorkHistory.Detail>
            <p>Tech Used: VueJS, ExpressJS, MySQL, MongoDB, PostgreSQL, Python</p>
          </WorkHistory.Detail>
        </WorkHistory>
        <WorkHistory>
          <WorkHistory.Header>
            Software Engineer at <a href="https://www.cosmart.id/" target="_blank">Cosmart</a>
          </WorkHistory.Header>
          <WorkHistory.Duration>
            June 2023 - July 2024
          </WorkHistory.Duration>
          <WorkHistory.Detail>
            <p>Tech Used: Go, PostgreSQL, RabbitMQ, AWS, Python, gRPC, Terraform, Docker</p>
          </WorkHistory.Detail>
        </WorkHistory>
        <WorkHistory>
          <WorkHistory.Header>
            Software Engineer II at <a href="https://www.flip.id/" target="_blank">Flip</a>
          </WorkHistory.Header>
          <WorkHistory.Duration>
            Sept 2024 - Jan 2025
          </WorkHistory.Duration>
          <WorkHistory.Detail>
            <p>Tech Used: Go, PostgreSQL, Google Cloud</p>
          </WorkHistory.Detail>
        </WorkHistory>
        <WorkHistory>
          <WorkHistory.Header>
            Open For Hiring
          </WorkHistory.Header>
          <WorkHistory.Duration>
            Present - Contact Me!
          </WorkHistory.Duration>
          <WorkHistory.Detail>
            <p className={styles.smallPadding}>Web Dev: Full Stack, Front End, Back End</p>
            <p>Game Dev: Game Programmer, Junior Graphics Programmer</p>
          </WorkHistory.Detail>
        </WorkHistory>
      </Card>
    </>
  );
};

import styles from "./HomePage.module.css";
import { Card, SkillSummary, TitleCard } from "../../components";

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
        <div className={styles.dottedDivider}></div>
        <TitleCard title="Work History" subtitle="Journey throughout the industry." />
      </Card>
    </>
  );
};

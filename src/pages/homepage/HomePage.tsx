import styles from "./HomePage.module.css";
import { Card, Navbar, ProjectCard, SkillSummary, SocialMedia, TitleCard, WorkHistory } from "../../components";
import mazeDrawer from "../../assets/maze-drawer.png";
import shanon from "../../assets/shanon.png";
import agni from "../../assets/agni.jpg";
import bejat from "../../assets/bejat.png";
import bytesize from "../../assets/bytesize.png";
import rendering from "../../assets/rendering.png";
import frameTheFight from "../../assets/frame-the-fight.png";

export const HomePage: React.FC = () => {
  const backendTools = ["Go", "NodeJS", "Python", "PostgreSQL", "RabbitMQ", "Terraform", "AWS", "NGINX", "Docker"];
  const frontendTools = ["ReactJS", "NextJS", "VueJS", "ThreeJS"];
  const gamedevTools = ["Unity", "Godot"];
  const gameEngineTools = ["C++", "OpenGL"];

  return (
    <>
      <Navbar>
        <table border={1}>
          <tr className={styles.navList}>
            <th><a href="#profile">Profile</a></th>
            <th><a href="#career">Career Timeline</a></th>
            <th><a href="#projects">Projects</a></th>
            <th><a href="#articles">Articles</a></th>
          </tr>
        </table>
      </Navbar >
      <Card>
        <TitleCard id="profile" title="Rio Arswendo" subtitle="Software Engineer >> Full Stack Web Dev >> Game Dev" />
        <p>
          My name is Rio, I am a Software Engineer of <a className={styles.primaryText1}>4+Years of Experience </a>
          with varieties of interest including but not limited to; Full Stack Web Development, Game Development, Game Engine, Computer Graphics.
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
        <TitleCard id="career" title="Career Timeline" subtitle="Journey throughout the industry." />
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
        <div className={styles.dottedDivider}></div>
        <TitleCard id="projects" title="Projects" subtitle="Things I have had my hands on." />
        <div className={styles.grid}>
          <ProjectCard>
            <ProjectCard.Image src={mazeDrawer} href="https://lunarisnia.github.io/maze-drawer/" />
            <ProjectCard.Detail title="Maze Solver" description="A demo of the A* pathfinding algorithm." />
          </ProjectCard>
          <ProjectCard>
            <ProjectCard.Image src={shanon} href="https://lunarisnia.itch.io/shanon-is-lost" />
            <ProjectCard.Detail title="Shanon Is Lost" description="Precision platformer video game made for a game jam." />
          </ProjectCard>
          <ProjectCard>
            <ProjectCard.Image src={agni} href="https://store.steampowered.com/app/3151360/Agni_Village_of_Calamity/" />
            <ProjectCard.Detail title="Agni: VoC" description="I am the guy that did their infra that enable their remote work environment." />
          </ProjectCard>
          <ProjectCard>
            <ProjectCard.Image src={bytesize} href="https://www.tiktok.com/@lunarisnia" />
            <ProjectCard.Detail title="Bytesize Programming" description="A web video series teaching people programming." sm={true} />
          </ProjectCard>
          <ProjectCard>
            <ProjectCard.Image src={bejat} href="https://github.com/Lunarisnia/bejat" />
            <ProjectCard.Detail title="Bejat Language" description="An esoteric programming language based on python." />
          </ProjectCard>
          <ProjectCard>
            <ProjectCard.Image src={rendering} href="https://www.youtube.com/watch?v=Mqug9-ZTXPY" />
            <ProjectCard.Detail title="Rendering Engine" description="A playground for testing & learning graphics technique." />
          </ProjectCard>
          <ProjectCard>
            <ProjectCard.Image src={frameTheFight} href="https://github.com/Lunarisnia/frame-the-fight" />
            <ProjectCard.Detail title="Frame The Fight" description="Highly customizable instant overlay for your tournament" />
          </ProjectCard>
        </div>
        <div className={styles.dottedDivider}></div>
        <TitleCard id="articles" title="Articles" subtitle="Things I wrote, I hope you found this helpful." />
        <WorkHistory href="https://medium.com/@lounarisnia/the-unseen-brilliant-of-go-build-tags-944d1dc922fa">
          <WorkHistory.Header>
            The Unseen Brilliant of Go: Build Tags
          </WorkHistory.Header>
          <WorkHistory.Duration>
            https://medium.com/@lounarisnia/the-unseen-brilliant-of-go-build-tags-944d1dc922fa
          </WorkHistory.Duration>
          <WorkHistory.Detail>
            <p>Learn about one of the niche feature Go has to offer.</p>
          </WorkHistory.Detail>
        </WorkHistory>
      </Card>
    </>
  );
};

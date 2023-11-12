import Color from "color";
import { motion } from "framer-motion";
import { useRecoilValue } from "recoil";
import { darkModeState } from "../../stores/darkMode";
import { styled } from "../../styles";
import { darkThemeColors, lightThemeColors } from "../../styles/colorTheme";
import { ProjectSchema } from "../../types/contentfulSchema";
import { ImageAspect } from "../ImageAspect";

type ProjectCardProps = {
  project: ProjectSchema;
};

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
  const isDarkMode = useRecoilValue(darkModeState);

  return (
    <CardContainer
      // className="card-container"
      css={{
        boxShadow: `0 2px 20px ${Color(
          isDarkMode ? darkThemeColors.text : lightThemeColors.text
        )
          .alpha(0.1)
          .rgb()
          .string()}`,
        "@sm": {
          width: "100%",
        },
      }}
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
      initial={{ y: "20%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      onClick={() => {
        window.open(project.demo);
      }}
    >
      <Title>{project.title}</Title>
      <ImageAspect
        alt="project image"
        google
        src={project.image}
        width="100%"
        ratio={9 / 16}
      />
      {/* <Splash style={{ background }} />
      <CardMotion
        variants={cardVariants}
        // initial="offscreen"
        // whileInView="onscreen"
        // viewport={{ once: true, amount: 0.8 }}
        // className="card-motion"
      >
        sasasa
      </CardMotion> */}
    </CardContainer>
  );
};

export default ProjectCard;

const CardContainer = styled(motion.div, {
  display: "flex",
  position: "relative",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "25rem",
  gap: "1rem",
  cursor: "pointer",
  borderRadius: "2rem",
  overflow: "hidden",
});

const Title = styled(motion.div, {
  paddingTop: "1rem",
  fontSize: "2rem",
});

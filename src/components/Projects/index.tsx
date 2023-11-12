import { Entry, EntrySkeletonType } from "contentful";
import { useEffect, useState } from "react";
import { getProjects } from "../../api/contentData";
import { styled } from "../../styles";
import { ProjectSchema } from "../../types/contentfulSchema";
import InViewBox from "../ComponentEffects/InViewBox";
import Box from "../Containers/Box";
import Spacer from "../Spacer";
import GlitchEffect from "../TextEffects/GlitchEffectText";
import ProjectCard from "./ProjectCard";

const Projects = (): JSX.Element => {
  const [projects, setProjects] = useState<
    Entry<EntrySkeletonType, undefined, string>[]
  >([]);
  const fetchData = async () => {
    const data = await getProjects();
    console.log("data", data);
    setProjects(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box gap="none" padding="none" direction="column" css={{ width: "100%" }}>
      <Box
        padding="medium"
        direction="column"
        align="flex-start"
        css={{
          width: "80%",
          "@sm": {
            width: "100%",
          },
        }}
      >
        <InViewBox>
          <GlitchEffect>Projects</GlitchEffect>
          <StyledText>When I was learning...</StyledText>
        </InViewBox>
        <Spacer height={10} />
        <InViewBox x={0} y={100}>
          <Box css={{ gap: "6rem", flexWrap: "wrap" }}>
            {projects
              .sort((a, b) => {
                const aStartDate = new Date(
                  a.fields.date as ProjectSchema["date"]
                );
                const bStartDate = new Date(
                  b.fields.date as ProjectSchema["date"]
                );
                return bStartDate.getTime() - aStartDate.getTime();
              })
              .map((item, i) => (
                <ProjectCard key={i} project={item.fields as ProjectSchema} />
              ))}
          </Box>
        </InViewBox>
      </Box>
    </Box>
  );
};

export default Projects;

const StyledText = styled("div", {
  position: "relative",
  fontSize: "1.2em",
  padding: "10px",
  borderRadius: "5px",
  margin: "10px 0",
  "&::before": {
    content: '""',
    position: "absolute",
    left: "40px", // Adjust the value to shift the background to the right
    bottom: "0",
    height: "50%",
    width: "60%",
    backgroundColor: "$backgroundLayer3",
    zIndex: "-1",
  },
});

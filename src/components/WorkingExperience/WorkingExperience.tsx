import { Entry, EntrySkeletonType } from "contentful";
import { useEffect, useState } from "react";
import { getWorkingExperience } from "../../api/contentData";
import { WorkingExperienceSchema } from "../../types/contentfulSchema";
import InViewBox from "../ComponentEffects/InViewBox";
import Box from "../Containers/Box";
import Spacer from "../Spacer";
import HollowText from "../TextEffects/HollowText";
import ExperienceCard from "./ExperienceCard";

const WorkingExperience = (): JSX.Element => {
  const [workingExperience, setWorkingExperience] = useState<Entry<EntrySkeletonType, undefined, string>[]>([]);
  const fetchData = async () => {
    const data = await getWorkingExperience();
    // console.log('data', data);
    setWorkingExperience(data);
  }
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <Box
      id="working-experience"
      direction="column"
      css={{ width: "100%" }}
      gap="none"
    >
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
          <HollowText css={{ fontSize: "4rem" }}>Working Experience</HollowText>
        </InViewBox>
        <Spacer height={10} />
        {workingExperience.sort((a, b) => {
          const aStartDate = new Date(a.fields.startDate as WorkingExperienceSchema['startDate']);
          const bStartDate = new Date(b.fields.startDate as WorkingExperienceSchema['startDate']);
          return bStartDate.getTime() - aStartDate.getTime()
        }).map((item, index) => (
          <ExperienceCard key={index} experience={item.fields as WorkingExperienceSchema} />
        ))
        }
      </Box>
    </Box>
  );
};

export default WorkingExperience;

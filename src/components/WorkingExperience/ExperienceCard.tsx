import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { format } from "date-fns";
import { InView } from "react-intersection-observer";
import Slider, { Settings } from "react-slick";
import useResponsive from "../../hooks/useResponsive";
import { styled } from "../../styles";
import { ArticleSchema, WorkingExperienceSchema } from "../../types/contentfulSchema";
import InViewBox from "../ComponentEffects/InViewBox";
import Box from "../Containers/Box";
import Spacer from "../Spacer";
import DecodeDigitCodeText from "../TextEffects/DecodeDigitCodeText";
import LinkPreviewCard from "./LinkPreviewCard";

type ExperienceCardProps = {
  experience: WorkingExperienceSchema;
};

const ExperienceCard = ({ experience }: ExperienceCardProps): JSX.Element => {
  const { isMobile } = useResponsive();
  const { company, description, position, skills, startDate, endDate, articles } =
    experience;

    const sliderSettings: Settings = {
      dots: true,
      pauseOnHover: false,
      autoplay: true,
      autoplaySpeed: 3000,
      speed: 500,
      slidesToShow: isMobile ? 1 : 2,
      slidesToScroll: 1,
      nextArrow: (<></>),
      prevArrow: (<></>),
      arrows: false,
    };

    // console.log('articles', articles);
  // console.log('experience', experience);
  return (
    <InView triggerOnce threshold={isMobile ? 0.2 : 0.5}>
      {({ inView, ref }) => (
        <InViewBox
          css={{
            fontSize: "2rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
            width: "100%",
            "@sm": {
              fontSize: "1rem",
            },
          }}
          threshold={isMobile ? 0.1 : 0.3}
        >
          <DecodeDigitCodeText
            // ref={ref}
            play={inView}
            string={`Title: ${position}`}
          />
          <DecodeDigitCodeText
            // ref={ref}
            play={inView}
            string={`Company: ${company}`}
          />
          <DecodeDigitCodeText
            ref={ref}
            play={inView}
            string={`From: ${format(new Date(startDate), "yyyy-MM")} - ${
              endDate ? format(new Date(endDate), "yyyy-MM") : "Now"
            }`}
          />
          <Box justify="flex-start" css={{ flexWrap: "wrap" }}>
            {skills && skills.length >= 1 && (
              <>
                {skills.map((skill, index) => (
                  <Skill key={index}>{skill}</Skill>
                ))}
              </>
            )}
          </Box>
          <Spacer height={isMobile ? 1 : 5} />
          <Box >
            <StyledSlider {...sliderSettings}>
              {articles &&
                articles.length >= 1 &&
                articles.map((article, index) => {
                  return (<LinkPreviewCard key={index} article={article.fields as ArticleSchema} />);
                  // return (<div key={index} >dasdasd</div>);
                })}
            </StyledSlider>
          </Box>
          {documentToReactComponents(description)}
          <StyledDiv
            css={{ borderTop: "1px solid $colors$text", width: "100%" }}
          />
          <Spacer height={isMobile ? 3 : 5} />
        </InViewBox>
      )}
    </InView>
  );
};

const StyledSlider = styled(Slider, {
  maxWidth: '90vw',
  // overflow: 'hidden',
  // display: 'block'
  '.slick-slide > div': {
    display: 'grid',
    placeItems: 'center',
    padding: '3px',
    // width: '80%',
    // marginTop: '50px',
    // margin: 'auto',
    // height: '500px',
    // padding: '0px',
    // background: 'red',
  },
  '.slick-dots li button:before': {
    color: '$text',
  },
});

const StyledDiv = styled("div", {
});

const Skill = styled("div", {
  backgroundColor: "$backgroundLayer3",
  borderRadius: "4px",
  color: "$text",
  display: "inline-block",
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: "8px",
  marginBottom: "8px",
  padding: "4px 8px",
  textTransform: "uppercase",
});

export default ExperienceCard;
